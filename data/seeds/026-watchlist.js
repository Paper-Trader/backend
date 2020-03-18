
exports.seed = function(knex) {
  return knex('watchlist').truncate()
    .then(function () {
      return knex('watchlist').insert([
        {
          user_id: 1
        }
      ]);
    });
};
