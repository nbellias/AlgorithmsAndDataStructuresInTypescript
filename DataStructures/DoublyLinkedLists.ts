class DoubleLinkNode<T> {
    data: T;
    next: DoubleLinkNode<T> | null;
    prev: DoubleLinkNode<T> | null;
  
    constructor(data: T) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList<T> {
    private head: DoubleLinkNode<T> | null;
    private tail: DoubleLinkNode<T> | null;
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    isEmpty(): boolean {
      return this.head === null;
    }
  
    append(data: T): void {
      const newDoubleLinkNode = new DoubleLinkNode(data);
      if (this.isEmpty()) {
        this.head = newDoubleLinkNode;
        this.tail = newDoubleLinkNode;
      } else {
        newDoubleLinkNode.prev = this.tail;
        this.tail!.next = newDoubleLinkNode;
        this.tail = newDoubleLinkNode;
      }
    }
  
    prepend(data: T): void {
      const newDoubleLinkNode = new DoubleLinkNode(data);
      if (this.isEmpty()) {
        this.head = newDoubleLinkNode;
        this.tail = newDoubleLinkNode;
      } else {
        newDoubleLinkNode.next = this.head;
        this.head!.prev = newDoubleLinkNode;
        this.head = newDoubleLinkNode;
      }
    }
  
    delete(data: T): void {
      if (this.isEmpty()) return;
  
      if (this.head!.data === data) {
        this.head = this.head!.next;
        if (this.head === null) {
          this.tail = null;
        } else {
          this.head!.prev = null;
        }
        return;
      }
  
      if (this.tail!.data === data) {
        this.tail = this.tail!.prev;
        this.tail!.next = null;
        return;
      }
  
      let current = this.head;
      while (current !== null) {
        if (current.data === data) {
          current.prev!.next = current.next;
          current.next!.prev = current.prev;
          return;
        }
        current = current.next;
      }
    }
  
    displayForward(): void {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    displayBackward(): void {
      let current = this.tail;
      while (current !== null) {
        console.log(current.data);
        current = current.prev;
      }
    }
  }
  
  // Example usage:
  const doublyLinkedList = new DoublyLinkedList<number>();
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);
  doublyLinkedList.prepend(0);
  
  console.log("Doubly Linked List (Forward):");
  doublyLinkedList.displayForward(); // Output: 0 1 2 3
  
  console.log("Doubly Linked List (Backward):");
  doublyLinkedList.displayBackward(); // Output: 3 2 1 0
  
  doublyLinkedList.delete(2);
  console.log("Doubly Linked List after deleting 2 (Forward):");
  doublyLinkedList.displayForward(); // Output: 0 1 3
  
  console.log("Doubly Linked List after deleting 2 (Backward):");
  doublyLinkedList.displayBackward(); // Output: 3 1 0
  