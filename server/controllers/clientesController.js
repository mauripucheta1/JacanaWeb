const pool = require('../config/db');

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM clientes'); 
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        res.status(500).send('Error al obtener la lista de clientes');
    }
};

// Obtener cliente por ID
const obtenerClientePorId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]); 

        if (result.rowCount === 0) {
            return res.status(404).send('Cliente no encontrado'); 
        }

        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error al obtener el cliente:', error);
        res.status(500).send('Error al obtener el clientes');
    }
};

// Crear un cliente
const agregarCliente = async (req, res) => {
    const { email } = req.body; 
    try {
        const result = await pool.query(
            'INSERT INTO clientes (email) VALUES ($1) RETURNING *',
            [email]
        );
        res.status(201).json(result.rows[0]); 
    } catch (error) {
        console.error('Error al agregar cliente:', error);
        res.status(500).send('Error al agregar el cliente');
    }
};

// Actualizar el correo de un cliente por ID
const actualizarCliente = async (req, res) => {
    const { id } = req.params; 
    const { email } = req.body; 

    try {
        const result = await pool.query(
            'UPDATE clientes SET email = $1 WHERE id = $2 RETURNING *',
            [email, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).send('Cliente no encontrado'); 
        }

        res.status(200).json(result.rows[0]); 
    } catch (error) {
        console.error('Error al actualizar cliente:', error);
        res.status(500).send('Error al actualizar el cliente');
    }
};

// Eliminar un cliente por ID
const eliminarCliente = async (req, res) => {
    const { id } = req.body; 
    try {
        const result = await pool.query(
            'DELETE FROM clientes WHERE id = $1 RETURNING *', [id]
            
        );

        if (result.rowCount === 0) {
            return res.status(404).send('Cliente no encontrado');
        }

        res.status(200).json(result.rows[0]); 
    } catch (error) {
        console.error('Error al eliminar cliente:', error);
        res.status(500).send('Error al eliminar el cliente');
    }
};

// Eliminamos todos los clientes
const eliminarTodosLosClientes = async (req, res) => {
    try {

        const result = await pool.query('DELETE FROM clientes RETURNING *');

        if (result.rowCount === 0) {
            return res.status(404).send('Cliente no encontrado');
        }

        res.status(200).json({
            mensaje: 'Todos los clientes han sido eliminados',
        });

    } catch (error) {
        console.error('Error al eliminar todos los clientes:', error);
        res.status(500).send('Error al eliminar todos los clientes');
    }
};

module.exports = { obtenerClientes, obtenerClientePorId, agregarCliente, actualizarCliente, eliminarCliente, eliminarTodosLosClientes }; 