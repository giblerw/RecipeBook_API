require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://iowqbjmosyhglx:7a9588660bb298638c40e5e817ebe025ba2ca1b5eb1b086e59a3ff66d5da6a6c@ec2-54-225-98-131.compute-1.amazonaws.com:5432/d505ppm9m0iise' + '?ssl=true'
  },

  production: {
    client: 'pg',
    connection: 'postgres://iowqbjmosyhglx:7a9588660bb298638c40e5e817ebe025ba2ca1b5eb1b086e59a3ff66d5da6a6c@ec2-54-225-98-131.compute-1.amazonaws.com:5432/d505ppm9m0iise' + '?ssl=true'
  }

};
