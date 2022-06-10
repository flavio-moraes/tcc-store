
const requireAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
     } else {
        return res.status(401).json("Você não está autenticado!");
     }
}

const requireSelfOrAdminAuth = (req, res, next) => {
    if (req.isAuthenticated() && (req.user.id === req.params.id || req.user.role === "admin")) {
        return next();
     } else {
        return res.status(403).json("Você não possui permissão para isto!");
     }
}

const requireAdminAuth = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === "admin") {
        return next();
     } else {
        return res.status(403).json("Você não possui permissão para isto!");
     }
}

module.exports = {requireAuth, requireSelfOrAdminAuth, requireAdminAuth};