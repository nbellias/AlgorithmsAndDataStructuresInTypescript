class SingleLinkNode<T> {
    data: T;
    next: SingleLinkNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: SingleLinkNode<T> | null;
    private tail: SingleLinkNode<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    append(data: T): void {
        const newSingleLinkNode = new SingleLinkNode(data);
        if (this.isEmpty()) {
            this.head = newSingleLinkNode;
            this.tail = newSingleLinkNode;
        } else {
            this.tail!.next = newSingleLinkNode;
            this.tail = newSingleLinkNode;
        }
    }

    prepend(data: T): void {
        const newSingleLinkNode = new SingleLinkNode(data);
        if (this.isEmpty()) {
            this.head = newSingleLinkNode;
            this.tail = newSingleLinkNode;
        } else {
            newSingleLinkNode.next = this.head;
            this.head = newSingleLinkNode;
        }
    }

    delete(data: T): void {
        if (this.isEmpty()) return;

        if (this.head!.data === data) {
            this.head = this.head!.next;
            if (this.head === null) {
                this.tail = null;
            }
            return;
        }

        let current = this.head;
        while (current!.next !== null) {
            if (current!.next.data === data) {
                current!.next = current!.next.next;
                if (current!.next === null) {
                    this.tail = current;
                }
                return;
            }
            current = current!.next;
        }
    }

    display(): void {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);

console.log("Linked List:");
linkedList.display(); // Output: 0 1 2 3

linkedList.delete(2);
console.log("Linked List after deleting 2:");
linkedList.display(); // Output: 0 1 3