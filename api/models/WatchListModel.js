const db = require('../../data/dbConfig');
const middleware = require('./UsersModel');

module.exports = {
    getWatchlists,
    getWatchlist
}

function getWatchlists() {
    return db('watchlist as wl')
      .select('wl.id', 'u.username')
      .join('users as u', 'u.id', 'wl.user_id');
}

function getWatchlist(id) {
  let query = db('watchlist as wl')
    .select('wl.id', 'u.username')
    .join('users as u', 'u.id', 'wl.user_id')
    .where('wl.id', id).first();

  return Promise.all([query, middleware.getWatchlist(id)])
    .then(data => {
        let [user, watchlist] = data

        if (user) {
            user.watchlist = watchlist.map(watchlist => watchlist);

            return user
        } else {
            return null
        }
    })
}


