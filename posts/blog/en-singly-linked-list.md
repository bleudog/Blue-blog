---
title: "Singly-Linked List"
date: "2022-05-08 01:00:00"
tags: 
  - data structure
  - linked list
lang: en
---

## TL;DR
- A singly-linked list is a sequence of nodes where each node points to the next node only.
- A link to full implementation: [bleudog/singly-linked-list](https://github.com/bleudog/DataStructures-and-Algorithms/tree/main/02-linkedlists/singly-linked-list)

---

## What is a singly-linked list?
A **singly-linked list** is a unidirectional [linked list](../en//what-is-linked-list) where each node points to the *next* node in the list.

![Singly-Linked List Example](/images/posts/what-is-linked-list/linkedlist-example.png)

A node in a singly-linked list contains a *key* and a reference which points to the next node or `null` if it's the last node.

```c
typedef struct Node {
  int data;
  struct ListNode *next;
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
These implementations are done without using a tail node.

### push_front(key)
```rb
# pseudocode
node = new node
node.key = key
node.next = head
head = node

list.size += 1
```

Time complexity: **O(1)**

### push_back(key)
```rb
# pseudocode
node = new node
node.key = key
node.next = nil

curr = list.sentinel
while curr.next != nil
  curr = curr.next
end

curr.next = node
list.size += 1
```

Time complexity **without** tail node: **O(n)**, n = number of nodes

Time complexity **with** tail: **O(1)**

### pop_front()
```rb
# pseudocode
if !head
	ERROR: empty list
end

head = head.next
list.size -= 1
```

Time complexity: **O(1)**

### pop_back()
```rb
# pseudocode
if !head 
	ERROR: empty list
end

# single element
if list.size == 1
	head = nil
else
	p = head
	# find the 2nd to the last element
	while p.next.next != nil
		p = p.next
	end
	p.next = nil
end

list.size -= 1
```

Time complexity: **O(n)**, n = number of nodes


### add_after(node, key)
```rb
# pseudocode
node2 = new node
node2.key = key
node2.next = node.next
node.next = node2

list.size += 1
```

Time complexity: **O(1)**

### add_before(node, key)
```rb
# pseudocode
node2 = new node
node2.key = key
node2.next = nil

curr = list.sentinel
while curr.next != node
  curr = curr.next
end

curr.next = node2
node2.next = node

list.size += 1
```

Time complexity: **O(n)**, n = number of node

## Operations Runtime
- `push_front(key)` - O(1)
- `pop_front()` -  O(1)
- `push_back(key)` -  O(n) or O(1) with tail
- `pop_back()` - O(n)
- `front()` -  O(1)
- `back()` -  O(n) or O(1) with tail
- `find(key)` -  O(n)
- `erase(key)` - O(n)
- `empty()` - O(1)
- `size()` - O(1)
- `add_before(node, key)` - O(n)
- `add_after(node, key)` - O(1)

## Reference
- [https://www.coursera.org/lecture/data-structures/singly-linked-lists-kHhgK](https://www.coursera.org/lecture/data-structures/singly-linked-lists-kHhgK)