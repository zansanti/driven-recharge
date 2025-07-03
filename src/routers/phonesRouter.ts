import express from 'express';
import { addPhone } from '../controllers/phonesController';
import { phoneSchema } from '../schemas/phoneSchema';
import { validateSchema } from '../middlewares/validateSchema';
import { listPhonesByDocument } from '../controllers/phonesController';

const router = express.Router();
router.post('/phones', validateSchema(phoneSchema), addPhone);
router.get('/phones/:document', listPhonesByDocument);
export default router;