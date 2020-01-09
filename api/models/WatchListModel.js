const db = require('../../data/dbConfig');

module.exports = {
    getWatchlists,
    getWatchlist
}

function getWatchlist(username) {
  return db('watchlist as wl')
      .select('s.symbol', 's.price')
      .join('watchlist_stocks as wls', 'wl.id', 'wls.watchlist_id')
      .join('stocks as s', 's.id', 'wls.stock_id')
      .join('users as u', 'wl.user_id', 'u.id')
      .where('u.username', username);
}

function getWatchlists() {
    return db('watchlist as wl')
      .select('wl.id', 'u.username')
      .join('users as u', 'u.id', 'wl.user_id');
}



