// IMPORTS
const JWT = require("jsonwebtoken");

// FUNCTION
function authenticate(req, res, next) {
  const token = req.headers.authorization;
  const secret = process.env.JWT_Secret;

  if (token) {
    JWT.verify(token, secret, (err, decodedToken) => {
      if (err) {
        // Token expired or not valid
        res.status(401).json({ message: "User not authorized." });
      } else {
        // Token verified; moves to the next middleware in sequence/endpoint
        next(); //move on to the requested endpoint
      }
    });
  } else {
    res.status(401).json({ message: "No token provided." });
  }
}
// EXPORTS
module.exports = authenticate;