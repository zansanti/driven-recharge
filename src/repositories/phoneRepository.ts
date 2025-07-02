import { connection } from '../config/database';
import { Phone } from '../protocols/Phone';

export async function insertPhone(phone: Phone) {
  await connection.query(
    `INSERT INTO phones (phone_number, carrier_id, name, description, document) 
     VALUES ($1, $2, $3, $4, $5)`,
    [phone.phoneNumber, phone.carrierId, phone.name, phone.description, phone.document]
  );
}
export async function countPhonesByDocument(document: string): Promise<number> {
  const result = await connection.query(
    `SELECT COUNT(*) FROM phones WHERE document = $1`,
    [document]
  );
  return parseInt(result.rows[0].count);
}

export async function findPhoneByNumber(phoneNumber: string) {
  const result = await connection.query(
    `SELECT * FROM phones WHERE phone_number = $1`,
    [phoneNumber]
  );
  return result.rows[0];
}