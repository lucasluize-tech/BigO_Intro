class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let adj of vertex.adjacent) {
      adj.adjacent.delete(vertex);
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const toVisit = [start];
    let seen = new Set(toVisit);
    let result = [];
    while (toVisit.length) {
      let current = toVisit.pop();
      result.push(current.value);
      for (let adj of current.adjacent) {
        if (!seen.has(adj)) {
          toVisit.push(adj);
          seen.add(adj);
        }
      }
    }
    console.log(result);
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const toVisit = [start];
    let seen = new Set(toVisit);
    let result = [start.value];
    while (toVisit.length) {
      let current = toVisit.shift();
      for (let adj of current.adjacent) {
        if (!seen.has(adj)) {
          toVisit.push(adj);
          seen.add(adj);
          result.push(adj.value);
        }
      }
    }
    return result;
  }
}

module.exports = { Graph, Node };