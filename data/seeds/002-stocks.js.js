
exports.seed = function(knex) {
  return knex('stocks').truncate()
    .then(function () {
      return knex('stocks').insert([
        {
          symbol: 'MU',
          price: 65.37
        },
        {
          symbol: 'AAPL',
          price: 300.28,
        },
        {
          symbol: 'MSFT',
          price: 160.52,
        },
        {
          symbol: 'TWTR',
          price: 31.64
        },
        {
          symbol: 'ATVI',
          price: 59.74
        },
        {
          symbol: 'AMD',
          price: 48.39
        },
        {
          symbol: 'GOOGL',
          price: 1210.90
        },
        {
          symbol: 'AMZN',
          price: 1820.86
        },
        {
          symbol: 'TSLA',
          price: 634.23
        }
      ]);
    });
};
