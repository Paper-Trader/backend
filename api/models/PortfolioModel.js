const db = require('../../data/dbConfig');
const middleware = require('./UsersModel');

module.exports = {
    getPortfolios,
    getPortfolio
}

function getPortfolios() {
    return db('portfolio as p')
      .select('p.id', 'u.username', 'p.cash')
      .join('users as u', 'u.id', 'p.user_id');
}

function getPortfolio(id) {
  let query =  db('portfolio as p')
    .select('p.id', 'u.username', 'p.cash')
    .join('users as u', 'u.id', 'p.user_id')
    .where('p.id', id).first();

  return Promise.all([query, middleware.getPortfolio(id)])
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


