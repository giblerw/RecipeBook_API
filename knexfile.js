require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/recipes'
  },

  production: {
    client: 'pg',
    connection: process.env.NODE_ENV + '?ssl=true'
  }

};
