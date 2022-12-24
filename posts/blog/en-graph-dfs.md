---
title: 'Graph - DFS'
posttitle: 'Graph'
postsubtitle: 'Depth First Search'
date: '2022-12-09 17:00:00'
tags:
  - programming
  - data structure
lang: en
about: dsa
---

## Depth First Search

Depth First Search (DFS) algorithm is another way of traversing a graph. Unlike BFS where it explores all adjacent nodes first, DFS explores one node at a time to its deepest level.

For example, consider we have a graph like the below and we're going to traverse it from the node `1`.

For BFS, it'll explore all the neighbors first before it explores other nodes further away from itself. So if we were to display the nodes we visited in order, it'll be `1 2 3 4 5`.

![bfs tree](/images/posts/what-is-a-graph/tree-bfs.png)

For DFS, it'll continue exploring the node until it hits a leaf node. Then continues with the neighbor node as it comes back up to the parent node. The order of visit on this one would be `1 2 4 5 3`. This ordering is actually equivalent to [preorder traversal](https://en.wikipedia.org/wiki/Preorder).

> Depends on how you implemented, it could also be `1 3 2 5 4` which is exploring the other direction first.

![tree dfs](/images/posts/what-is-a-graph/tree-dfs.png)

## DFS Pseudocode

```text
dfs(graph, startingNode) → bool
    Pre: 'graph' is an adjacency list
         'startingNode' is a starting node to perform BFS
    Post: we've traversed a graph successfully :p

    S ← new Stack( startingNode )

    visited ← new Array( graph.vertices + 1 )
    visited[startingNode.value] ← true

    WHILE ( !S.empty() )
        V ← S.pop()
        print( V.value )

        FOR ( all neighbors U in V )
            IF ( visited[U.value] == false )
                visited[V.value] ← true
                S.push( U )
            END IF
        END FOR
    END WHILE

    return false
END dfs
```
