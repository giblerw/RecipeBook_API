'use strict';

var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[environment];

module.exports = require('knex')(config);
//# sourceMappingURL=connection.js.map