
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
      // table.string('name', 70).notNullable().unique() // Non Null and Unique
      table.string('symbol', 5).notNullable().unique()
      // table.decimal('price', 9, 2).notNullable() // Non Null
      // table.string('sector') // Nullable
      // table.decimal('bid', 9, 2)
      // table.decimal('ask', 9, 2)
      // table.float('volume')
      // table.decimal('close', 9, 2)
      // table.decimal('open', 9, 2)
      // table.decimal('52weekHigh', 9, 2)
      // table.decimal('52weekLow', 9, 2)
      // table.decimal('dayChange', 9, 2)
      // table.integer('dayChangePercent', 4)
      // table.decimal('dividend', 9, 2)
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
      // table.primary('portfolio_id', 'stock_id')
      table.integer('amount')
      // table.date('purchaseDate')
      // table.date('soldDate')
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
      // table.primary('watchlist_id', 'stock_id')
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
