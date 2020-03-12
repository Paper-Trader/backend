const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {
          username: 'ArthurPi',
          password: bcrypt.hashSync("password1"),
          email: 'arthur@gmail.com',
          firstName: 'Arthur',
          lastName: 'Pisakhov'
        }
      ]);
    });
};
