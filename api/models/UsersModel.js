const db = require('../../data/dbConfig');

module.exports = {
    getUsers,
    getUser,
    addUser,
    getUserByName,
    getPortfolio
}

function getUsers() {
    return db('users as u').select('u.id', 'u.email', 'u.username', 'u.password', 'u.firstName', 'u.lastName')
}

function getUser(id) {
    let query = db('users as u')
        .select('u.id', 'u.username', 'p.cash')
        .join('portfolio as p', 'u.id', 'p.user_id')
        .where('u.id', id).first();

    return Promise.all([query, this.getPortfolio(id)])
        .then(data => {
            let [user, portfolio] = data
            
            if (user) {
                user.portfolio = portfolio.map(portfolio => portfolio);

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

function getPortfolio(id) {
    let query = db('portfolio as p')
        .select('ps.stock_id', 's.symbol', 's.price', 'ps.amount')
        .join('portfolio_stocks as ps', 'p.id', 'ps.portfolio_id')
        .join('stocks as s', 's.id', 'ps.stock_id')

    return query.where('p.user_id', id);
}