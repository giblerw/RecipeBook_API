const db = require('./connection')

function getAllRecipes() {
  return db.select('*').from('recipe');
}

module.exports = {
  getAllRecipes,
}
