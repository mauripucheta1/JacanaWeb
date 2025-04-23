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

// Rutas
app.use('/clientes', clientesRoutes); 
app.use('/auth', authRoute)

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});