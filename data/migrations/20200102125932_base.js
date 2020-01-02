
exports.up = function(knex) {
  // User Table
  return knex.schema.createTable('paperHolders', table => {
    // Primary Key
    table.increments();

    // Non Null and Unique
    table
    .string('userName', 35)
    .notNullable()
    .unique()

    table
    .string('email')
    .notNullable()
    .unique()

    // Non Null
    table
    .string('firstName', 35)
    .notNullable()
    
    table
    .string('lastName', 35)
    .notNullable()
    
    table
    .string('password', 35)
    .notNullable()
  })

  // Portfolio Table
  .createTable('paperPortfolio', table => {
    // Primary Key
    table.increments()

    // Non Null
    table
    .integer('accountValue')
    .notNullable()

    table
    .integer('cashBalance')
    .notNullable()
    
    table
    .integer('investmentBalance')
    .notNullable()

    table
    .integer('borrowingPower')
    .notNullable()

    // Foreign Key
    table
    .integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('paperHolders')
    .onDelete('SET NULL')
    .onUpdate('CASCADE')
  })

  // Stock Table
  .createTable('paperStocks', table => {
    // Primary Key
    table.increments()

    // Non Null and Unique
    table
    .string('name', 70)
    .notNullable()
    .unique()

    table
    .string('symbol', 5)
    .notNullable()
    .unique()

    // Non Null
    table
    .integer('currentPrice')
    .notNullable()

    table
    .integer('bid')
    .notNullable()

    table
    .integer('ask')
    .notNullable()

    table
    .integer('volume')
    .notNullable()

    table
    .integer('close')
    .notNullable()

    table
    .integer('open')
    .notNullable()

    // Nullable
    table
    .integer('52weekHigh')

    table
    .integer('52weekLow')

    table
    .integer('dayChange')
    
    table
    .integer('dayChangePercent')

    table
    .integer('dividens')
  })

  .createTable('portfolio_stocks', table => {
    // Primary Foreign Key combo
    table
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

    table
    .primary('portfolio_id', 'stock_id')
  })
};

exports.down = function(knex) {
  
};
