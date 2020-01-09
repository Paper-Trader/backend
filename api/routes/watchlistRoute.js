// IMPORTS
const Watchlist = require('../models/WatchListModel');
const authMiddleware = require('../middleware/authenticate');

// EXPRESS ROUTER
const router = require('express').Router();

// @ROUTE GET /watchlist
// @DESCRIPTION Gets user watchlist in the database
// @ACCESS Private
router.get('/', authMiddleware.authenticate, async (req, res) => {
  const { username } = res.decodeJwt;
  try {
    const singleWatchlists = await Watchlist.getWatchlist(username);
    res.status(200).json(singleWatchlists)
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }
})


module.exports = router;