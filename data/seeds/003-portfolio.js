
exports.seed = function(knex) {
  return knex('portfolio').truncate()
    .then(function () {
      return knex('portfolio').insert([
        {
          cash: 515,
          user_id: 1
        },
        {
          cash: 10000,
          user_id: 2
        },
        {
          cash: 10000,
          user_id: 3
        },
        {
          cash: 10000,
          user_id: 4
        }
      ]);
    });
};
