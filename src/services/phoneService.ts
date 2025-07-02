import * as phoneRepository from '../repositories/phoneRepository';
import { Phone } from '../protocols/Phone';

export async function createPhone(phone: Phone) {
  // Verifica se já existem 3 telefones para o CPF
  const phoneCount = await phoneRepository.countPhonesByDocument(phone.document);
  if (phoneCount >= 3) {
    throw { type: 'CONFLICT', message: 'Limite de 3 telefones por CPF' };
  }

  // Verifica se número já existe
  const existingPhone = await phoneRepository.findPhoneByNumber(phone.phoneNumber);
  if (existingPhone) {
    throw { type: 'CONFLICT', message: 'Número já cadastrado' };
  }

  await phoneRepository.insertPhone(phone);
}