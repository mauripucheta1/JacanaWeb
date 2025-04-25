const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db'); 

// Controlador para el login
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        
        const result = await pool.query('SELECT id, password, email FROM administradores WHERE email = $1', [email]);
        console.log('Resultado de la consulta:', result.rows); 

        if (result.rowCount === 0) {
            return res.status(404).send('Correo no registrado');
        }

        const admin = result.rows[0];
        console.log('Contraseña recuperada:', admin.password); 

        const validPassword = await bcrypt.compare(password, admin.password);
        if (!validPassword) {
            return res.status(401).send('Contraseña incorrecta');
        }

        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ token });
    } catch (error) {
        console.error('Error en el login:', error);
        res.status(500).send('Error en el servidor');
    }
};

module.exports = { login };