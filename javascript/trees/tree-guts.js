'use strict';

const Queue = require('../stack-and-queue/queue.js');

class Node {
  constructor(value) {
    this.value = value;
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
  preOrder(node = this.root, results = []) {
    if (node === null) {
      return results;
    }
    results.push(node.value);
    this.preOrder(node.left, results);
    this.preOrder(node.right, results);
    return results;
  }

  inOrder(node = this.root, results = []) {
    if (node === null) {
      return results;
    }

    this.inOrder(node.left, results);
    results.push(node.value);
    this.inOrder(node.right, results);
    return results;
  }

  postOrder(node = this.root, results = []) {
    if (node === null) {
      return results;
    }

    this.postOrder(node.left, results);
    this.postOrder(node.right, results);
    results.push(node.value);
    return results;
  }

  // breadth first traversal
  breadthFirst() {
    const results = [];
    const traversalQueue = new Queue();

    if (this.root === null) {
      return results;
    }

    traversalQueue.enqueue(this.root);

    while (!traversalQueue.isEmpty()) {
      const currentNode = traversalQueue.dequeue();
      results.push(currentNode.value);

      if (currentNode.left) {
        traversalQueue.enqueue(currentNode.left);
      }
      if (currentNode.right) {
        traversalQueue.enqueue(currentNode.right);
      }
    }
    return results;
  }
}

class BinarySearchTree extends BasicTree {
  constructor(root = null) {
    super(root);
  }

  insert(value) {
    this.root = this._insertRecursive(this.root, value);
  }

  _insertRecursive(root, value) {
    if (root === null) {
      return new Node(value);
    }

    if (value === root.value) {
      return root;
    } else if (value < root.value) {
      root.left = this._insertRecursive(root.left, value);
    } else {
      root.right = this._insertRecursive(root.right, value);
    }
    return root;
  }

  getMax(node = this.root) {
    if (!node) {
      return null;
    }
    if (!node.right) {
      return node.value;
    }
    return this.getMax(node.right);
  }

  _fizzBuzzHelper(number) {
    if (number % 15 === 0) {
      return `fizz-buzz - ${number}`;
    } else if (number % 3 === 0) {
      return `fizz - ${number}`;
    } else if (number % 5 === 0) {
      return `buzz - ${number}`;
    } else {
      return `no fizz-buzz - ${number}`;
    }
  }

  processFizzBuzz(root = this.root) {
    if (!root) {
      return null;
    }

    const newTree = new Node(this._fizzBuzzHelper(root.value));

    const queue = new Queue();
    queue.enqueue(root);
    const newTreeQueue = new Queue();
    newTreeQueue.enqueue(newTree);

    while (!queue.isEmpty()) {
      const current = queue.dequeue();
      const newCurrent = newTreeQueue.dequeue();

      for (const child of current.children) {
        queue.enqueue(child);
        const newChild = new Node(this._fizzBuzzHelper(child.value));
        newCurrent.children.push(newChild);
        newTreeQueue.enqueue(newChild);
      }
    }

    return newTree;
  }
}

module.exports = {
  Node,
  BinarySearchTree,
  BasicTree,
};
