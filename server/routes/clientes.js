const express = require('express');
const router = express.Router();
const pool = require('../config/db'); 
const { obtenerClientes, contarClientes, obtenerClientePorId, agregarCliente, actualizarCliente, eliminarCliente, eliminarTodosLosClientes} = require('../controllers/clientesController');
const verificarToken = require('../middlewares/authMiddleware')

// Rutas de clientes
router.get('/', verificarToken, obtenerClientes);     
router.get('/count', verificarToken, contarClientes);
router.get('/:id', verificarToken, obtenerClientePorId);
router.post('/', agregarCliente);       
router.put('/:id', verificarToken, actualizarCliente);  
router.delete('/:id', verificarToken, eliminarCliente);
router.delete('/', verificarToken, eliminarTodosLosClientes);

module.exports = router;