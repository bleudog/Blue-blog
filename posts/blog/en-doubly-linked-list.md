---
title: "Doubly-Linked List"
date: "2022-05-15 12:00:00"
tags: 
  - data structure
  - linked list
lang: en
---

## TL;DR
- O(1) to insert at or remove from the front.
- With a tail, O(1) to insert at or remove from the back.
- O(1) to insert between nodes or remove a node.
- O(n) to find arbitrary element.
- A link to full implementation: [bleudog/doubly-linked-list](https://github.com/bleudog/DataStructures-and-Algorithms/tree/main/02-linkedlists/doubly-linked-list)

---

## What is a doubly-linked list?
A **doubly-linked list** is a bidirectional [linked list](../en//what-is-linked-list) where each node points to the *next* and *prev* node in the list.

![Singly-Linked List Example](/images/posts/doubly-linked-list/doubly-linked-list.png)

A node in a doubly-linked list contains a *key* and two references: *next* and *prev*.

```c
typedef struct Node {
  int data;
  struct ListNode *next;
  struct ListNode *prev;
} Node;
```

## Operations
- `push_front(key)` - add new to the front
- `pop_front()` - remove data from the front
- `push_back(key)` - add new at the back
- `pop_back()` - remove the last data
- `front()` - peek at the first data
- `back()` - peek at the last data
- `find(key)` - is key in list?
- `erase(key)` - remove key from list
- `empty()` - is list empty? return `true` if yes else `false`.
- `size()` - return the total number of data
- `add_before(node, key)` - adds new before a given node
- `add_after(node, key)` - adds new after a given node

## Implemetation

### push_front(key)
```rb
# pseudocode
newNode = Node.new(data)
head.next.prev = newNode
newNode.prev = head
newNode.next = head.next
head.next = newNode
list.size += 1
```

Time complexity: **O(1)**

### push_back(key)
```rb
# pseudocode
newNode = Node.new(data)
tail.prev.next = newNode
newNode.prev = tail.prev
newNode.next = tail
tail.prev = newNode
list.size += 1
```

Time complexity **without** tail node: **O(n)**, n = number of nodes

Time complexity **with** tail: **O(1)**

### pop_front()
```rb
# pseudocode
head = head.next
list.size -= 1
```

Time complexity: **O(1)**

### pop_back()
```rb
# pseudocode
tail.prev.prev.next = tail
list.size -= 1
```

Time complexity: **O(1)**


### add_after(node, key)
```rb
# pseudocode
newNode = Node.new(key)
node.next.prev = newNode
newNode.next = node.next
newNode.prev = node
node.next = newNode
list.size += 1
```

Time complexity: **O(1)**

### add_before(node, key)
```rb
# pseudocode
newNode = Node.new(key)
newNode.next = node
newNode.prev = node.prev
node.prev.next = newNode
node.prev = newNode
list.size += 1
```

Time complexity: **O(1)**

## Operations Runtime
- `push_front(key)` - O(1)
- `pop_front()` -  O(1)
- `push_back(key)` -  O(n) or O(1) with tail
- `pop_back()` - O(1)
- `front()` -  O(1)
- `back()` -  O(n) or O(1) with tail
- `find(key)` -  O(n)
- `erase(key)` - O(n)
- `empty()` - O(1)
- `size()` - O(1)
- `add_before(node, key)` - O(1)
- `add_after(node, key)` - O(1)

## Reference
- [https://www.coursera.org/lecture/data-structures/doubly-linked-lists-jpGKD](https://www.coursera.org/lecture/data-structures/doubly-linked-lists-jpGKD)