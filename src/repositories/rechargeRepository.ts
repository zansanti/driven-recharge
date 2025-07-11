import { connection } from '../config/database';
import { PhoneDB, RechargeDB } from '../protocols/Database'; // Importe do arquivo central

// Versão final (sem repetição de interfaces)
export async function insertRecharge(phoneId: number, amount: number): Promise<void> {
  await connection.query(
    `INSERT INTO recharges (phone_id, amount) VALUES ($1, $2)`,
    [phoneId, amount]
  );
}

export async function findPhoneById(phoneId: number): Promise<PhoneDB | undefined> {
  const result = await connection.query<PhoneDB>(
    `SELECT * FROM phones WHERE id = $1`,
    [phoneId]
  );
  return result.rows[0];
}

export async function findRechargesByPhoneId(phoneId: number): Promise<RechargeDB[]> {
  const result = await connection.query<RechargeDB>(
    `SELECT * FROM recharges 
     WHERE phone_id = $1 
     ORDER BY id DESC`,
    [phoneId]
  );
  return result.rows;
}