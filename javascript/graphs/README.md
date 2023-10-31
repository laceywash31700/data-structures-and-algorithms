# Graphs

Challenge Type: New Implementation
Implement a Graph. The graph should be represented as an adjacency list, and should include the following methods:

> **add vertex**
> Arguments: value
> Returns: The added vertex
> Add a vertex to the graph

**add edge**

> Arguments: 2 vertices to be connected by the edge, weight (optional)
> Returns: nothing
> Adds a new edge between two vertices in the graph
> If specified, assign a weight to the edge
> Both vertices should already be in the Graph

**get vertices**

> Arguments: none
> Returns all of the vertices in the graph as a collection (set, list, or similar)
> Empty collection returned if there are no vertices

**get neighbors**

> Arguments: vertex
> Returns a collection of edges connected to the given vertex
> Include the weight of the connection in the returned collection
> Empty collection returned if there are no vertices

**size**

> Arguments: none
> Returns the total number of vertices in the graph
> 0 if there are none

## Approach & Efficiency

We used a Map to organize the vertex and keep track of the edges our Big O is O(1) because we are using a hashmap and space is O(n) because we are holding the graph in a Object.

## Solution

```javascript
// create a graph
const graph = new Graph();

// create a node/Vertex input: value
const vertex1 = graph.addVertex(1);
const vertex2 = graph.addVertex(2);

// input:  from:starting vertex ,to:ending vertex ,weight: weighed distance between verticles 
graph.addEdge(vertex1, vertex2, 10);

// adds two directional edge
grapgh.addUndirectedEdge(Vertex1, vertex2, 10);

// returns array of neighboring verticles input: node/vertex
const neighbors = graph.getNeighbors(vertex1);

```
