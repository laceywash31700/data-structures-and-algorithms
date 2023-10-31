class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
    this.previous = null;
  }
}

// node: { value: 3 }

class Edge {
  constructor(from, to, weight = null) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  // add vertex
  // Arguments: value
  // Returns: The added vertex
  // Add a vertex to the graph
  addVertex(value) {
    const vertex = new Node(value);
    // add to the adjacency list so we can track it
    this.adjacencyList.set(vertex, []);
    return vertex;
  }
  // add edge
  // Arguments: 2 vertices to be connected by the edge, weight (optional)
  // Returns: nothing
  // Adds a new edge between two vertices in the graph
  // If specified, assign a weight to the edge
  // Both vertices should already be in the Graph
  addEdge(startNode, endNode, weight) {
    if (
      !this.adjacencyList.has(startNode) ||
      !this.adjacencyList.has(endNode)
    ) {
      throw new Error('Invalid vertices');
    }

    let edges = this.adjacencyList.get(startNode);
    const newEdge = new Edge(startNode, endNode, weight);
    edges.push(newEdge); // Add the new edge to the list of edges for the startNode
  }

  addUndirectedEdge(a, b, weight) {
    this.addEdge(a, b, weight);
    this.addEdge(b, a, weight);
  }

  // get vertices
  // Arguments: none
  // Returns all of the vertices in the graph as a collection (set, list, or similar)
  // Empty collection returned if there are no vertices
  getVerticies() {
    const vertexArray = [];
    this.adjacencyList.forEach((_, key) => vertexArray.push(key.value));
    return vertexArray;
  }
  // get neighbors
  // Arguments: vertex
  // Returns a collection of edges connected to the given vertex
  // Include the weight of the connection in the returned collection
  // Empty collection returned if there are no vertices
  getNeighbors(vertex) {
    if (!vertex) return;

    const edges = this.getEdges(vertex);
    if (edges) {
      return edges.map((edge) => edge.to);
      // map through and return "to" values (nodes with the value of...)
    } else return null;
  }

  getEdges(vertex) {
    return this.adjacencyList.has(vertex)
      ? this.adjacencyList.get(vertex)
      : null;
  }

  // size
  // Arguments: none
  // Returns the total number of vertices in the graph
  // 0 if there are none
  size() {
    return this.adjacencyList.size;
  }

  // graph-breadth-first traversal
  graphBreadthTraversal(vertex) {
    let vistedVertex = new Map();
    let queue = [];
    let output = [];

    queue.push(vertex);

    while (queue.length > 0) {
      let currentVertex = queue.shift();

      if (!vistedVertex.has(currentVertex.value)) {
        vistedVertex.set(currentVertex.value, currentVertex);
        output.push(currentVertex.value);

        this.getNeighbors(currentVertex).forEach((neighbor) => {
          if (!vistedVertex.has(neighbor.value)) {
            queue.push(neighbor);
          }
        });
      }
    }

    return output;
  }
}
module.exports = { Graph, Node };
