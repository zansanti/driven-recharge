import { connection } from '../config/database';

export async function getSummaryByDocument(document: string) {
  const result = await connection.query(
    `SELECT 
       phones.*,
       carriers.name AS carrier_name,
       json_agg(
         json_build_object(
           'amount', recharges.amount,
           'created_at', recharges.created_at
         ) ORDER BY recharges.created_at DESC
       ) AS recharges
     FROM phones
     LEFT JOIN carriers ON phones.carrier_id = carriers.id
     LEFT JOIN recharges ON phones.id = recharges.phone_id
     WHERE phones.document = $1
     GROUP BY phones.id, carriers.name`,
    [document]
  );
  return result.rows;
}