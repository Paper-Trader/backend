
exports.seed = function(knex) {
  return knex('portfolio').truncate()
    .then(function () {
      return knex('portfolio').insert([
        {
          cash: 515,
          user_id: 1
        }
      ]);
    });
};
