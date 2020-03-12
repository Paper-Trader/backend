
exports.seed = function(knex) {
  return knex('stocks').truncate()
    .then(function () {
      return knex('stocks').insert([
        {symbol: 'MU'},
        {symbol: 'AAPL'},
        {symbol: 'MSFT'},
        {symbol: 'TWTR'},
        {symbol: 'ATVI'},
        {symbol: 'AMD'},
        {symbol: 'GOOGL'},
        {symbol: 'AMZN'},
        {symbol: 'TSLA'}
      ]);
    });
};
