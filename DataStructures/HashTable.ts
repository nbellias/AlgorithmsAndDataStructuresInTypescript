class HashTable<T> {
    private readonly table: Record<string, T>;
  
    constructor() {
      this.table = {};
    }
  
    // Hash function to convert a key into an index
    private hash(key: string): string {
      let hashValue = 0;
      for (let i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i);
      }
      return String(hashValue);
    }
  
    // Insert a key-value pair into the hash table
    insert(key: string, value: T): void {
      const index = this.hash(key);
      this.table[index] = value;
    }
  
    // Retrieve a value from the hash table using a key
    get(key: string): T | undefined {
      const index = this.hash(key);
      return this.table[index];
    }
  
    // Remove a key-value pair from the hash table
    remove(key: string): void {
      const index = this.hash(key);
      delete this.table[index];
    }
  }
  
  // Example usage:
  const myHashTable = new HashTable<number>();
  myHashTable.insert("one", 1);
  myHashTable.insert("two", 2);
  myHashTable.insert("three", 3);
  
  console.log(myHashTable.get("two")); // Output: 2
  myHashTable.remove("two");
  console.log(myHashTable.get("two")); // Output: undefined
  