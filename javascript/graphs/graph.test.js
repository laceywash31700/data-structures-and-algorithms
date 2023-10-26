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
    graph.UndirectedEdge(vertex1, vertex2, 10);
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
});
