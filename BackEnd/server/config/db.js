require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT, 
  ssl: {
    rejectUnauthorized: false, 
  },
});

const testDBConnection = async () => {
  try {
    const result = await pool.query('SELECT 1 + 1 AS result');
    console.log('Conexión exitosa. Resultado:', result.rows);
  } catch (error) {
    console.error('Error al conectarse a la base de datos:', error);
  }
};

testDBConnection();

module.exports = pool;