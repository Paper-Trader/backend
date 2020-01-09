const db = require('../../data/dbConfig');
const portDB = require('../models/PortfolioModel');
const watchDB = require('../models/WatchListModel');

module.exports = {
    getUsers,
    getUser,
    addUser,
    getUserByName
}

function getUsers() {
    return db('users as u').select('u.email', 'u.username', 'u.password', 'u.firstName', 'u.lastName')
}

function getUser(username) {
    let query = db('users as u')
        .select('u.username', 'p.cash')
        .join('portfolio as p', 'u.id', 'p.user_id')
        .where('u.username', username).first();

    return Promise.all([query, portDB.getPortfolio(username), watchDB.getWatchlist(username)])
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