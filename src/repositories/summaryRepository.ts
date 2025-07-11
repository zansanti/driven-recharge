import { connection } from '../config/database';
import { PhoneDB } from '../protocols/Database'; 

// Tipo para o objeto de recarga no JSON agregado
interface RechargeSummary {
  amount: number;
}

// Tipo do retorno completo
interface SummaryResult extends PhoneDB {
  carrier_name: string;
  recharges: RechargeSummary[];
}

export async function getSummaryByDocument(document: string): Promise<SummaryResult[]> {
  const result = await connection.query<SummaryResult>(
    `SELECT 
       phones.id,
       phones.phone_number as "phoneNumber",
       phones.carrier_id as "carrierId",
       phones.name,
       phones.document,
       carriers.name as "carrierName",
       json_agg(
         json_build_object(
           'amount', recharges.amount
         ) ORDER BY recharges.id DESC
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