const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res, next) => {
  // Return all pets currently up for adoption.
  //TESTING THIS
  return res.status(200).json(Pets.getFirstPet());
  
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
});

module.exports = router;
