import app from './app';
import { connection } from './config/database';
import path from 'path';
import fs from 'fs';

const PORT = process.env.PORT || 5000;

async function runSqlScripts() {
  try {
    // 1. Executa carriers.sql (com tratamento para tabela existente)
    const carriersPath = path.join(__dirname, 'sql/create-tables.sql');
    const carriersSql = fs.readFileSync(carriersPath, 'utf-8');
    await connection.query(`
      DO $$
      BEGIN
        ${carriersSql}
      EXCEPTION WHEN duplicate_table THEN
        RAISE NOTICE 'Tabela carriers já existe, pulando criação.';
      END
      $$;
    `);

    // 2. Executa phones.sql (com tratamento para tabela existente)
    const phonesPath = path.join(__dirname, 'sql/seed-carriers.sql');
    const phonesSql = fs.readFileSync(phonesPath, 'utf-8');
    await connection.query(`
      DO $$
      BEGIN
        ${phonesSql}
      EXCEPTION WHEN duplicate_table THEN
        RAISE NOTICE 'Tabela phones já existe, pulando criação.';
      END
      $$;
    `);

    console.log('✅ Scripts SQL executados com segurança');
  } catch (err) {
    console.error('❌ Erro crítico ao executar scripts SQL:', err);
    throw err;
  }
}

// Fluxo de inicialização (mantido igual)
connection.query('SELECT NOW()')
  .then(() => {
    console.log('✅ PostgreSQL connected');
    return runSqlScripts();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Initialization failed:', err.message); // Mostra apenas a mensagem principal
    process.exit(1);
  });