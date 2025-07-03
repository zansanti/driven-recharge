import * as rechargeRepository from '../repositories/rechargeRepository';
import { findRechargesByPhoneId } from '../repositories/rechargeRepository';
import { findPhoneById } from '../repositories/rechargeRepository';

export async function createRecharge(phoneId: number, amount: number) {
  const phone = await rechargeRepository.findPhoneById(phoneId);
  if (!phone) throw { type: 'NOT_FOUND', message: 'Telefone não encontrado' };

  await rechargeRepository.insertRecharge(phoneId, amount);
}

export async function getRechargesByPhoneId(phoneId: number) {
  const phoneExists = await findPhoneById(phoneId);
  if (!phoneExists) throw { type: 'NOT_FOUND', message: 'Telefone não encontrado' };

  return await findRechargesByPhoneId(phoneId);
}