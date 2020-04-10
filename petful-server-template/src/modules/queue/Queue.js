class _Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value){
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if(this.last){
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue(){
    if(!this.first) {
      return console.log('nada in queue')
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
      return node.value;
    }
            
    return node.value;
  }

  show() {
    // Return the next item in the queue
    if (this.first === null) {
      return 'Cannot show the first item of an empty queue';
    }
    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    while(this.node.next !== null){
      this.first = this.first.next;
      return this.first.value;
    }
    // maybe store tehm together then return?
  }
}

module.exports = Queue;
