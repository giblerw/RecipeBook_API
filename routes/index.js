const express = require('express');
const db = require('../db/queries');
const router = express.Router();

router.get('/recipes', (req, res, next) => {
  db.getAllRecipes()
  .then((recipes) => {
    res.json(recipes);
});
})


module.exports = router;
