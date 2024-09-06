import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

console.log('Connecting to MongoDB at URI:', process.env.MONGO_URI);

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};
