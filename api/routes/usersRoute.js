// IMPORTS
const Users = require('../models/UsersModel.js');
const Portfolios = require('../models/PortfolioModel');
const Watchlist = require('../models/WatchListModel');
const authMiddleware = require('../middleware/authenticate');
const bodyMiddleware = require('../middleware/validBody')

// EXPRESS ROUTER
const router = require('express').Router();

// @ROUTE GET /users
// @DESCRIPTION Gets all users in the database
// @ACCESS Private
router.get('/users', authMiddleware.authenticate, async (req, res) => {
    try {
        const allUsers = await Users.getUsers();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

// @ROUTE GET /users:id
// @Description Gets a specific user information from the database
// @ACCESS Private
router.get("/user", authMiddleware.authenticate, async (req, res) => {
    const { username } = res.decodeJwt;

    try {
      const specifiedUser = await Users.getUser(username);
      res.status(200).json(specifiedUser);
    } catch (err) {
      res.status(500).json({ message: `${err}` });
    }
});

// @ROUTE GET /:id/portfolio
// @DESCRIPTION Gets specific portfolio in the database
// @ACCESS Private
router.get('/:id/portfolio', authMiddleware.authenticate, bodyMiddleware.validateID, async (req, res) => {
  try {
    const singlePortfolio = await Portfolios.getPortfolio(req.params.id);
    res.status(200).json(singlePortfolio)
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }
})

// @ROUTE GET /:id/watchlist
// @DESCRIPTION Gets specific watchlist in the database
// @ACCESS Private
router.get('/:id/watchlist', authMiddleware.authenticate, bodyMiddleware.validateID, async (req, res) => {
  try {
    const singleWatchlist = await Watchlist.getWatchlist(req.params.id);
    res.status(200).json(singleWatchlist)
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }
})

// @ROUTE POST /:id/portfolios
// @DESCRIPTION Gets all portfolios in the database
// @ACCESS Private
router.post('/:id/portfolios', authMiddleware.authenticate, async (req, res) => {
  try {
    const singleWatchlist = await Watchlist.getWatchlist(req.params.id);
    res.status(201).json(singleWatchlist)
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }
})

module.exports = router;

