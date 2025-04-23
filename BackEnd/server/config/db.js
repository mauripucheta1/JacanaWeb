const { Pool } = require('pg'); 
require('dotenv').config(); 

const testDBConnection = async () => {
    try {
        const result = await pool.query('SELECT * FROM administradores');
        console.log('Contenido de la tabla administradores:', result.rows);
    } catch (error) {
        console.error('Error al conectarse a la base de datos:', error);
    }
};


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

testDBConnection();
module.exports = pool;