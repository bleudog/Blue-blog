---
title: 'What is a Graph?'
posttitle: 'What is a Graph?'
date: '2022-12-06 17:00:00'
uid: 'C'
---

Graph is a non-linear data structure consisting of vertices and edges.

![graph](/images/posts/what-is-a-graph/graph.png)

Vertices are nodes and edges represent a link or connection between any two nodes. A vertex is denoted with `V` and `E` for an edge.

## Graph Representation

A graph can be represented either with a linked list or a matrix and each representation has its own pros and cons.

_Adjacency List_ is a term used to refer to a graph made with a linked list, and Adjacency Matrix is a graph done with a 2D array.

### Adjacency Matrix

![adjacency matrix](/images/posts/what-is-a-graph/adjacency-matrix.png)

When we use a matrix form to implement a graph, the number of vertex becomes the row and column.

```ts
class AdjacencyMatrix {
    vertex: number;
    graph: number[][] | null[][];

    constructor(v: number) {
        this.vertex = v;
        this.graph = new Array(v);
        for (let i = 0; i < v; ++i) {
            this.graph[i] = new Array(v).fill(null);
        }
    }
}

let graph = new AdjacencyMatrix(5);
```

Since array allows for a direct access to its position, we can add or remove the edge in constant time.

Below is an example of an adding a removing an edge for _undirected graph_.

```ts
addEdge(u: number, v: number) {
    this.graph[u][v] = 1;
    this.graph[v][u] = 1;
}

removeEdge(u: number, v: number) {
    this.graph[u][v] = null;
    this.graph[v][u] = null;
}
```

Now the downside of using an array is that, it takes up `O(V*V)` space regardless of number of edges. Imagine we only have a single edge on the graph but thousand nodes. Although only have a single edge, we'll need a space to store `1000 * 1000` array.

If your graph contains large number of edges, use adjacency matrix. If not, use adjacency list.

### Adjacency List

![adjacency List](/images/posts/what-is-a-graph/adjacency-list.png)

Adjacency list is a collection of list and each list represents a vertex.

```ts
export class AdjacencyList {
    vertex: number;
    graph: LinkedList<number>[];

    constructor(v: number) {
        this.vertex = v;
        this.graph = new Array(v);
        for (let i = 0; i < v; ++i) {
            this.graph[i] = new LinkedList<number>();
        }
    }
}

let graph = new AdjacencyList(5);
```

In case of the figure above, we have 5 vertices (`0`, `1`, `2`, `3`, and `4`). And nodes within the list are all the nodes connected to its vertex. For example, a vertex `1` has 3 edges, connected to the node `0`, `4`, and `2`. Those arrow doesn't mean that the graph is directed. It can still be undirected. This hints about the speed of `find` and `remove` functionality. It's going to be linear.

## Adjacency Matrix vs. List

If your graph is **dense** or contains lots edges, use adjacency matrix. If you have a **sparse** graph or has less number of edges, use adjacency list.

| Action            | Adjacency Matrix | Adjacency List |
| :---------------- | :--------------: | :------------: |
| Adding Edge       |       O(1)       |      O(1)      |
| Removing and edge |       O(1)       |      O(N)      |
| Space             |    O(V \* V)     |   O(V \* E)    |
