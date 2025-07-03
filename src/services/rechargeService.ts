import * as rechargeRepository from '../repositories/rechargeRepository';

export async function createRecharge(phoneId: number, amount: number) {
  const phone = await rechargeRepository.findPhoneById(phoneId);
  if (!phone) throw { type: 'NOT_FOUND', message: 'Telefone não encontrado' };

  await rechargeRepository.insertRecharge(phoneId, amount);
}