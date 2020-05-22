// IMPORTS
const jwt = require("jsonwebtoken");

// EXPORTS
module.exports = {
  authenticate,
  generateToken,
}

// FUNCTION
function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    const secret = process.env.JWT_SECRET;

    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) res.status(401).json({ message: "Session expired" }) // Token expired or not valid
      else { // Token verified; moves to the next middleware in sequence/endpoint
        res.decodeJwt = decodedToken; 
        next(); //move on to the requested endpoint
      } 
    });
  } else res.status(401).json({ message: "No token provided." });
}

function generateToken(user) {
  const payload = { 
    username: user.username,
    id:  user.id
  };
  const secret = process.env.JWT_SECRET;
  const options = { expiresIn: '8h' };

  return jwt.sign(payload, secret, options)
}
