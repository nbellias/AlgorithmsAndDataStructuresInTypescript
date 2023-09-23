function linearSearch<T>(array: T[], target: T): number {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i; // Element found, return its index
      }
    }
    return -1; // Element not found
  }
  
  // Example usage:
  const numbers = [10, 20, 30, 40, 50];
  const targetNumber = 30;
  const result = linearSearch(numbers, targetNumber);
  
  if (result !== -1) {
    console.log(`${targetNumber} found at index ${result}`);
  } else {
    console.log(`${targetNumber} not found in the array`);
  }
  