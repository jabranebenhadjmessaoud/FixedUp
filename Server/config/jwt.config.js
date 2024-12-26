import jwt from "jsonwebtoken"

const authenticate = async (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];  // Expecting "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: "Unauthorized access. No token provided." });
    }

    try {
        // Verify the token using the secret key
        const verified = jwt.verify(token, process.env.SECRET_KEY);
          // Store the user in the request object
        next();
    } catch (err) {
        console.error("Token verification error:", err);
        res.status(403).json({ message: "Invalid or expired token." });
    }
};
// (req, res, next) => {
//     jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
//     if (err) { 
//         res.status(401).json({verified: false});
//     } else {
//         next();
//     }
//     });
// }
export default authenticate
