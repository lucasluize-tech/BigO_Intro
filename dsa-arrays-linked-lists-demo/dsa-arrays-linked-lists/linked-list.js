/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    let firstNode = this.head;
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    this.head = newNode;
    this.head.next = firstNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    const lastNode = this.tail;
    if (this.length === 0) return "list is empty";
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return lastNode.val;
    }
    for (let i = 0; i < this.length - 2; i++) {
      currentNode = currentNode.next;
    }
    this.tail.next = null;
    this.tail = currentNode;
    this.length--;
    return lastNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const firstNode = this.head;
    if (this.length === 0) return "list is empty";
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    return firstNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    if (idx > this.length - 1) return "invalid idx";
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    if (idx > this.length - 1) return "invalid idx";
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currentNode = this.head;
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    for (let i = 0; i < idx - 1; i++) {
      currentNode = currentNode.next;
    }
    if (currentNode.next === null) {
      currentNode.next = newNode;
      this.tail = newNode;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    if (currentNode.next === null) {
      return this.pop();
    }
    let followingNode = currentNode.next;
    if (idx > this.length - 1) return "invalid idx";
    for (let i = 0; i < idx - 1; i++) {
      currentNode = currentNode.next;
      followingNode = currentNode.next;
    }
    currentNode.next = followingNode.next;
    followingNode = null;
    this.length--;
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head;
    let total = 0;
    if (this.length === 0) return 0;
    while (currentNode !== null) {
      total += currentNode.val;
      currentNode = currentNode.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
