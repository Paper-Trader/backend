// Import config
const db = require('../../data/dbConfig')

// Export functions
module.exports = {
  getBySymbol,
  updateStocks
}

// Define the functions

function getBySymbol(sym) {
  return db('stocks').where({ symbol: sym })
}

function updateStocks(data) {
  return db('stocks').truncate().insert(data)
}