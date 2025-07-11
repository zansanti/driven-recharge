import Joi from 'joi';
import { Phone } from '../protocols/Phone';

export const phoneSchema = Joi.object<Phone>({
  phoneNumber: Joi.string().length(11).pattern(/^\d+$/).required(),
  carrierId: Joi.number().integer().positive().required(),
  name: Joi.string().min(3).required(),
  document: Joi.string().length(11).pattern(/^\d+$/).required()
});