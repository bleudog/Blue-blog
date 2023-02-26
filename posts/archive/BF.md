---
title: 'Graph - How to detect a cycle?'
posttitle: 'Graph - How to detect a cycle?'
date: '2022-12-10 17:00:00'
uid: 'BF'
---

How can we determine whether a cycle is present in the graph or not?

![graph-cycle](/images/posts/what-is-a-graph/graph-cycle.png)

The simplest way to determine the presence of a cycle is to use DFS.

Let's say we performed DFS from node `1`. This gives us three new information about edges in the graph: back, forward, and cross edges.

![graph-cycle-edge](/images/posts/what-is-a-graph/graph-cycle-edges.png)

Looking at the above figure, we know that there's a cycle because of the _back edge_. It's going back to its ancestor.

So as we perform DFS from **every nodes** in the graph, we need to check whether a certain node was visited during the current process of DFS or was it visited from previously done DFS -- basically checking the stack.

```js
let cycle = false;
let v = 5;
let visited: boolean[] = new boolean[n].fill(false);
let finishedDFS: boolean[] = new boolean[n].fill(false);
let adj = new AdjacencyList(v);

const isCyclic = () {
    for(let i=0; i<v; ++i) {
        dfs(i);
        if(cycle) {
            break;
        }
    }

    return cycle;
}

const dfs = (idx) => {
    visited[idx] = true;

    for(let i=0; i<adj[idx].length; ++i) {
        let u = adj[idk][i];
        if(visited[u] === false) {
            dfs(u);
        } else if(finishedDFS[u] === false) {
            cycle = true;
            break;
        }
    }
    finished[v] = true;
};
```
