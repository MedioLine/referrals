import { Router } from 'express';
import { createInvoice, processPaymentHandler } from '../controllers/billingController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/create-invoice', authMiddleware, createInvoice);
router.post('/process-payment', authMiddleware, processPaymentHandler);

export default router;
