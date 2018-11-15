'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipe', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.string('image');
    table.integer('rating');
    table.string('mealType');
    table.text('instructions');
    table.json('ingredients');
    table.text('keywords');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('recipe');
};
//# sourceMappingURL=20181114190939_recipe.js.map