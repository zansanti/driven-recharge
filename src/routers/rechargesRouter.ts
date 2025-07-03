import express from 'express';
import { addRecharge } from '../controllers/rechargesController';
import { rechargeSchema } from '../schemas/rechargeSchema';
import { validateSchema } from '../middlewares/validateSchema';
import { listRecharges } from '../controllers/rechargesController';

const router = express.Router();
router.post('/recharges', validateSchema(rechargeSchema), addRecharge);
router.get('/recharges/:phoneId', listRecharges);
export default router;