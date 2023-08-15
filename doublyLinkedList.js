class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) {
      this.push(val);
    }
  }

  push(val) {
    let node = new Node(val);
    let cur = this.head;

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    while (cur) {
      if (cur.next === null) {
        cur.next = node;
        node.prev = cur;
        this.tail = node;
        this.length++;
        return;
      }
      cur = cur.next;
    }
    return this.tail;
  }

  pop() {
    let cur = this.head;
    let last = this.tail;

    if (this.length === 0) return "list is empty";
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return last;
    }
    while (cur) {
      if (cur.next === last) {
        cur.next = null;
        this.tail = cur;
        this.length--;
        return last;
      }
      cur = cur.next;
    }
  }

  printAsArray() {
    let cur = this.head;
    let arr = [];
    while (cur) {
      arr.push(cur.data);
      cur = cur.next;
    }
    console.log(arr);
  }

  print() {
    let cur = this.head;
    while (cur) {
      console.log(cur.data);
      cur = cur.next;
    }
    return;
  }

  insertAt(index, val) {
    let cur = this.head;
    let node = new Node(val);
    let count = 0;

    while (count !== index) {
      cur = cur.next;
      count++;
    }

    cur.prev.next = node;
    cur.prev = node;
    node.next = cur;
    node.prev = cur.prev;
    this.length++;
    return console.log(cur);
  }

  delete(val) {
    let cur = this.head;
    let count = 0;

    while (cur.data !== val) {
      cur = cur.next;
      count++;
    }

    cur.prev.next = cur.next;
    cur.next.prev = cur.prev;
    this.length--;
    return console.log(cur);
  }
}

console.log(`----- Doubly Linked List with values 1,2,3,4,5 -----`);
const dlist = new DoublyLinkedList([1, 2, 3, 4, 5]);
console.log(dlist);
console.log(`----- Push 6 -----`);
dlist.push(6);
dlist.print();
console.log(`----- Pop 6-----`);
dlist.pop();
dlist.print();
console.log(`----- print as array -----`);
dlist.printAsArray();
console.log(`----- at index 2 insert 7 -----`);
dlist.insertAt(2, 7);
