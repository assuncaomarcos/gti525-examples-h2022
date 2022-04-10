const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers["x-auth-token"];

    if (!token) {
        return res.status(403).json({
            status: "erreur",
            message: "Un jeton d'authentification est nécessaire" + token
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).json({
            status: "erreur",
            message: "Jeton d'authentification invalide"
        });
    }
    return next();
};

module.exports = verifyToken;