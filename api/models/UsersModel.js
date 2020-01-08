const db = require('../../data/dbConfig');

module.exports = {
    getUsers,
    getUser,
    addUser,
    getUserByName,
    getPortfolio,
    getWatchlist
}

function getUsers() {
    return db('users as u').select('u.email', 'u.username', 'u.password', 'u.firstName', 'u.lastName')
}

function getUser(username) {
    let query = db('users as u')
        .select('u.username', 'p.cash')
        .join('portfolio as p', 'u.id', 'p.user_id')
        .where('u.username', username).first();

    return Promise.all([query, this.getPortfolio(username), this.getWatchlist(username)])
        .then(data => {
            let [user, portfolio, watchlist] = data

            if (user) {
                user.portfolio = portfolio.map(portfolio => portfolio);
                user.watchlist = watchlist.map(watchlist => watchlist);
                return user
            } else {
                return null
            }
        })
}

function addUser(user) {
    return db("users").insert(user);
}

function getUserByName(username){
    return db("users").where('users.username', username).first();
}

function getPortfolio(username) {
    let query = db('portfolio as p')
        .select('s.symbol', 's.price', 'ps.amount')
        .join('portfolio_stocks as ps', 'p.id', 'ps.portfolio_id')
        .join('stocks as s', 's.id', 'ps.stock_id')
        .join('users as u', 'p.user_id', 'u.id')

    return query.where('u.username', username);
}

function getWatchlist(username) {
    let query = db('watchlist as wl')
        .select('s.symbol', 's.price')
        .join('watchlist_stocks as wls', 'wl.id', 'wls.watchlist_id')
        .join('stocks as s', 's.id', 'wls.stock_id')
        .join('users as u', 'wl.user_id', 'u.id')

    return query.where('u.username', username);
}