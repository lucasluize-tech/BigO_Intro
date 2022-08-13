/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    const toVisit = [this.root];
    while (toVisit.length) {
      let current = toVisit.pop();
      if (!current) return 0;
      sum += current.val;
      for (let child of current.children) toVisit.push(child);
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    const toVisit = [this.root];
    while (toVisit.length) {
      let current = toVisit.pop();
      if (!current) return 0;
      if (current.val % 2 === 0) count++;
      for (let child of current.children) toVisit.push(child);
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    const toVisit = [this.root];
    while (toVisit.length) {
      let current = toVisit.pop();
      if (!current) return 0;
      if (current.val > lowerBound) count++;
      for (let child of current.children) toVisit.push(child);
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
