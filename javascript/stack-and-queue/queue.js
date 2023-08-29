'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(front = null, rear = null) {
    this.front = front;
    this.rear = rear;
  }

  isEmpty() {
    return this.front === null;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.front) {
      this.front = newNode;
      this.rear = this.front;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (!this.front) {
      throw new Error('No front');
    }
    let current = this.front;
    this.front = current.next;
    current.next = null;
    return current.value;
  }

  peek() {
    if (!this.front) {
      throw new Error('No front');
    }
    return this.front.value;
  }

  toString() {
    if (!this.front) return 'NULL';
    let current = this.front;
    let returnStr = '';
    while (current) {
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    returnStr += 'NULL';
    return returnStr;
  }

}



module.exports = Queue;
