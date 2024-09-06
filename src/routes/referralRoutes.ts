import express from 'express';
import { createReferral, getReferrals } from '../controllers/referralController';

const router = express.Router();

router.post('/', createReferral);
router.get('/', getReferrals);

export default router;
