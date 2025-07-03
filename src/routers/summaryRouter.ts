import express from 'express';
import { getSummary } from '../controllers/summaryController';

const router = express.Router();
router.get('/summary/:document', getSummary);
export default router;