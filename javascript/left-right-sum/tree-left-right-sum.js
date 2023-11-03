function findGreaterSumSide(root) {
    if (!root) {
      return 0;
    }
  
    const leftSum = _calculateSum(root.left);
    const rightSum = _calculateSum(root.right);
  
    if (leftSum > rightSum) {
      return "left";
    } else if (rightSum > leftSum) {
      return "right";
    } else {
      return "equal";
    }
  }
  
  function _calculateSum(node) {
    if (!node) {
      return 0;
    }
    return node.val + _calculateSum(node.left) + _calculateSum(node.right);
  }
  