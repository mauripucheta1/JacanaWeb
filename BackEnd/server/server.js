// Necesario
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const clientesRoutes = require('./routes/clientes'); 
const authRoute = require('./routes/auth'); 
const app = express();

// Middleware para análisis del cuerpo de las solicitudes
app.use(bodyParser.json()); 

// Configuración de CORS
app.use(cors({
    origin: ('https://tiendajacana.netlify.app', 'http://localhost:4321'),
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
}));

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al API de Jacana');
});

// Rutas
app.use('/clientes', clientesRoutes); 
app.use('/auth', authRoute)

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});