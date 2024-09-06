import request from 'supertest';
import app from '../src/index'; // Assuming this is where the Express app is initialized

describe('Billing Controller', () => {
  it('should create an invoice', async () => {
    const response = await request(app)
      .post('/create-invoice')
      .send({ patientId: 'patient123', amount: 100 });

    expect(response.status).toBe(201);
    expect(response.body.invoice).toHaveProperty('_id');
  });

  it('should process a payment', async () => {
    const response = await request(app)
      .post('/process-payment')
      .send({ invoiceId: 'invoice123', paymentDetails: {} });

    expect(response.status).toBe(200);
    expect(response.body.invoice.status).toBe('Paid');
  });
});
