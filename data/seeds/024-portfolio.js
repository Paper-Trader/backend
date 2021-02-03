
exports.seed = function(knex) {
  return knex('portfolio').truncate()
    .then(function () {
      return knex('portfolio').insert([
        {
          cash: 51571,
          user_id: 1
        }
      ]);
    });
};
