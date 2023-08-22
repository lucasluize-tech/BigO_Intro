class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.nodes = [];

    vals.forEach((val) => {
      this.addItem(val);
    });
  }

  addItem(value) {
    const newNode = new Node(value);

    !this.head ? (this.head = newNode) : (this.tail.next = newNode);
    newNode.next = this.head;
    this.tail = newNode;
    this.nodes = [...this.nodes, newNode];
    this.length++;
  }
  getByIndex(index) {
    index < 0 ? (index = this.length + index) : null;
    return this.nodes[index];
  }

  rotate(index) {
    if (Math.abs(index) > this.length) {
      index = index % this.length;
    }
    const cur = this.getByIndex(index);
    const prev = this.getByIndex(index - 1);
    this.head = cur;
    this.tail = prev;
    const nodeSequenceToShift = this.nodes.slice(index, this.length);
    this.nodes = [...nodeSequenceToShift, ...this.nodes.slice(0, index)];
    return;
  }

  log() {
    console.log(this);
  }

  print() {
    let cur = this.head;
    while (cur.next !== this.head) {
      console.log(cur.value);
      cur = cur.next;
    }
    console.log(cur.value);
  }

  pop() {
    return this.removeByIndex(this.length - 1);
  }

  removeByIndex(index) {
    let cur = this.getByIndex(index);
    let prev = this.getByIndex(index - 1);
    prev.next = cur.next;
    this.length--;
  }
}

const cl = new CircularList(["harry", "hermione", "ginny", "ron"]);
cl.rotate(-2);
cl.addItem("dumbledore");
cl.log();
cl.print();
