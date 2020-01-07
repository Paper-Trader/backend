
exports.seed = function(knex) {
  return knex('portfolio_stocks').truncate()
    .then(function () {
      return knex('portfolio_stocks').insert([
        {
          cash: 515,
          user_id: 1
        }
      ]);
    });
};
