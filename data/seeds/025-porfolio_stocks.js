
exports.seed = function(knex) {
  return knex('portfolio_stocks').truncate()
    .then(function () {
      return knex('portfolio_stocks').insert([
        {
          portfolio_id: 1,
          stock_symbol: "AMD",
          purchased: 61.31,
          amount: 14
        },
        {
          portfolio_id: 1,
          stock_symbol: "AAPL",
          purchased: 156.31,
          amount: 17
        },
        {
          portfolio_id: 1,
          stock_symbol: "MU",
          purchased: 40.11,
          amount: 21
        },
      ]);
    });
};
