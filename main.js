class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      node.next = current;

      this.head = node;
    }

    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    if (this.head === null) {
      return "head is empty";
    }
    return this.head;
  }

  tail() {
    if (this.head === null) {
      return "list is empty";
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      return current;
    }
  }

  at(index) {
    if (this.head === null) {
      return "list is empty";
    } else if (index < 0 || index >= this.length) {
      return "invalid index";
    } else {
      let current = this.head;

      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
  }

  pop() {
    if (this.head === null) {
      return "list is empty";
    } else {
      let current = this.head;

      while (current.next.next != null) {
        current = current.next;
      }
      current.next = null;
      this.length--;
    }
  }

  contains(value) {
    if (this.head === null) {
      return false;
    } else {
      let current = this.head;

      while (current !== null) {
        if (current.value === value) {
          return current;
        }
        current = current.next;
      }
    }
    return false;
  }

  find(value) {
    if (this.head === null) {
      return "list is empty";
    } else {
      let current = this.head;
      let index = 0;

      while (current !== null) {
        if (current.value === value) {
          return index;
        }

        current = current.next;
        index++;
      }
    }
    return -1;
  }

  toString() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }

    return result + "null";
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
