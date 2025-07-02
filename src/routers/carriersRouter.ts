import express from 'express';
import { getCarriers } from '../controllers/carriersController';

const router = express.Router();
router.get('/carriers', getCarriers);
export default router;