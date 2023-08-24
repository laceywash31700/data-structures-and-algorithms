'use strict';

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

    console.log('This is pre-order:', results);
    return results;
  }

  inOrder(node = this.root, results = []) {
    if (node === null) {
      return results;
    }

    this.inOrder(node.left, results);
    results.push(node.value);
    this.inOrder(node.right, results);

    console.log('This is in-order:', results);
    return results;
  }

  postOrder(node = this.root, results = []) {
    if (node === null) {
      return results;
    }

    this.postOrder(node.left, results);
    this.postOrder(node.right, results);
    results.push(node.value);

    console.log('This is post-order:', results);
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
    }

    else if (value < root.value) {
      root.left = this._insertRecursive(root.left, value);
    } else {
      root.right = this._insertRecursive(root.right, value);
    }
    return root;
  }
}
