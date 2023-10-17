// treeIntersection.test.js

const treeIntersection = require('./treeIntersection');

describe('treeIntersection', () => {
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  it('finds common values between two binary trees', () => {
    // Define the binary trees
    const root1 = new Node(1);
    root1.left = new Node(2);
    root1.right = new Node(3);
    root1.left.left = new Node(4);

    const root2 = new Node(2);
    root2.left = new Node(4);
    root2.right = new Node(5);
    root2.left.left = new Node(6);

    // Call the treeIntersection function
    const result = treeIntersection(root1, root2);

    // Assert the result
    expect(result).toEqual([2, 4]);
  });

  it('handles empty trees', () => {
    // Call the treeIntersection function with empty trees
    const result = treeIntersection(null, null);

    // Assert the result
    expect(result).toEqual([]);
  });

  it('handles trees with no common values', () => {
    // Define binary trees with no common values
    const root1 = new Node(1);
    root1.left = new Node(2);

    const root2 = new Node(3);
    root2.left = new Node(4);

    // Call the treeIntersection function
    const result = treeIntersection(root1, root2);

    // Assert the result
    expect(result).toEqual([]);
  });
});
