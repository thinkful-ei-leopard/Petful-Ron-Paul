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
  // Remove 2 pets (cat and dog) from adoption
  // Remove the person who adopted the pet as well

});


router.delete('/cats', json, (req, res) => {
  // Remove a pet(cat) from adoption
  // Remove the person who adopted the pet as well

});

router.delete('/dogs', json, (req, res) => {
  // Remove a pet(dog) from adoption
  // Remove the person who adopted the pet as well

});

module.exports = router;
