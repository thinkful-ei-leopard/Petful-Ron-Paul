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

  // to dequeue people, it requires no input
  // to dequeue
  const { type, both } = req.body;
  
  // Since 'both' the boolean gets converted to a string, this way we can check 
  // if the boolean true
  if(both === 'true'){
    Pets.dequeue('cats');
    Pets.dequeue('dogs');
    People.dequeue();
    return res.status(204).send();
  }

  // check if "both" is TRUE first, if it is then do a  dequeue for both types individually
  // be CAREFUL not to do extra dequeues if we get "type: cats, both: true" - we dont want to delete 2 cats and 1 dog
  /////////////////// return res.status(200).json({message: 'i dunno bro'});


  // Validation
  if(type == null || !type){
    return res.status(400).json({
      error: `Invalid 'type'`
    });
  }
  if(typeof type !== 'string'){
    return res.status(400).json({
      error: `'type' must be a string`
    });
  }
  if(type !== 'cats' || type !== 'dogs'){
    return res.status(400).json({
      error: `'type' must either be 'cats' or 'dogs'`
    });
  }

  // In case something doesn't get caught
  const petType = `${type}`;
  Pets.dequeue(petType);
  People.dequeue();

  return res.status(204).send();
});

module.exports = router;
