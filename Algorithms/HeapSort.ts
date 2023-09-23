function heapSort(arr: number[]): number[] {
    function heapify(arr: number[], n: number, i: number): void {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
  
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
  
      if (largest !== i) {
        // Swap arr[i] and arr[largest]
        const temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
  
        heapify(arr, n, largest);
      }
    }
  
    const n = arr.length;
  
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
      // Move the current root to the end
      const temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
  
      // Call max heapify on the reduced heap
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedAr = [64, 34, 25, 12, 22, 11, 90];
  const sortedAr = heapSort(unsortedAr);
  console.log(sortedAr); // Output: [11, 12, 22, 25, 34, 64, 90]
  