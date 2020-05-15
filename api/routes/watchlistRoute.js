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

// @ROUTE POST /watchlist
// @DESCRIPTION Posts a stock to the user's watch list
// @ACCESS Private
router.post('/', authMiddleware.authenticate, async (req, res) => {
  const { id } = res.decodeJwt;
  console.log(req.body)
  try {
    await Watchlist.addToWatchList(id, req.body.symbol);
    res.status(200).json(req.body.symbol)
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }
})

// @ROUTE DELETE /watchlist
// @DESCRIPTION Remove stock from watchlist
// @ACCESS Private
router.delete('/', authMiddleware.authenticate, async (req, res) => {
  const { id } = res.decodeJwt;
  console.log(req.body)
  try {
    await Watchlist.removeFromWatchList(id, req.body.symbol);
    res.status(200).json(req.body.symbol)
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }
})


module.exports = router;