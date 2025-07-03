import { connection } from '../config/database';

export async function insertRecharge(phoneId: number, amount: number) {
  await connection.query(
    `INSERT INTO recharges (phone_id, amount) VALUES ($1, $2)`,
    [phoneId, amount]
  );
}

export async function findPhoneById(phoneId: number) {
  const result = await connection.query(
    `SELECT * FROM phones WHERE id = $1`,
    [phoneId]
  );
  return result.rows[0];
}