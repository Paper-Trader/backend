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
        },
        {
          username: 'KristinBa',
          password: bcrypt.hashSync("password2"),
          email: 'kristin@gmail.com',
          firstName: 'Kristin',
          lastName: 'Barr'
        },
        {
          username: 'RonnyAl',
          password: bcrypt.hashSync("password3"),
          email: 'ronny@gmail.com',
          firstName: 'Ronny',
          lastName: 'Alvardo'
        },
        {
          username: 'AdetunjiSh',
          password: bcrypt.hashSync("password4"),
          email: 'adetunji@gmail.com',
          firstName: 'Adetunji',
          lastName: 'Shennaike'
        }
      ]);
    });
};
