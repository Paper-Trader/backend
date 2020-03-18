
exports.seed = function(knex) {
  return knex('watchlist_stocks').truncate()
    .then(function () {
      return knex('watchlist_stocks').insert([
        {
          watchlist_id: 1,
          stock_symbol: 'TWTR',
        },
        {
          watchlist_id: 1,
          stock_symbol: 'ATVI',
        },
        {
          watchlist_id: 1,
          stock_symbol: 'AMD',
        }
      ]);
    });
};
