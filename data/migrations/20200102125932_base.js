
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

    .createTable('paperPortfolio', table => { // Portfolio Table
      table.increments() // Primary Key
      table.decimal('accountValue', 9, 2).notNullable() // Non Null
      table.decimal('cashBalance', 9, 2).notNullable()
      table.decimal('investmentBalance', 9, 2).notNullable()
      table.decimal('borrowingPower', 9, 2).notNullable()
      table // Foreign Key
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
    })

    .createTable('paperStocks', table => { // Stock Table
      table.increments() // Primary Key
      table.string('name', 70).notNullable().unique() // Non Null and Unique
      table.string('symbol', 5).notNullable().unique()
      table.decimal('currentPrice', 9, 2).notNullable() // Non Null
      table.string('sector') // Nullable
      table.decimal('bid', 9, 2)
      table.decimal('ask', 9, 2)
      table.float('volume')
      table.decimal('close', 9, 2)
      table.decimal('open', 9, 2)
      table.decimal('52weekHigh', 9, 2)
      table.decimal('52weekLow', 9, 2)
      table.decimal('dayChange', 9, 2)
      table.integer('dayChangePercent', 4)
      table.decimal('dividend', 9, 2)
    })

    .createTable('portfolio_stocks', table => {
      table // Primary Foreign Key combo
        .integer('portfolio_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('paperPortfolio')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
      table
        .integer('stock_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('paperStocks')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
      table.primary('portfolio_id', 'stock_id')
      table.integer('quantity') // Non Null
      table.date('purchaseDate')
      table.date('soldDate')
      table.decimal('costPerShare', 9, 2)
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('portfolio_stocks')
  .dropTableIfExists('paperStocks')
  .dropTableIfExists('paperPortfolio')
  .dropTableIfExists('users')
};
