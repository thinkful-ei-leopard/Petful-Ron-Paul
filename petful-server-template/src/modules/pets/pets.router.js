const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res, next) => {
  // Return all pets currently up for adoption.
  return res.status(200).json(Pets.getAllPets());
});

router.delete('/', json, (req, res) => {
  // 'type' determines which type of animal was adopted('cats' or 'dogs')
  // Removes the adopted pets and the new pet owner from their respective Queues
  // if 'both=true' is sent, it will remove a dog and a cat, plus the owner from their queues

  const { type, both } = req.body;
  
  // check if "both" is TRUE first, if it is then do a  dequeue for both types individually
  if(both){
    Pets.dequeue('cats');
    Pets.dequeue('dogs');
    People.dequeue();
    return res.status(204).send();
  }

  // // Validation
  // if(type == null || !type){
  //   return res.status(400).json({
  //     error: `Invalid 'type'`
  //   });
  // }
  // if(typeof type !== 'string'){
  //   return res.status(400).json({
  //     error: `'type' must be a string`
  //   });
  // }
  // if(type !== 'cats' || type !== 'dogs'){
  //   return res.status(400).json({
  //     error: `'type' must either be 'cats' or 'dogs'`
  //   });
  // }
  
  // In case something doesn't get caught
  const petType = `${type}`;
  Pets.dequeue(petType);
  People.dequeue();

  return res.status(204).send();
});

module.exports = router;
