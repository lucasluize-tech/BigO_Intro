const LinkedList = require("./linked-list");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.stack = new LinkedList();
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this.stack.unshift(val);
  }
  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.stack.length === 0) throw new Error("Stack is empty");
    return this.stack.shift();
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.stack.head.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.stack.length > 0 ? false : true;
  }
}

class Queue {
  constructor() {
    this.queue = new LinkedList();
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this.queue.push(val);
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.queue.length === 0) throw new Error("list is empty");
    return this.queue.shift();
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.queue.head.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.queue.length > 0 ? false : true;
  }
}

module.exports = { Stack, Queue };
