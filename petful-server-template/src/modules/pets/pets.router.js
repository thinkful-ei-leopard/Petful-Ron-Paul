const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res, next) => {
  // Return all pets currently up for adoption.
  // NEEDS VALIDATION
  return res.status(200).json(Pets.getAllPets());
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  // Remove the person and the animals
  // I could also create differnet
});

module.exports = router;
