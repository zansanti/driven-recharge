import express from 'express';
import { addPhone } from '../controllers/phonesController';
import { phoneSchema } from '../schemas/phoneSchema';
import { validateSchema } from '../middlewares/validateSchema';

const router = express.Router();
router.post('/phones', validateSchema(phoneSchema), addPhone);
export default router;