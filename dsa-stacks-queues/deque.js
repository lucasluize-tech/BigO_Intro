const DoublyLinkedList = require("/.doubly_linked_list");

class Deque {
  constructor() {
    this.deque = new DoublyLinkedList();
  }
  appendLeft(val) {
    this.deque.unshift(val);
  }
  appendRight(val) {
    this.deque.push(val);
  }
  popLeft() {
    return this.deque.shift();
  }
  popRight() {
    return this.deque.pop();
  }
  peekLeft() {
    return this.deque.head();
  }
  peekRight() {
    return this.deque.tail();
  }
  isEmpty() {
    return this.deque.length === 0 ? true : false;
  }
}

module.exports = Deque;
