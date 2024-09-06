import express, { Application } from 'express';
import referralRoutes from './routes/referralRoutes';
import { connectDB } from './config/dbConfig';




const app = express();

// Middleware
app.use(express.json());
//app.use(morgan('dev'));

// Routes
app.use('/api/referrals', referralRoutes);

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Referrals Service running on port ${PORT}`);
});
