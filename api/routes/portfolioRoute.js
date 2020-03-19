// IMPORTS
const Portfolios = require('../models/PortfolioModel');
const authMiddleware = require('../middleware/authenticate');

// EXPRESS ROUTER
const router = require('express').Router();

// @ROUTE GET /portfolio
// @DESCRIPTION Gets user portfolio in the database
// @ACCESS Private
router.get('/', authMiddleware.authenticate, async (req, res) => {
  const { username } = res.decodeJwt;
  try {
    const singlePortfolio = await Portfolios.getPortfolio(username);
    const cashPortfolio = await Portfolios.getCashPort(username);

    res.status(200).json({singlePortfolio, cashPortfolio})
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }
})

// // @ROUTE PUT /portfolio
// // @DESCRIPTION Updates user portfolio cash in the database from redux state
// // @ACCESS Private
router.put('/cash', authMiddleware.authenticate, async (req, res) => {
  const changes = req.body;
  const { id } = res.decodeJwt;

  try {
    const cashUpdate = await Portfolios.updateCash(changes, id);

    res.status(200).json(cashUpdate)
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }
})

module.exports = router;