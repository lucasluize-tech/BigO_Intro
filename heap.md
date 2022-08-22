# Heap

Heap is a tree , usually binary , which also implements a priority to the nodes.
MaxHeap priority goes to top, min heaps to bottom, children nodes.

- **adding a node** O(1) , swapping is logn

  - we add to the first bottom right available position.
  - swap until we have the node in the correct spot.
  - The root will always be the highest priority, but we could have nodes with different
    priorities in different levels of the tree.

- **extract the max** swaping is o(1) swapping is logn
  - we pop the root;
  - select the bottom right node and place it a top.
  - swap top with next largest node down the tree.

```
            99
         /
      89          80
     /   \      /    \
  85      88   75    77
```

```js
class HeapNode {
  constructor(val, priority = 0) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(root) {
    this.heap = [];
  }

  enqueue(node) {
    let newNode = new HeapNode(val, priority);
    this.heap.push(newNode);
    this.bubbleUp(); // move to right position
  }
  // remember that to find the children idx on the left is idx(children) = 2 * idx(parent) + 1
  // and right idx(children) = 2 * idx(parent) + 2.

  bubbleUp() {
    let idx = this.heap.length - 1;
    const el = this.heap[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (el.priority <= parent.priority) break;
      this.heap[parentIdx] = el;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  sinkDown() {
    let idx = 0;
    const el = this.heap[0];
    while (true) {
      let swap = null;
      let [leftIdx, rightIdx] = [2 * idx + 1, 2 * idx + 2];
      let left = this.heap[leftIdx];
      let right = this.heap[rightIdx];
      // check left side
      if (leftIdx < this.heap.length) {
        if (left.priority < el.priority) {
          swap = leftIdx;
        }
      }
      //check right side
      if (rightIdx < this.heap.length) {
        if (
          (swap === null && right.priority < el.priority) ||
          (swap !== null && right.priority < left.priority)
        ) {
          swap = rightIdx;
        }
      }
      // if no swap break
      if (swap === null) break;
      // swap values
      this.heap[idx] = this.heap[swap];
      this.heap[swap] = el;
      idx = swap;
    }
  }

  dequeue() {
    const top = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end; // take first bottom right node and place at top.
      this.sinkDown();
    }
    return top;
  }
}
```
