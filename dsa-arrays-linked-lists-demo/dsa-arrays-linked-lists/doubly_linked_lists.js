class node {
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
    let newnode = new node(val);
    if (this.head === null) {
      this.head = newnode;
      this.tail = newnode;
      this.length++;
      return;
    }

    this.tail.next = newnode;
    let lastnode = this.tail;
    this.tail = newnode;
    this.tail.previous = lastnode;
    this.length++;
  }

  unshift(val) {
    let newnode = new node(val);
    let firstnode = this.head;
    if (this.head === null) {
      this.head = newnode;
      this.tail = newnode;
      this.length++;
      return;
    }
    this.head = newnode;
    this.head.next = firstnode;
    firstnode.previous = this.head;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    const lastnode = this.tail;
    if (this.length === 0) return "list is empty";
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return lastnode.val;
    }

    this.tail = this.tail.previous;
    this.tail.next = null;
    this.length--;
    return lastnode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let firstnode = this.head;
    if (this.length === 0) return "list is empty";
    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
      this.length--;
      return firstnode.val;
    }
    this.head = this.head.next;
    this.head.previous = null;

    this.length--;
    return firstnode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentnode = this.head;
    if (idx > this.length - 1) return "invalid idx";
    for (let i = 0; i < idx; i++) {
      currentnode = currentnode.next;
    }
    return currentnode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentnode = this.head;
    if (idx > this.length - 1) return "invalid idx";
    for (let i = 0; i < idx; i++) {
      currentnode = currentnode.next;
    }
    currentnode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newnode = new node(val);
    let currentnode = this.head;
    if (this.length === 0) {
      return this.push(newnode.val);
    }
    if (idx > this.length - 1) {
      return this.push(newnode.val);
    }
    if (this.length === 1) return this.unshift(newnode.val);

    for (let i = 0; i < idx - 1; i++) {
      currentnode = currentnode.next;
    }
    if (currentnode === this.head) {
      let nextnode = currentnode.next;
      currentnode.next = newnode;
      nextnode.previous = newnode;
      currentnode = currentnode.next;
      currentnode.next = nextnode;
      currentnode.previous = this.head;
      this.length++;
      return;
    }

    currentnode.next.previous = newnode;
    newnode.next = currentnode.next;
    newnode.previous = currentnode;
    currentnode.next = newnode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentnode = this.head;

    if (this.length === 0) return "list is empty";
    if (idx > this.length - 1) return "idx too big";
    for (let i = 0; i < idx; i++) {
      currentnode = currentnode.next;
    }
    if (currentnode.previous === null) {
      return this.shift();
    }
    if (currentnode.next === null) {
      return this.pop();
    }
    currentnode.previous.next = currentnode.next;
    currentnode.next.previous = currentnode.previous;
    this.length--;
  }
  /** average(): return an average of all values in the list */

  average() {
    let currentnode = this.head;
    let total = 0;
    if (this.length === 0) return 0;
    while (currentnode !== null) {
      total += currentnode.val;
      currentnode = currentnode.next;
    }
    return total / this.length;
  }
}

module.exports = doublyLinkedList;
