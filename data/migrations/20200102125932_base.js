
exports.up = function(knex) {
  return knex.schema

    .createTable('users', table => { // User Table
      table.increments(); // Primary Key
      table.string('username', 35).notNullable().unique() // Non Null and Unique
      table.string('password', 35).notNullable(); 
      table.string('email').notNullable().unique()
      table.string('firstName', 35).notNullable()
      table.string('lastName', 35).notNullable()
    })

    .createTable('portfolio', table => { // Portfolio Table
      table.increments() // Primary Key
      table.decimal('cash', 9, 2).notNullable()
      table // Foreign Key
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('users')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
    })

    .createTable('stocks', table => { // Stock Table
      table.increments() // Primary Key
      table.string('symbol', 5).notNullable().unique()
    })

    .createTable('portfolio_stocks', table => {
      table // Primary Foreign Key combo
        .integer('portfolio_id')
        .unsigned()
        .notNullable()
        .references('portfolio.id')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
      table
        .string('stock_symbol')
        .unsigned()
        .notNullable()
        .references('stocks.symbol')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
      table.integer('price')
      table.integer('amount')
    })

    .createTable('watchlist', table => { // Portfolio Table
      table.increments() // Primary Key
      table // Foreign Key
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('users.id')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
    })

    .createTable('watchlist_stocks', table => {
      table // Primary Foreign Key combo
        .integer('watchlist_id')
        .unsigned()
        .notNullable()
        .references('watchlist.id')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
      table
      .string('stock_symbol')
        .unsigned()
        .notNullable()
        .references('stocks.symbol')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
      table.string('symbol', 8)
      table.decimal('price', 9, 2)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('watchlist_stocks')
    .dropTableIfExists('watchlist')
    .dropTableIfExists('portfolio_stocks')
    .dropTableIfExists('stocks')
    .dropTableIfExists('portfolio')
    .dropTableIfExists('users')
};
