import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

export const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false // ← Isso resolve o erro!
});