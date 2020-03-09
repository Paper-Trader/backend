const db = require('../../data/dbConfig');

module.exports = {
    getPortfolio,
    addPortfolio
}

function getPortfolio(username) {
  return db('portfolio as p')
    .select('s.symbol', 's.price', 'ps.amount')
    .join('portfolio_stocks as ps', 'p.id', 'ps.portfolio_id')
    .join('stocks as s', 's.symbol', 'ps.stock_symbol')
    .join('users as u', 'p.user_id', 'u.id')
    .where('u.username', username)
}

function addPortfolio(id) {
  // console.log(id)
  // return db('portfolio as p')
  //   .join('users as u', 'p.user_id', 'u.id')
  //   .where('u.id', id)
  //   .insert({
  //     cash: 10000,
  //     user_id: id
  //   })

  return db('portfolio').insert({
    cash: 10000,
    user_id: id
  })
}


