# Trees & Binary Trees

**Terminology**

**Node** -> basic unit  
**children** -> nodes directly below a node  
**descendants** -> nodes below a node  
**parent** -> node that is directly above a node  
**ancestor** -> node that is above a node  
**root node** -> node a the top of the three  
**leaf node** -> node without any children

_Examples: Filesystem is a tree, html DOM is a tree, etc.._

## Binary Trees/Binary Search Trees

These are different—and we’ll cover later!

General trees are sometimes called “n-ary” trees, since they can have n (any) number of children.

## Trees is JS

Node class

```JS
class Node{
  constructor(data, children = []){
    this.data = data;
    this.children = children;
  }
}

let amy = new Node("amy", [new Node("bob"), new Node("jessica")]);
```

## Traversing a tree ( Depth/Breadth first Search)

From the root, find a node descendant.

```JS
findDFS(data){
  const toVisitStack = [this]; // the node itself.
  while(toVisitStack.length){
    const current = toVisitStack.pop(); // pop the current(last in first out) , check, repeat.
    if(current.data === data) return current;
    for (let child of current.children){
      toVisitStack.push(child);
    }
  }
}
```

this is a **depth first search**, uses the stack to find.

another way: find node with same data but highest priority

```JS
findBFS(data){
  const toVisitQueue = [this]; // the node itself
  while (toVisitQueue.length){
    const current = toVisitQueue.shift() // shift(first in first out), check, repeat.
    if (current.data === data) return current;
    for (let child of current.children){
      toVisitQueue.push(child);
    }
  }
}
```

this is a **breadth first search**, uses the queue to find.

```js
class tree {
  constructor() {
    this.root = root;
  }
  findInTreeDFS(val) {
    return this.root.findDFS(val);
  }
  findInTreeBFS(val) {
    return this.root.findBFS(val);
  }
}
```

Every node in tree could be technically it's own tree root.

# Binary Tree

Tree structures with only left and right nodes.

## Binary Search Trees

```js
class BinaryTreeNode {
  constructor(val, right, left) {
    this.val = val;
    this.right = right;
    this.left = left;
  }
}

class BinarySearchTree {
  constructor(root) {
    this.root = root;
  }
  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) return current;
      current.val > val ? (current = current.right) : (current = current.left);
    }
  }
}
```

## Balancing a tree

We want to minimize the height of a tree so we can benefit from its structure.

Red-Black Tree -> self-balancing tree ( we add color to the node for efficiency, null
nodes are black, red node does not have a red child)
AVL Tress -> Simpler algorith Keeps Balanced.

## Traversal of a BST

```js
traverseInOrder(node=this.root){
  console.log(node.val);
  if (node.left) this.traverse(node.left);
  console.log(node.val)
  if (node.right) this.traverse(node.right)
}

traversePreOrder(node=this.root){
  console.log(node.val);
  if (node.left) this.traverse(node.left);
  if (node.right) this.traverse(node.right);
}

traversePostOrder(node=this.root){
  if (node.left) this.traverse(node.left);
  if (node.right) this.traverse(node.right);
  console.log(val)
}
```

## Bidirectional Node

```js
class BidirectionalNode {
  constructor(val, parent, children = []) {
    this.val = val;
    this.parent = parent;
    this.children = children;
  }
}
```
