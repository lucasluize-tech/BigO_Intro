class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  delete(value) {
    let cur = this.head;
    let prev = null;

    while (cur) {
      if (cur.data === value) {
        if (prev) {
          prev.next = cur.next;
          this.length--;
          return this.print();
        }
      }
      prev = cur;
      cur = cur.next;
    }

    return "Not found";
  }

  print() {
    let cur = this.head;
    while (cur) {
      console.log(cur.data);
      cur = cur.next;
    }
  }

  search(value) {
    let cur = this.head;

    while (cur) {
      if (cur.data === value) {
        return cur;
      }
      cur = cur.next;
    }
  }

  reverse() {
    let cur = this.head;
    let prev = null;
    let next = null;

    while (cur) {
      next = cur.next;
      cur.next = prev;
      prev = cur;

      if (cur.next === null) {
        this.tail = cur;
      }

      if (!next) {
        this.head = cur;
      }
      cur = next;
    }
    return this.print();
  }

  insert(value, index) {
    let node = new Node(value);
    let cur = this.head;
    let count = 0;
    let prev = null;

    while (count !== index) {
      prev = cur;
      cur = cur.next;
      count++;
    }

    prev.next = node;
    node.next = cur;
    this.length++;
    return this.print();
  }

  searchIndex(index) {
    let count = 0;
    let cur = this.head;

    while (count !== index) {
      cur = cur.next;
      count++;
    }
    return count;
  }

  middleIndex() {
    return this.searchIndex(Math.floor(this.length / 2));
  }

  middleValue() {
    return this.search(this.middleIndex());
  }

  removeDuplicates() {
    let cur = this.head;
    let dupes = [];
    let prev = null;

    while (cur) {
      if (dupes.includes(cur.data)) {
        prev.next = cur.next;
        this.length--;
      } else {
        dupes.push(cur.data);
        prev = cur;
      }
      cur = cur.next;
    }
    return this.print();
  }
}

const list = new LinkedList();

console.log("----- pushing -----");
console.log("let's push 1, 2, 3, 4 as values to the list");
list.push(1);
list.push(2);
list.push(3);
list.push(4);

list.print();
console.log("----- deleting -----");
list.delete(2);

console.log("----- searching -----");
console.log(list.search(3));

console.log("----- reversing -----");
list.reverse();

console.log("----- inserting -----");
list.insert(2, 2);

console.log("----- middle index -----");
console.log(list.middleIndex());

console.log("----- middle value -----");
console.log(list.middleValue());

console.log("----- push some duplicates -----");
list.push(2);
list.push(2);
list.push(2);
list.push(2);
list.print();
console.log("----- remove duplicates -----");
list.removeDuplicates();
