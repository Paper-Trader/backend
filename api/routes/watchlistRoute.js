// IMPORTS
const Watchlist = require('../models/WatchListModel');
const authMiddleware = require('../middleware/authenticate');

// EXPRESS ROUTER
const router = require('express').Router();

// @ROUTE GET /watchlist
// @DESCRIPTION Gets all watchlists in the database
// @ACCESS Private
router.get('/', authMiddleware.authenticate, async (req, res) => {
  try {
    const allWatchlists = await Watchlist.getWatchlists();
    res.status(200).json(allWatchlists)
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }
})

module.exports = router;