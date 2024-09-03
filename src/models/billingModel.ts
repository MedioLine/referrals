import mongoose from 'mongoose';

const billingSchema = new mongoose.Schema({
  patientId: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

const BillingModel = mongoose.model('Billing', billingSchema);

export default BillingModel;
