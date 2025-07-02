import app from './app';
import { connection } from './config/database';

const PORT = process.env.PORT || 5000;

// Testa a conexão com o PostgreSQL antes de subir o servidor
connection.query('SELECT NOW()')
  .then(() => {
    console.log('✅ PostgreSQL connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ PostgreSQL connection error', err.stack);
  });