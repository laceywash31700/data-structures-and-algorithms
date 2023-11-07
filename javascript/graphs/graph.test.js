const {Graph, Node} = require('./graph');


describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('should add vertices to the graph', () => {
    graph.addVertex(1);
    graph.addVertex(10);
    expect(graph.size()).toBe(2);
  });

  test('should add edges between vertices', () => {
    const vertex1 = graph.addVertex(1);
    const vertex2 = graph.addVertex(2);
    graph.addUndirectedEdge(vertex1, vertex2, 10);
    expect(graph.getEdges(vertex1).length).toBe(1);
    expect(graph.getEdges(vertex2).length).toBe(1);
  });
  

  test('should get neighbors of a vertex', () => {
    const vertex1 = graph.addVertex(1);
    const vertex2 = graph.addVertex(2);
    const vertex3 = graph.addVertex(3);
    graph.addEdge(vertex1, vertex2, 10);
    graph.addEdge(vertex1, vertex3, 5);
    const neighbors = graph.getNeighbors(vertex1);
    expect(neighbors).toContain(vertex2);
    expect(neighbors).toContain(vertex3);
  });

  test('should return null for neighbors of a non-existent vertex', () => {
    const vertex = new Node(42); 
    const neighbors = graph.getNeighbors(vertex);
    expect(neighbors).toBeNull();
  });

    test('Breadth-First Traversal starting from node 1', () => {
      const graph = new Graph();
      const node1 = graph.addVertex(1);
      const node2 = graph.addVertex(2);
      const node3 = graph.addVertex(3);
      const node4 = graph.addVertex(4);
      const node5 = graph.addVertex(5);
      
      graph.addUndirectedEdge(node1, node2);
      graph.addUndirectedEdge(node1, node3);
      graph.addUndirectedEdge(node2, node4);
      graph.addUndirectedEdge(node3, node5);
  
      const traversalResult = graph.graphBreadthTraversal(node1);
      expect(traversalResult).toEqual([1, 2, 3, 4, 5]);
    });
  
    test('should perform depth-first traversal correctly', () => {
      const graph = new Graph();
      const node1 = graph.addVertex(1);
      const node2 = graph.addVertex(2);
      const node3 = graph.addVertex(3);
      const node4 = graph.addVertex(4);
  
      graph.addUndirectedEdge(node1, node2);
      graph.addEdge(node1, node3);
      graph.addEdge(node2, node4);
  
      const startNode = node1;
      const traversalResult = graph.depthFirst(startNode);
      expect(traversalResult.map(node => node.value)).toEqual([1, 2, 4, 3]);
    });
  
});
