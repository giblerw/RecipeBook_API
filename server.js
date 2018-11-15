import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

// Connect to MongoDB
mongoose.connect('mongodb://heroku_pwvqrzrr:u5t8tf0squgpp99nraka9qpgtb@ds151602.mlab.com:51602/heroku_pwvqrzrr');

// Initialize http server
const app = express();

// Logger that outputs all requests into the console
app.use(morgan('combined'));

// Use v1 as prefix for all API endpoints
app.use('/v1', router);

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
