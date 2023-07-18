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
  }

  traversalCheatSheet() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }

  altTraversalCheatSheet() {
    /// return the last node of the list or something... count them??
    let current = this.head;
    while (current.next) {
      // conditional chaining
      current = current.next;
    }
    return current;
  }

  // insert
  insert(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      const temp = new Node(value);
      temp.next = this.head;
      this.head = temp;
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
}

module.exports = { LinkedList, Node };
