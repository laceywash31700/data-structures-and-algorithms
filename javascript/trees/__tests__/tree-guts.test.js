const { Node, BinarySearchTree } = require('../tree-guts');

describe('Tree Traversal Tests', () => {
  let rootNode;
  let binarySearchTree;

  beforeAll(() => {
    rootNode = new Node(10);
    rootNode.left = new Node(5);
    rootNode.right = new Node(15);
    rootNode.left.left = new Node(3);
    rootNode.left.right = new Node(7);
    rootNode.right.left = new Node(12);
    rootNode.right.right = new Node(20);

    binarySearchTree = new BinarySearchTree(rootNode);
  });
  test('Pre-order traversal', () => {
    const expectedResult = [10, 5, 3, 7, 15, 12, 20];
    const result = binarySearchTree.preOrder();
    expect(result).toEqual(expectedResult);
  });

  test('In-order traversal', () => {
    const expectedResult = [3, 5, 7, 10, 12, 15, 20];
    const result = binarySearchTree.inOrder();
    expect(result).toEqual(expectedResult);
  });
  test('Post-order traversal', () => {
    const expectedResult = [3, 7, 5, 12, 20, 15, 10];
    const result = binarySearchTree.postOrder();
    expect(result).toEqual(expectedResult);
  });
  test('Finding the maximum value', () => {
    const maxValue = binarySearchTree.getMax();
    expect(maxValue).toBe(20);
  });
  test('breadth first traversal', () => {
    let expectedResult = [10, 5, 15, 3, 7, 12, 20];
    let actualResult = binarySearchTree.breadthFirst();
    console.log('+++++++++',actualResult);
    expect(actualResult).toStrictEqual(expectedResult);
  });
});
