module.exports = {
  validRegisterBody,
  validLoginBody,
  validateID
};

const portfolioDB = require('../models/PortfolioModel');

function validRegisterBody (req, res, next) {
  const { email, username, password, firstName, lastName } = req.body;
  if (Object.keys(req.body).length === 5) {
    if (!username || !password || !email || !firstName || !lastName) res.status(500).json({ message: "Please include all five fields; email, username, password, firstName and lastName."});
    next();
  } else res.status(500).json({ message: "Please include a body on the request." });
}

function validLoginBody (req, res, next) {
  const { username, password } = req.body;
  if (Object.keys(req.body).length === 2) {
    if (!username || !password) res.status(500).json({ message: "Please include both fields; username, password."});
    next();
  } else res.status(500).json({ message: "Please include a body on the request." });
}

function validateID(req, res, next) {
  const { username } = res.decodeJwt;
  return portfolioDB.getPortfolio(username)
      .then(portfolio => {
        if (portfolio) {
          next();
        } else res.status(404).json({ message: "Invalid id." })
      })
      .catch(() => res.status(500).json({ error: "The portfolio data could not be retrieved." }))
}
