const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json("Token inválido!")
            req.user = user;
            next();
        })
    }
    else {
        return res.status(401).json("Você não está autenticado!");
    }
}

const verifyTokenAndAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        //Permitir continuar (next) a rota (route) se o requerente for o usuário a ser mudado ou se o requerente for um admin
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json("Você não possui permissão para isto!");
        }
    });
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        //Permitir continuar (next) a rota (route) se o requerente for um admin
        if (req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json("Você não possui permissão para isto!");
        }
    });
}

module.exports = {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin};