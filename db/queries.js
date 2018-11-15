const db = require('./connection')

function getRecipes() {
  return db('recipe')
}

module.exports = {
  getRecipes,
}
