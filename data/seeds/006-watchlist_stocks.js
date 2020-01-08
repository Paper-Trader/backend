
exports.seed = function(knex) {
  return knex('watchlist_stocks').truncate()
    .then(function () {
      return knex('watchlist_stocks').insert([
        {
          watchlist_id: 1,
          stock_id: 4,
        },
        {
          watchlist_id: 1,
          stock_id: 5,
        },
        {
          watchlist_id: 1,
          stock_id: 6,
        }
      ]);
    });
};
