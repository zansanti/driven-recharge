import { connection } from "../config/database";
import { Carrier } from "../protocols/Carrier";

export async function getCarriers(): Promise<Carrier[]> {
  const result = await connection.query<Carrier>("SELECT * FROM carriers");
  return result.rows;
}