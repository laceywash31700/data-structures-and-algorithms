'use strict';

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.next = null;
    this.previous = null;
  }
}

class BasicTree {
  constructor(root = null) {
    this.root = root;
  }

  // depth first tree traversal methods
  preOrder(node = null, results = []) {
    let value = node.value;
    results.push(value);
    if (node.left) {
      return this.preOrder(node.left, results);
    }
    if (node.right) {
      return this.preOrder(node.left, results);
    }
    console.log('This is pre-order:',results);
    return results;
  }

  inOrder(node = null, results = []) {
    let value = node.value;
    if (node.left) {
      return this.preOrder(node.left, results);
    }
    results.push(value);
    if (node.right) {
      return this.preOrder(node.left, results);
    }
    console.log('This is in-order:',results);
    return results;
  }

  postOrder(node = null, results = []) {
    let value = node.value;
    if (node.left) {
      return this.preOrder(node.left, results);
    }
    if (node.right) {
      return this.preOrder(node.left, results);
    }
    results.push(value);
    console.log('This is post-order:',results);
    return results;
  }
}
