import Joi from 'joi';

export const phoneSchema = Joi.object({
  phoneNumber: Joi.string().length(11).pattern(/^\d+$/).required(),
  carrierId: Joi.number().integer().positive().required(),
  name: Joi.string().min(3).required(),
  description: Joi.string().min(5).required(),
  document: Joi.string().length(11).pattern(/^\d+$/).required()
});