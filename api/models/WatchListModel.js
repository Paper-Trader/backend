const db = require('../../data/dbConfig');
const userModel = require('./UsersModel');

module.exports = {
    getWatchlists,
    getWatchlist,
    addWatchlist,
    addToWatchList,
    removeFromWatchList
}

function getWatchlist(username) {
  return db('watchlist as wl')
      .select('s.symbol')
      .join('watchlist_stocks as wls', 'wl.id', 'wls.watchlist_id')
      .join('stocks as s', 's.symbol', 'wls.stock_symbol')
      .join('users as u', 'wl.user_id', 'u.id')
      .where('u.username', username);
}

function getWatchlists() {
    return db('watchlist as wl')
      .select('wl.id', 'u.username')
      .join('users as u', 'u.id', 'wl.user_id');
}

function addWatchlist(id) {
  return db('watchlist').insert({user_id: id})
}

function addToWatchList(id, stock) {
  return db('watchlist_stocks').insert({
    watchlist_id: id,
    stock_symbol: stock
  })
}

function removeFromWatchList(id, stock) {
  return db('watchlist_stocks')
    .where({
      watchlist_id: id,
      stock_symbol: stock
    })
    .del()
}



