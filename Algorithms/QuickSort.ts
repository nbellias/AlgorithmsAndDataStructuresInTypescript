function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage:
  const unsortedArry = [64, 34, 25, 12, 22, 11, 90];
  const sortedArry = quickSort(unsortedArry);
  console.log(sortedArry); // Output: [11, 12, 22, 25, 34, 64, 90]
  