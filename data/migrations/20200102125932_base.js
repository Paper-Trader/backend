
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
    .decimal('accountValue', 9, 2)
    .notNullable()

    table
    .decimal('cashBalance', 9, 2)
    .notNullable()
    
    table
    .decimal('investmentBalance', 9, 2)
    .notNullable()

    table
    .decimal('borrowingPower', 9, 2)
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
    .decimal('currentPrice', 9, 2)
    .notNullable()

    
    // Nullable
    table
    .string('sector')
    
    table
    .decimal('bid', 9, 2)

    table
    .decimal('ask', 9, 2)

    table
    .float('volume')

    table
    .decimal('close', 9, 2)

    table
    .decimal('open', 9, 2)

    table
    .decimal('52weekHigh', 9, 2)

    table
    .decimal('52weekLow', 9, 2)

    table
    .decimal('dayChange', 9, 2)
    
    table
    .integer('dayChangePercent', 4)

    table
    .decimal('dividend', 9, 2)
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

    // Non Null
    table
    .integer('quantity')

    table
    .date('purchaseDate')

    table
    .date('soldDate')

    table
    .decimal('costPerShare', 9, 2)

  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('portfolio_stocks')
  .dropTableIfExists('paperStocks')
  .dropTableIfExists('paperPortfolio')
  .dropTableIfExists('paperHolders')
};
