const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const clientesRoutes = require('./routes/clientes'); 
const authRoute = require('./routes/auth'); 
const app = express();
app.use(cors()); 
app.use(bodyParser.json()); 


app.use('/clientes', clientesRoutes); 
app.use('/auth', authRoute)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});