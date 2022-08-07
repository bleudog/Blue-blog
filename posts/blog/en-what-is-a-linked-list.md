---
title: "What is a Linked List?"
date: "2022-07-31 15:00:00"
tags: 
  - linked list
lang: en
about: ds
---

A Linked List is a linear data structure where data elements are connected via series of nodes. Each node contains the data item and reference to the next node.

# Types of Linked Lists

## Singly Linked List (unidirectional)

![Singly Linked List](/images/posts/linked-list/singly-linked-list.svg)

Singly Linked List is a unidirectional linked list that only one-way traversing is allowed. Each node contains a data and a pointer to reference the next node.


```c
struct Node {
    struct Node *next;
    int data;
};
```

---

## Doubly Linked List (bidirectional)

![Doubly Linked List](/images/posts/linked-list/doubly-linked-list.svg)

In doubly linked list, every node has two pointers to reference a node one before and after the current node. Benefit of having two pointers is that we can traverse in either direction: forward and backward.


```c
struct Node {
    struct Node *next;
    struct Node *prev;
    int data;
};
```

---

## Circular Linked List
In a circular linked list, the last node's pointer references back to the first node in the list.

![Circular Singly Linked List](/images/posts/linked-list/circular-singly-linked-list.svg)

A circular linked list can be implemented with a singly or doubly linked list. Thus, node's representation will depend on the type of linked list we choose.

If implemented with a singly linked list, the last node's pointer will reference the first node. If doubly linked list is used, first node's previous pointer will reference back to the last node and vice versa.

![Circular Doubly Linked List](/images/posts/linked-list/circular-doubly-linked-list.svg)

---

# Linked List Operations

Here are four common operations done in a linked list:
- **Insert** - adds a new node to the linked list
- **Delete** - removes the existing node from the list
- **Search** - find a node in the linked list
- **Traversal** - access each node in the list

---

See also:
- [Singly Linked List](./singly-linked-list)
- [Doubly Linked List](./doubly-linked-list)
- [Circular Linked List](./circular-linked-list)
- [Linked List related problems from Leetcode](https://github.com/rolemadelen/DataStructures-and-Algorithms/tree/main/02-linkedlists)