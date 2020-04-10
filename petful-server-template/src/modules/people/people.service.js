const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach(person => people.enqueue(person));

// --------------------

module.exports = {
  getAllPeople() {
    // Return all people in the queue.
    // MAY NEED TO CHANGE 'people'
    const allPeople = people.all();
    return {
      allPeople
    };
  },

  enqueue(person) {
    // Add a person to the queue.
  },

  dequeue() {
    // Remove a person from the queue.
  }
};
