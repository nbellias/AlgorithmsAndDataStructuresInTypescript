class Stack<T> {
    private items: T[] = [];
  
    // Push an item onto the stack
    push(item: T): void {
      this.items.push(item);
    }
  
    // Pop an item from the stack
    pop(): T | undefined {
      return this.items.pop();
    }
  
    // Peek at the top item without removing it
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size(): number {
      return this.items.length;
    }
  
    // Clear the stack
    clear(): void {
      this.items = [];
    }
  }
  
  // Example usage
  const stack = new Stack<number>();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log(stack.peek()); // 3
  console.log(stack.pop());  // 3
  console.log(stack.size()); // 2
  
  stack.clear();
  console.log(stack.isEmpty()); // true
  