const express = require('express');
const cors = require('cors');
const { NODE_ENV } = require('../../config');

const app = express();

app.use(cors());

app.use('/api/people', require('../people/people.router'));
app.use('/api/pets', require('../pets/pets.router'));

app.use(function errorHandler(error, req, res, next) { // eslint-disable-line no-unused-vars
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error'}};
  } else {
    console.error(error);
    response = { message: error.message, error};
  }
  res.status(500).json(response);
});

module.exports = app;
