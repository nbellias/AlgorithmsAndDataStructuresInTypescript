class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree<T> {
    root: TreeNode<T> | null;
  
    constructor() {
      this.root = null;
    }
  
    insert(value: T): void {
      const newNode = new TreeNode(value);
  
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    search(value: T): boolean {
      return this.searchNode(this.root, value);
    }
  
    private searchNode(node: TreeNode<T> | null, value: T): boolean {
      if (!node) {
        return false;
      }
  
      if (value === node.value) {
        return true;
      } else if (value < node.value) {
        return this.searchNode(node.left, value);
      } else {
        return this.searchNode(node.right, value);
      }
    }
  }
  
  // Example usage:
  const tree = new BinaryTree<number>();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  
  console.log(tree.search(5)); // true
  console.log(tree.search(7)); // false
  