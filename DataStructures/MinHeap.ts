// A min-heap is a binary tree where the parent node is smaller than its children.

class MinHeap<T> {
    private heap: T[] = [];
  
    private getParentIndex(index: number): number {
      return Math.floor((index - 1) / 2);
    }
  
    private getLeftChildIndex(index: number): number {
      return 2 * index + 1;
    }
  
    private getRightChildIndex(index: number): number {
      return 2 * index + 2;
    }
  
    private siftUp(): void {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = this.getParentIndex(currentIndex);
        if (this.heap[currentIndex] < this.heap[parentIndex]) {
          // Swap child and parent if child is smaller
          [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
          currentIndex = parentIndex;
        } else {
          break;
        }
      }
    }
  
    private siftDown(): void {
      let currentIndex = 0;
      const length = this.heap.length;
      const element = this.heap[0];
  
      while (true) {
        const leftChildIndex = this.getLeftChildIndex(currentIndex);
        const rightChildIndex = this.getRightChildIndex(currentIndex);
        let leftChild, rightChild;
        let swapIndex = null;
  
        if (leftChildIndex < length) {
          leftChild = this.heap[leftChildIndex];
          if (leftChild < element) {
            swapIndex = leftChildIndex;
          }
        }
  
        if (rightChildIndex < length) {
          rightChild = this.heap[rightChildIndex];
          if ((swapIndex === null && rightChild < element) || (swapIndex !== null && rightChild < leftChild!)) {
            swapIndex = rightChildIndex;
          }
        }
  
        if (swapIndex === null) {
          break;
        }
  
        this.heap[currentIndex] = this.heap[swapIndex];
        this.heap[swapIndex] = element;
        currentIndex = swapIndex;
      }
    }
  
    public insert(value: T): void {
      this.heap.push(value);
      this.siftUp();
    }
  
    public popMin(): T | undefined {
      const length = this.heap.length;
      if (length === 0) return undefined;
  
      if (length === 1) {
        return this.heap.pop()!;
      }
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop()!;
      this.siftDown();
      return min;
    }
  
    public peekMin(): T | undefined {
      return this.heap[0];
    }
  
    public size(): number {
      return this.heap.length;
    }
  
    public isEmpty(): boolean {
      return this.heap.length === 0;
    }
  }
  
  // Example usage:
  const heap = new MinHeap<number>();
  heap.insert(5);
  heap.insert(3);
  heap.insert(8);
  heap.insert(1);
  heap.insert(10);
  
  console.log(heap.popMin()); // Output: 1
  console.log(heap.popMin()); // Output: 3
  