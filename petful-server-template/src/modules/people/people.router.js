const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  // NEEDS VALIDATION
  return res.status(200).json(People.getAllPeople());
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  return res.status(201).json(People.enqueue());
});

module.exports = router;
