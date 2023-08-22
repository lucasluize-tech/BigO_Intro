class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) {
      this.push(val);
    }
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
    let result = [];
    while (cur) {
      result.push(cur.data);
      cur = cur.next;
    }
    return console.log(result);
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
    return this.searchIndex(Math.floor(this.length - 1 / 2));
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

  average() {
    let cur = this.head;
    let sum = 0;
    let count = 0;

    while (cur) {
      sum += cur.data;
      count++;
      cur = cur.next;
    }
    return sum / count;
  }

  pivot(value) {
    let cur = this.head;
    let prev = null;
    let head;
    let size = this.length;

    for (let i = 0; i < size - 1; i++) {
      if (cur.data < value) {
        if (!head) head = cur;
        prev = cur;
        cur = cur.next;
      } else {
        if (prev) {
          prev.data >= value ? null : (prev.next = cur.next);
        }
        this.tail.next = cur;
        this.tail = cur;

        cur = cur.next;
      }
    }
    this.head = head;
    this.tail.next = null;
    return this.print();
  }
}

function concatTwoLists(list1, list2) {
  let cur = list1.head;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = list2.head;
  return list1;
}

function concatAndSort(list1, list2) {
  let list = new LinkedList();
  l1cur = list1.head;
  l2cur = list2.head;
  while (l1cur && l2cur) {
    if (l1cur.data < l2cur.data) {
      list.push(l1cur.data);
      l1cur = l1cur.next;
    } else {
      list.push(l2cur.data);
      l2cur = l2cur.next;
    }
  }
  return list;
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

console.log("----- average -----");
console.log(list.average());

console.log("----- pivot -----");
let ll = new LinkedList([7, 6, 2, 3, 9, 1, 1]);
ll.pivot(5);
ll = new LinkedList([7, 6, 2, 5, 3, 5, 9, 1, 1]);
ll.pivot(5);
