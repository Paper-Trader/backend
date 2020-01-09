const db = require('../../data/dbConfig');

module.exports = {
    getPortfolio,
    // updatePortfolio
}

function getPortfolio(username) {
  return db('portfolio as p')
    .select('s.symbol', 's.price', 'ps.amount')
    .join('portfolio_stocks as ps', 'p.id', 'ps.portfolio_id')
    .join('stocks as s', 's.id', 'ps.stock_id')
    .join('users as u', 'p.user_id', 'u.id')
    .where('u.username', username)
}

// function updatePortfolio(username, data) { // todo
//   console.log(data)
// }


