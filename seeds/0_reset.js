
exports.seed = function(knex, Promise) {
        return knex.raw('TRUNCATE recipe RESTART IDENTITY CASCADE')
      .then(function() {
        return knex('recipe').del()
    });
};
