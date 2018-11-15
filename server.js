import express from 'express';
import morgan from 'morgan';

const bodyParser = require('body-parser');
const port = process.env.PORT || 3000


// Initialize http server
const app = express();

var route = require('./routes/index');

// Logger that outputs all requests into the console
app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use v1 as prefix for all API endpoints
app.use('/v1', route);

// Launch the server on port 3000
const server = app.listen(port, () => {
  console.log(`Listening at http://${port}`);
});

module.exports = app;
