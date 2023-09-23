function binarySearch<T>(array: T[], target: T): number {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (array[mid] === target) {
        return mid; // Element found, return its index
      } else if (array[mid] < target) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  
    return -1; // Element not found
  }
  
  // Example usage:
  const sortedNumbers = [10, 20, 30, 40, 50];
  const targetNum = 30;
  const reslt = binarySearch(sortedNumbers, targetNum);
  
  if (reslt !== -1) {
    console.log(`${targetNum} found at index ${reslt}`);
  } else {
    console.log(`${targetNum} not found in the array`);
  }
  