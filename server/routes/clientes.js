const express = require('express');
const router = express.Router();
const pool = require('../config/db'); 
const { obtenerClientes, obtenerClientePorId, agregarCliente, actualizarCliente, eliminarCliente, eliminarTodosLosClientes} = require('../controllers/clientesController');

// Rutas de clientes
router.get('/', obtenerClientes);     
router.get('/:id', obtenerClientePorId) 
router.post('/', agregarCliente);       
router.put('/:id', actualizarCliente);  
router.delete('/:id', eliminarCliente)
router.delete('/', eliminarTodosLosClientes)

module.exports = router;