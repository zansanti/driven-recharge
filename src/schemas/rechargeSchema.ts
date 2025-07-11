import Joi from 'joi';
import { Recharge } from '../protocols/Recharge';

export const rechargeSchema = Joi.object<Recharge>({
  phoneId: Joi.number().integer().positive().required(),
  amount: Joi.number().min(10).max(1000).required()
});