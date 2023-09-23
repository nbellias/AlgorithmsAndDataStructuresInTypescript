function selectionSort(arr: number[]): number[] {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      // Find the index of the minimum element in the unsorted part of the array
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the found minimum element with the first element in the unsorted part
      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedAry = [64, 34, 25, 12, 22, 11, 90];
  const sortedAry = selectionSort(unsortedAry);
  console.log(sortedAry); // Output: [11, 12, 22, 25, 34, 64, 90]
  