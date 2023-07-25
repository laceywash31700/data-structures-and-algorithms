// make a class node
// initialize the value property and next property
// make a linked list class
// give it a head
// while loop where when the ll value is truthy we enter the loop
// use a temp or current value to start the loop
// go to the next node
// at the end we will exit the loop

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = this.getTail();
    this.length = 0;
  }

  traversalCheatSheet() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }

  getTail() {
    /// return the last node of the list or something... count them??
    let current = this.head;
    while (current && current.next) {
      // conditional chaining
      current = current.next;
    }
    return current;
  }

  // insert
  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length += 1;
    } else {
      const temp = newNode;
      temp.next = this.head;
      this.head = temp;
      this.length += 1;
    }
  }

  // includes
  includes(value) {
    let current = this.head;

    while (current) {
      if (Object.values(current).includes(value)) {
        return true;
      }

      current = current.next; // Move to the next node
    }

    return false;
  }

  // toString
  // "{ a } -> { b } -> { c } -> NULL"
  toString() {
    if (!this.head) return 'NULL';
    let current = this.head;
    let returnStr = '';
    while (current) {
      // look at the node.value "{ a } -> "
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    // once we exit the loop we need to tack NULL on to the end
    returnStr += 'NULL';
    return returnStr;
  }

  // append
  // arguments: new value
  // adds a new node with the given value to the end of the list
  append(value) {
    let current = this.head;
    while (current) {
      current = current.next;
    }
    if (!current.next) {
      current.next = new Node(value);
      this.length += 1;
    }
  }

  // insert before
  // arguments: value, new value
  // adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(val, newVal) {
    let insert = new Node(newVal);
    if (!this.head)
    {
      this.length += 1;
      return this.head = insert;
    }
    if (this.head.value === val) {
      insert.next = this.head;
      this.head = insert;
      this.length += 1;
      return;
    }
    let current = this.head;
    while (current) {
      if (current.next.value === val) {
        let temp = current.next;
        current.next = insert;
        insert.next = temp;
        this.length += 1;
        return;
      } else {
        current = current.next;
      }
    }
  }

  //     insert after
  // arguments: value, new value
  // adds a new node with the given new value immediately after the first node that has the value specified
  insertAfter(val, newVal) {
    let insert = new Node(newVal);
    if (!this.head) {
      this.length += 1;
      return this.head = insert;
    }
    let current = this.head;
    while (current) {
      if (current.value === val) {
        current = current.next;
        let temp = current.next;
        current.next = insert;
        insert.next = temp;
        this.length += 1;
        return;
      } else {
        current = current.next;
      }
    }
  }

  //   kth from end
  // argument: a number, k, as a parameter.
  // Return the node’s value that is k places from the tail of the linked list.
  // You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
  nthFromTheEnd(n) {
    if(n > this.length){
      return 'this exceeds the list length';
    }else {
      let traversalNumber = this.length - n;
      let current = this.head;
      while(traversalNumber){
        traversalNumber -= 1;
        current = current.next;
        if(traversalNumber === 0){
          return current.value;
        }
      }}
  }
}

module.exports = { LinkedList, Node };
