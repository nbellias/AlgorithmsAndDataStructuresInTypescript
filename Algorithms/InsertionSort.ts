function insertionSort(arr: number[]): number[] {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      const currentElement = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedArr = [64, 34, 25, 12, 22, 11, 90];
  const sortedArr = insertionSort(unsortedArr);
  console.log(sortedArr); // Output: [11, 12, 22, 25, 34, 64, 90]
  