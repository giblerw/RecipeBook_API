'use strict';

var db = require('./connection');

function getAllRecipes() {
  return db.select('*').from('recipe');
}

module.exports = {
  getAllRecipes: getAllRecipes
};
//# sourceMappingURL=queries.js.map