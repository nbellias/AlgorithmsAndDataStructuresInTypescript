class GraphNode<T> {
    data: T;
    neighbors: GraphNode<T>[];
  
    constructor(data: T) {
      this.data = data;
      this.neighbors = [];
    }
  
    addNeighbor(node: GraphNode<T>): void {
      this.neighbors.push(node);
    }
  }
  
  class Graph<T> {
    nodes: GraphNode<T>[];
  
    constructor() {
      this.nodes = [];
    }
  
    addNode(data: T): void {
      const newNode = new GraphNode(data);
      this.nodes.push(newNode);
    }
  
    addEdge(source: T, destination: T): void {
      const sourceNode = this.findNode(source);
      const destNode = this.findNode(destination);
  
      if (sourceNode && destNode) {
        sourceNode.addNeighbor(destNode);
      } else {
        throw new Error("Source or destination node not found.");
      }
    }
  
    private findNode(data: T): GraphNode<T> | undefined {
      return this.nodes.find((node) => node.data === data);
    }
  }
  
  // Example usage
  const graph = new Graph<number>();
  
  graph.addNode(1);
  graph.addNode(2);
  graph.addNode(3);
  graph.addNode(4);
  
  graph.addEdge(1, 2);
  graph.addEdge(2, 3);
  graph.addEdge(3, 4);
  
  console.log(graph);
  