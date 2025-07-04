import app from './app';
import { connection } from './config/database';
import path from 'path';
import fs from 'fs';

const PORT = process.env.PORT || 5000;

async function runSqlScripts() {
  try {
    // 1. Criação da tabela carriers (se não existir)
    await connection.query(`
      CREATE TABLE IF NOT EXISTS carriers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `);

    // 2. Criação da tabela phones (se não existir)
    await connection.query(`
      CREATE TABLE IF NOT EXISTS phones (
        id SERIAL PRIMARY KEY,
        phone_number VARCHAR(11) NOT NULL UNIQUE,
        carrier_id INTEGER NOT NULL,
        name VARCHAR(255) NOT NULL,
        document VARCHAR(11) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        CONSTRAINT fk_carrier FOREIGN KEY(carrier_id) REFERENCES carriers(id)
      );
    `);

    console.log('✅ Tabelas criadas/verificadas com sucesso');
  } catch (err) {
    console.error('❌ Erro crítico ao executar scripts SQL:', err.message);
    throw err;
  }
}

// Fluxo de inicialização
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
    console.error('❌ Initialization failed:', err.message);
    process.exit(1);
  });