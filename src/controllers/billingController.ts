import { Request, Response } from 'express';
import BillingModel from '../models/billingModel';
import { processPayment } from '../utils/paymentUtils';

export const createInvoice = async (req: Request, res: Response) => {
  try {
    const invoice = new BillingModel(req.body);
    await invoice.save();
    res.status(201).json({ message: 'Invoice created successfully', invoice });
  } catch (error) {
    res.status(500).json({ message: 'Error creating invoice', error });
  }
};

export const processPaymentHandler = async (req: Request, res: Response) => {
  try {
    const { invoiceId, paymentDetails } = req.body;
    const invoice = await BillingModel.findById(invoiceId);
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });

    const paymentResult = await processPayment(paymentDetails);
    invoice.status = paymentResult.success ? 'Paid' : 'Pending';
    await invoice.save();

    res.status(200).json({ message: 'Payment processed', invoice });
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment', error });
  }
};
