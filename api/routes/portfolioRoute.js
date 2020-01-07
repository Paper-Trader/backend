// IMPORTS
const Portfolios = require('../models/PortfolioModel');
const authMiddleware = require('../middleware/authenticate');
const bodyMiddleware = require('../middleware/validBody')

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

// @ROUTE GET /portfolios/:id
// @DESCRIPTION Gets specific portfolio in the database
// @ACCESS Private
router.get('/:id', authMiddleware.authenticate, bodyMiddleware.validateID, async (req, res) => {
  try {
    const singlePortfolio = await Portfolios.getPortfolio(req.params.id);
    res.status(200).json(singlePortfolio)
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }
})

module.exports = router;