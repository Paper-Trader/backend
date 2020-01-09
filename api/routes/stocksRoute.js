// IMPORTS
const Stocks = require('../models/StockModel');
const authMiddleware = require('../middleware/authenticate');
const bodyMiddleware = require('../middleware/validBody')

// EXPRESS ROUTER
const router = require('express').Router();

// // @ROUTE GET /stocks
// // @DESCRIPTION Gets all stocks in the database
// // @ACCESS Private
// router.get('/', authMiddleware.authenticate, bodyMiddleware.validateID, async (req, res) => {
//   const { username } = res.decodeJwt;
//   try {
//     const singlePortfolio = await Portfolios.getPortfolio(username);
//     res.status(200).json(singlePortfolio)
//   } catch (err) {
//     res.status(500).json({ message: `${err}` });
//   }
// })

// @ROUTE POST /stocks
// @DESCRIPTION Updates all stocks in the database by replacing the old prices with new prices
// @ACCESS Private
router.post('/', authMiddleware.authenticate, bodyMiddleware.validateID, async (req, res) => {
  console.log(req.body)
  // const {  }
  // try {
  //   const singlePortfolio = await Stocks.updateStocks(username);
  //   res.status(200).json(singlePortfolio)
  // } catch (err) {
  //   res.status(500).json({ message: `${err}` });
  // }
})

module.exports = router;