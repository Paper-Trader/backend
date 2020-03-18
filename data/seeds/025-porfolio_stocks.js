
exports.seed = function(knex) {
  return knex('portfolio_stocks').truncate()
    .then(function () {
      return knex('portfolio_stocks').insert([
        {
          portfolio_id: 1,
          stock_symbol: "AMD",
          amount: 14
        },
        {
          portfolio_id: 1,
          stock_symbol: "AAPL",
          amount: 17
        },
        {
          portfolio_id: 1,
          stock_symbol: "MU",
          amount: 21
        },
      ]);
    });
};
