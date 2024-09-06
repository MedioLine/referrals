import mongoose, { Document, Schema } from 'mongoose';

interface IReferral extends Document {
  patientId: mongoose.Types.ObjectId;
  doctorId: mongoose.Types.ObjectId;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

const referralSchema: Schema<IReferral> = new Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IReferral>('Referral', referralSchema);
