const express = require('express');
const { login } = require('../controllers/authController'); 

const router = express.Router();

// Ruta madre
app.get('/', (req, res) => {
    res.send('¡Servidor Backend funcionando correctamente!');
});

router.post('/login', login); 

module.exports = router;