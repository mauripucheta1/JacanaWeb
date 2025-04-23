const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).send('Se requiere un token para acceder a esta ruta');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = decoded; 
        next(); 
    } catch (error) {
        console.error('Token inválido:', error);
        res.status(401).send('Token inválido o expirado');
    }
};

module.exports = verificarToken;