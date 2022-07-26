class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class doublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    this.tail.next = newNode;
    let lastNode = this.tail;
    this.tail = newNode;
    this.tail.previous = lastNode;
    this.length++;
  }

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
    firstNode.previous = this.head;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    const lastNode = this.tail;
    if (this.length === 0) return "list is empty";
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return lastNode.val;
    }

    this.tail = this.tail.previous;
    this.tail.next = null;
    this.length--;
    return lastNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let firstNode = this.head;
    if (this.length === 0) return "list is empty";
    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
      this.length--;
      return firstNode.val;
    }
    this.head = this.head.next;
    this.head.previous = null;

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
    let newNode = new Node(val);
    let currentNode = this.head;
    if (this.length === 0) {
      return this.push(newNode.val);
    }
    if (idx > this.length - 1) {
      return this.push(newNode.val);
    }
    if (this.length === 1) return this.unshift(newNode.val);

    for (let i = 0; i < idx - 1; i++) {
      currentNode = currentNode.next;
    }
    if (currentNode === this.head) {
      let nextNode = currentNode.next;
      currentNode.next = newNode;
      nextNode.previous = newNode;
      currentNode = currentNode.next;
      currentNode.next = nextNode;
      currentNode.previous = this.head;
      this.length++;
      return;
    }

    currentNode.next.previous = newNode;
    newNode.next = currentNode.next;
    newNode.previous = currentNode;
    currentNode.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;

    if (this.length === 0) return "list is empty";
    if (idx > this.length - 1) return "idx too big";
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    if (currentNode.previous === null) {
      return this.shift();
    }
    if (currentNode.next === null) {
      return this.pop();
    }
    currentNode.previous.next = currentNode.next;
    currentNode.next.previous = currentNode.previous;
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

module.exports = doublyLinkedList;
