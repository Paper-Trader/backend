
exports.seed = function(knex) {
  return knex('portfolio_stocks').truncate()
    .then(function () {
      return knex('portfolio_stocks').insert([
        {
          portfolio_id: 1,
          stock_id: 1,
          amount: 14
        },
        {
          portfolio_id: 1,
          stock_id: 2,
          amount: 17
        },
        {
          portfolio_id: 1,
          stock_id: 3,
          amount: 21
        },
      ]);
    });
};
