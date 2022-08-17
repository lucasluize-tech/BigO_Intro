# Graphs

Graphs are like trees, except they can contain loops (“cycles”).

Also, the relationships can be directed or un-directed.

## Terminology

**Node (or Vertex)**  
 basic unit

**Edge (or Arc)**  
 connects two nodes

**Adjacent**  
 two nodes are “adjacent” if they share an edge

**Weight (optional)**  
 each edge can have a weight (ex: price, or distance)

- Graphs are often used to model relationships between things
- Trees are directed, acyclic graphs
- All trees are graphs, but not all graphs are trees
- Trees have hierarchy, graphs do not

## Adjacency lists

```js
class GraphNode {
  constructor(val, adj = new Set()) {
    this.val = val;
    this.adj = adj; // its better to be a set to avoid duplicates
  }
}

class Graph {
  constructor() {
    this.node = new Set();
  }
  areConnectedRecursive(person1, person2, seen = new set()) {
    if (person1 === person2) return true;

    for (let neighbour of person1.adj) {
      if (!see.has(neighbour)) {
        seen.add(neighbour);
        if (this.areConnectedRecursive(neighbour, person2, seen)) {
          return true;
        }
      }
    }
    return false;
  }
}
```
