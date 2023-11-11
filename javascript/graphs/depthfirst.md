# Graphs depth first Traversal 

***Write the following method for the Graph class:***

**Name:**
 Depth first
------------------
**Arguments:** 
Node (Starting point of search)
------------------
**Return:**
 A collection of nodes in their pre-order depth-first traversal order
------------------
**Program output:**
 Display the collection


 ## Approach & Efficiency

 I decided use a Set class because it is really good at holding a array of visited node without the risk of duplication because set literally can't hold the same value in the set twice which I think is really helpful and I used recursion to help dynamically grab all neighboring nodes 
------------------

## Solution

```javascript
  // depth-First Traversal
  depthFirst(startNode) {
    const visited = new Set();
    const result = [];

    const dfsHelper = (node) => {
      visited.add(node);
      result.push(node);
      const neighbors = this.getNeighbors(node);
      for (const neighbor of neighbors) { 
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };

    dfsHelper(startNode);
    return result;
  }
```
![whiteboard](./code%20challenge%2038%20depth%20first%20traversal.jpg)
