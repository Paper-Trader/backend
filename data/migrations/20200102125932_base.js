
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

    sss
  })
};

exports.down = function(knex) {
  
};
