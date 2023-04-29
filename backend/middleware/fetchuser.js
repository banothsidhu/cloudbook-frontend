const jwt = require('jsonwebtoken');
const JWT_TOKEN = 'This Is The JWT Token';

const fetchuser = (req, res, next) => {
    console.log("Iam from fetchuser")
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({ err: "Access denied" });
    }
    try {
        const data = jwt.verify(token, JWT_TOKEN);
        req.user = data
        next();
    } catch (err) {
        res.status(401).send({ err: "Access denied" });
    }
}
module.exports = fetchuser