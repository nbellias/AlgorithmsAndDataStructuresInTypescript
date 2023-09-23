class Queue<T> {
    private items: T[] = [];
  
    // Add an item to the end of the queue
    enqueue(item: T): void {
      this.items.push(item);
    }
  
    // Remove and return the item from the front of the queue
    dequeue(): T | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items.shift();
    }
  
    // Return the item at the front of the queue without removing it
    peek(): T | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // Get the number of items in the queue
    size(): number {
      return this.items.length;
    }
  
    // Clear all items from the queue
    clear(): void {
      this.items = [];
    }
  
    // Convert the queue to an array
    toArray(): T[] {
      return [...this.items];
    }
  }
  
  // Example usage:
  const queue = new Queue<number>();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue()); // 1
  console.log(queue.peek());    // 2
  console.log(queue.size());    // 2
  console.log(queue.toArray()); // [2, 3]
  queue.clear();
  console.log(queue.isEmpty()); // true
  