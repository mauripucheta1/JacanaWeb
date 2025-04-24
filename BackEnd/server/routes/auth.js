const express = require('express');
const { login } = require('../controllers/authController'); 

const router = express.Router();

// Ruta raíz
router.get('/', (req, res) => {
    res.send('¡Servidor Backend funcionando correctamente!');
});

// Ruta login
router.post('/login', login); 

module.exports = router;