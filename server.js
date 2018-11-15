const express =  require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const port = process.env.PORT || 3000


// Initialize http server
const app = express();

const route = require('./routes/index');

// Logger that outputs all requests into the console
app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use v1 as prefix for all API endpoints
app.use('/', route);

// Launch the server on port 3000
const server = app.listen(port, () => {
  console.log(`Listening at port:${port}`);
});

module.exports = app;
