'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  toString() {
    if (!this.top) return 'NULL';
    let current = this.top;
    let returnStr = '';
    while (current) {
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    returnStr += 'NULL';
    return returnStr;
  }

  push(val) {
    if (!this.top) {
      return (this.top = new Node(val));
    }
    let current = this.top;
    let newNode = new Node(val);
    newNode.next = current;
    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      throw new Error('nothing to pop off');
    }
    let current = this.top;
    let temp = current.next;
    this.top = temp;
    return current;
  }

  peek() {
    if (!this.top) {
      throw new Error('this stack is empty');
    }
    let current = this.top;
    return current.value;
  }

  isEmpty() {
    if (this.top) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {Stack, Node};
