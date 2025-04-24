const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

console.log('Variables de entorno:', process.env);

const testDBConnection = async () => {
    try {
        const result = await pool.query('SELECT * FROM administradores');
        console.log('Contenido de la tabla administradores:', result.rows);
    } catch (error) {
        console.error('Error al conectarse a la base de datos:', error);
    }
};

testDBConnection(); 

module.exports = pool;