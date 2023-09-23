class HashMap<T> {
    private data: { [key: string]: T } = {};
  
    // Add a key-value pair to the hash map
    set(key: string, value: T): void {
      this.data[key] = value;
    }
  
    // Retrieve a value based on its key
    get(key: string): T | undefined {
      return this.data[key];
    }
  
    // Check if a key exists in the hash map
    has(key: string): boolean {
      return key in this.data;
    }
  
    // Remove a key-value pair from the hash map
    delete(key: string): void {
      if (this.has(key)) {
        delete this.data[key];
      }
    }
  }
  
  // Example usage:
  const hashTable = new HashMap<number>();
  
  hashTable.set("one", 1);
  hashTable.set("two", 2);
  hashTable.set("three", 3);
  
  console.log(hashTable.get("two")); // Output: 2
  console.log(hashTable.has("four")); // Output: false
  
  hashTable.delete("three");
  console.log(hashTable.has("three")); // Output: false
  