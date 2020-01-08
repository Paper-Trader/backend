// IMPORTS
const Portfolios = require('../models/PortfolioModel');
const authMiddleware = require('../middleware/authenticate');

// EXPRESS ROUTER
const router = require('express').Router();

// @ROUTE GET /portfolios
// @DESCRIPTION Gets all portfolios in the database
// @ACCESS Private
router.get('/', authMiddleware.authenticate, async (req, res) => {
  try {
    const allPortfolios = await Portfolios.getPortfolios();
    res.status(200).json(allPortfolios)
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }
})

module.exports = router;