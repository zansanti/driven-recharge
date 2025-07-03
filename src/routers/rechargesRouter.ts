import express from 'express';
import { addRecharge } from '../controllers/rechargesController';
import { rechargeSchema } from '../schemas/rechargeSchema';
import { validateSchema } from '../middlewares/validateSchema';

const router = express.Router();
router.post('/recharges', validateSchema(rechargeSchema), addRecharge);
export default router;