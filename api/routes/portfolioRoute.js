// IMPORTS
const Portfolios = require('../models/PortfolioModel');
const authMiddleware = require('../middleware/authenticate');
const bodyMiddleware = require('../middleware/validBody')

// EXPRESS ROUTER
const router = require('express').Router();

// @ROUTE GET /portfolio
// @DESCRIPTION Gets user portfolio in the database
// @ACCESS Private
router.get('/', authMiddleware.authenticate, bodyMiddleware.validateID, async (req, res) => {
  const { username } = res.decodeJwt;
  try {
    const singlePortfolio = await Portfolios.getPortfolio(username);
    res.status(200).json(singlePortfolio)
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }
})

// @ROUTE POST /portfolio
// @DESCRIPTION Gets user portfolio in the database
// @ACCESS Private
router.get('/', authMiddleware.authenticate, bodyMiddleware.validateID, async (req, res) => {
  const { username } = res.decodeJwt;
  try {
    const singlePortfolio = await Portfolios.getPortfolio(username);
    res.status(200).json(singlePortfolio)
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }
})

// // @ROUTE PUT /portfolio
// // @DESCRIPTION Updates user portfolio in the database from redux state
// // @ACCESS Private
// router.put('/', authMiddleware.authenticate, bodyMiddleware.validateID, async (req, res) => {
//   const newData = req.body;
//   const { username } = res.decodeJwt;
//   try {
//     const singlePortfolio = await Portfolios.updatePortfolio(username, newData);
//     console.log(singlePortfolio)
//     res.status(200).json(singlePortfolio)
//   } catch (err) {
//     res.status(500).json({ message: `${err}` });
//   }
// })

module.exports = router;