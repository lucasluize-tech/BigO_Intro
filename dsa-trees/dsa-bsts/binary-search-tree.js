class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const node = new Node(val);
    // inserts root if empty
    if (!this.root) return (this.root = node);
    // inserts after valuating nodes
    let current = this.root;
    while (current) {
      if (current === node) return this;
      // check if value is more or less.
      if (val > current.val) {
        current.right
          ? (current = current.right)
          : ((current.right = node), (current = current.right));
      } else {
        current.left
          ? (current = current.left)
          : ((current.left = node), (current = current.left));
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }
    const newNode = new Node(val);
    if (val > node.val) {
      if (node.right) this.insertRecursively(val, node.right);
      return (node.right = newNode);
    } else if (val < node.val) {
      if (node.left) this.insertRecursively(val, node.left);
      return (node.left = newNode);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current.val !== null) {
      if (current.val === val) return current;
      if (val > current.val) {
        if (!current.right) return;
        current = current.right;
      }
    }
    if (val < current.val) {
      if (!current.left) return;
      current = current.left;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!node.val) return undefined;
    if (node.val === val) return node;
    if (val > node.val) {
      if (!node.right) return;
      return this.findRecursively(val, node.right);
    }
    if (val < node.val) {
      if (!node.left) return;
      return this.findRecursively(val, node.left);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, visited = []) {
    visited.push(node.val);
    if (node.left) this.dfsPreOrder(node.left, visited);
    if (node.right) this.dfsPreOrder(node.right, visited);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, visited = []) {
    if (node.left) this.dfsInOrder(node.left, visited);
    visited.push(node.val);
    if (node.right) this.dfsInOrder(node.right, visited);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, visited = []) {
    if (node.left) this.dfsPostOrder(node.left, visited);
    if (node.right) this.dfsPostOrder(node.right, visited);
    visited.push(node.val);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const toVisitQueue = [this.root]; // the node itself
    const visited = [];
    while (toVisitQueue.length) {
      // debugger;
      const current = toVisitQueue.shift(); // shift(first in first out), check, repeat.
      visited.push(current.val);
      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let current = this.root;
    while (current) {
      let nextLeft = current.left;
      let nextRight = current.right;

      if (nextLeft) {
        if (nextLeft.val === val) {
          if (!nextLeft.left && !nextLeft.right) return (current.left = null);
          current.left = null || current.left.right || current.left.left;
          current.left.left = null || nextLeft.left;
        }
      }
      if (nextRight) {
        if (nextRight.val === val) {
          if (!nextRight.left && !nextRight.right)
            return (current.right = null);
          let bestVal = nextRight.right.left;
          if (bestVal) {
            while (nextRight.left.val < bestVal.val) {
              if (!bestVal.left) break;
              bestVal = bestVal.left;
            }
          }
          current.right = bestVal || current.right.right || current.right.left;
          current.right.left = null || nextRight.left;
        }
      }
      if (val > current.val) {
        if (!current.right) return;
        current = current.right;
      } else {
        if (!current.left) return;
        current = current.left;
      }
    }
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    // check depth on left side
    // check depth of right side
    // compare, return
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
