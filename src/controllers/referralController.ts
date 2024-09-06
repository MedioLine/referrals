import { Request, Response } from 'express';
import Referral from '../models/referralModel';

// Create a new referral
export const createReferral = async (req: Request, res: Response): Promise<void> => {
  try {
    const referral = new Referral(req.body);
    await referral.save();
    res.status(201).json(referral);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Get all referrals
export const getReferrals = async (_req: Request, res: Response): Promise<void> => {
  try {
    const referrals = await Referral.find();
    res.status(200).json(referrals);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
