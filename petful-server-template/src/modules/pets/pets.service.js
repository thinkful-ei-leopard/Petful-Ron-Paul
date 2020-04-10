const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  getFirstPet() {
    // Returns the next pet at the front of the queue
    const cat = pets.cats.show();
    const dog = pets.dogs.show();
    return [cat, dog];
  },
  get() {
    // Return the pets next in line to be adopted.
    let cats = 
  },

  dequeue(type) {
    // Remove a pet from the queue.
  }
};
