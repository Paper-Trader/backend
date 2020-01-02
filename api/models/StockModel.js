// Import config
const db = require('../../data/dbConfig')

// Export functions
module.exports = {
  get,
  getBySymbol,
  getByName,
  update
}

// Define the functions

function get() {
  return db('paperStocks')
}

function getBySymbol(sym) {
  return db('paperStocks').where({ symbol: sym })
}