import { connection } from '../config/database';
import { Phone } from '../protocols/Phone';

export async function insertPhone(phone: Phone) {
  await connection.query(
    `INSERT INTO phones (phone_number, carrier_id, name, document) 
     VALUES ($1, $2, $3, $4)`,
    [phone.phoneNumber, phone.carrierId, phone.name, phone.document]
  );
}
export async function countPhonesByDocument(document: string): Promise<number> {
  const result = await connection.query<{ count: string }>(
    `SELECT COUNT(*) FROM phones WHERE document = $1`,
    [document]
  );
  return parseInt(result.rows[0].count);
}

export async function findPhoneByNumber(phoneNumber: string): Promise<Phone | undefined> {
const result = await connection.query<Phone>(
  `SELECT 
     id,
     phone_number as "phoneNumber",
     carrier_id as "carrierId",
     name,
     document
   FROM phones WHERE phone_number = $1`,
  [phoneNumber]
);
  return result.rows[0];
}
export async function findPhonesByDocument(document: string): Promise<Phone[]> {
  const result = await connection.query(
    `SELECT 
       phones.id,
       phones.phone_number as "phoneNumber",
       phones.carrier_id as "carrierId",
       phones.name,
       phones.document,
       carriers.name as "carrierName",
       carriers.code as "carrierCode"
     FROM phones
     JOIN carriers ON phones.carrier_id = carriers.id
     WHERE phones.document = $1`,
    [document]
  );
  return result.rows;
}