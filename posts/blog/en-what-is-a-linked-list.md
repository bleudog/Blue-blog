---
title: 'What is a Linked List'
posttitle: 'Linked List'
postsubtitle: 'Part 01: Types of Linked List'
date: '2022-07-31 15:00:00'
updated: '2022-10-21 12:00:00'
tags:
  - linked list
lang: en
about: ds
---

A Linked List is a linear data structure where data elements are connected via series of nodes. Each node contains the data item and reference to the next node.

## Singly Linked List (unidirectional)

![Singly Linked List](/images/posts/linked-list/singly-linked-list.svg)

Singly Linked List is a unidirectional linked list that only one-way traversing is allowed. Each node contains a data and a pointer to reference the next node.

```ts
type ListNode = Node | null;

class Node {
  value: number;
  next: ListNode;

  constructor(value: number, next: ListNode = null) {
    this.value = value;
    this.next = next;
  }
}
```

## Doubly Linked List (bidirectional)

![Doubly Linked List](/images/posts/linked-list/doubly-linked-list.svg)

In doubly linked list, every node has two pointers to reference a node one before and after the current node. Benefit of having two pointers is that we can traverse in either direction: forward and backward.

```ts
type ListNode = Node | null;

class Node {
  value: number;
  next: ListNode;
  prev: ListNode;

  constructor(value: number, prev: ListNode = null, next: ListNode = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}
```

## Circular Linked List

In a circular linked list, the last node's pointer references back to the first node in the list.

![Circular Singly Linked List](/images/posts/linked-list/circular-singly-linked-list.svg)

A circular linked list can be implemented with a singly or doubly linked list. Thus, node's representation will depend on the type of linked list we choose.

If implemented with a singly linked list, the last node's pointer will reference the first node. If doubly linked list is used, first node's previous pointer will reference back to the last node and vice versa.

![Circular Doubly Linked List](/images/posts/linked-list/circular-doubly-linked-list.svg)

## Basic Linked List Operations

- **append** (push_back) - add a new node at the end of the list
- **prepend** (push_front) - add a new node in beginning of the list
- **delete** - remove the existing node from the list
- **search** - check if certain node (or a value) exists in the list

## See also:

- [Singly Linked List](./singly-linked-list)
- [Doubly Linked List](./doubly-linked-list)
- [Circular Linked List](./circular-linked-list)
