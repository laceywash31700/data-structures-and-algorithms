'use strict';

const HashTable = require('../hashing-it-out/hash.js');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
    this.previous = null;
  }
}

function treeIntersection(root1, root2) {
  const table = new HashTable();
  let output = [];

  function _treeTraversalPreOrder(node = null, results = []) {
    if (node === null || node === undefined) {
      return new Error('not valid tree');
    }
    results.push(node.value);
    _treeTraversalPreOrder(node.left, results);
    _treeTraversalPreOrder(node.right, results);

    return results;
  }

  const tree1 = _treeTraversalPreOrder(root1);
  const tree2 = _treeTraversalPreOrder(root2);

  tree1.forEach((val) => table.set(val, val));
  tree2.forEach((val) => {
    if (table.has(val)) {
      output.push(val);
    }
  });

  return output;
}

module.exports = treeIntersection;