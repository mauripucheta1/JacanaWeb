const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const clientesRoutes = require('./routes/clientes'); 

const app = express();
app.use(cors()); 
app.use(bodyParser.json()); 
app.use('/clientes', clientesRoutes); 

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});