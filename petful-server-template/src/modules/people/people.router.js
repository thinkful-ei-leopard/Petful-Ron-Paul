const express = require('express');
const json = require('body-parser').json();
const xss = require('xss');

const People = require('./people.service');

const router = express.Router();

const serializePeople = function (input) {
  // NOT YET IN USE
  // this function will clean up data to help fight against XSS attacks
  return {
    name: xss(input.name),
  };
};

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  return res.status(200).json(People.getAllPeople());
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.

  const { name } = req.body;

  // Validation
  if (name == null || !name) {
    return res.status(400).json({
      error: `Invalid 'name'`,
    });
  }
  if (typeof name !== 'string') {
    return res.status(400).json({
      error: `'name' must be a string`,
    });
  }

  // In case something doesn't get caught
  const person = `${name}`;
  People.enqueue(person);

  return res.status(201).json(person);
});

module.exports = router;
