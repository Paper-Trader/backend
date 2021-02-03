
exports.seed = function(knex) {
  return knex('portfolio_stocks').truncate()
    .then(function () {
      return knex('portfolio_stocks').insert([
        {
          portfolio_id: 1,
          stock_symbol: "AMD",
          price: 61.31,
          amount: 14
        },
        {
          portfolio_id: 1,
          stock_symbol: "AAPL",
          price: 156.31,
          amount: 17
        },
        {
          portfolio_id: 1,
          stock_symbol: "MU",
          price: 40.11,
          amount: 21
        },
      ]);
    });
};
