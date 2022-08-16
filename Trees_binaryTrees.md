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

````js
class BinaryTreeNode {
  constructor(val, right, left){
    this.val = val;
    this.right = right;
    this.left = left;
  }
}

class BinarySearchTree {
  constructor(root){
    this.root = root;
  }
}

insert(node){
  let current = this.root;
  current.val > node.val ? this.root.left = node : this.root.right = node;
}


## Bidirectional Node

```js
class BidirectionalNode {
  constructor(parent, children = []) {
    this.parent = parent;
    this.children = children;
  }
}
````
