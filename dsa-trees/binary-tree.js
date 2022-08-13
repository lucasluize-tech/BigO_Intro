/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let count = 0;
    const toVisit = [this.root];
    while (toVisit.length) {
      let current = toVisit.shift();
      if (!current) return count;
      count++;
      if (current.left === null && current.right === null) return count;
      if (current.left) toVisit.push(current.left);
      if (current.right) toVisit.push(current.right);
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let count = 0;
    const toVisit = [this.root];
    while (toVisit.length) {
      let current = toVisit.pop();
      if (!current) return count;
      count++;
      if (current.left === null && current.right === null) {
        if (toVisit.length) {
          continue;
        } else {
          return Math.ceil(count / 2);
        }
      }
      if (current.left) toVisit.push(current.left);
      if (current.right) toVisit.unshift(current.right);
    }
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let sum = 0;
    const toVisit = [this.root];
    while (toVisit.length) {
      let current = toVisit.pop();
      if (!current) return sum;
      sum += current.val;
      if (current.left) toVisit.push(current.left);
      if (current.right) toVisit.push(current.right);
    }
    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let largest;
    const toVisit = [this.root];
    while (toVisit.length) {
      let current = toVisit.shift();
      if (!current) return null;
      if (current.val > lowerBound) {
        current.val > largest ? null : (largest = current.val);
      }
      if (current.left) toVisit.push(current.left);
      if (current.right) toVisit.push(current.right);
    }
    if (!largest) return null;
    return largest === lowerBound ? null : largest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    const toVisit = [this.root];
    const cousins = [];
    while (toVisit.length) {
      let current = toVisit.shift();
      if (toVisit.length % 2 === 0) {
        let check = toVisit.filter(
          (node) => node.val === node1.val || node.val === node2.val
        );
        if (check.length) cousins.push(check[0]);
      }
      if (current.left) toVisit.push(current.left);
      if (current.right) toVisit.push(current.right);
    }
    return cousins.length === 2 ? true : false;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    let result = "";
    const toVisit = [tree.root];
    while (toVisit.length) {
      let current = toVisit.shift();
      if (current) {
        let a = current.left !== null ? current.left.val : -1;
        let b = current.right !== null ? current.right.val : -1;
        result += `${current.val} ${a} ${b} `;
      }
      if (current.left) toVisit.push(current.left);
      if (current.right) toVisit.push(current.right);
    }
    return result;
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(string) {
    string.trim();
    let array = string.split(" ");
    // still need to implement somthing here
    return tree;
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
