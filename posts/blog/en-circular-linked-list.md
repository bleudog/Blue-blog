---
title: 'Circular Linked List'
posttitle: 'Linked List'
postsubtitle: 'Part 04: Circular Linked List'
date: '2022-07-31 18:50:00'
tags:
  - linked list
lang: en
about: dsa
---

# What is a Circular Linked List?

In a circular linked list, the last node's pointer references back to the first node in the list.

![Circular Singly Linked List](/images/posts/linked-list/circular-singly-linked-list.svg)

A circular linked list can be implemented with a singly or doubly linked list. In this post, I'm going to use a singly linked list.

Here's a structure of the node:

```rb
class Node
    attr_accessor :next
    attr_reader :data

    def initialize(value)
        @data = value
        @next = nil
    end
end
```

These are methods that I'm gonna go over in this post:

- Insert
  - `push_front(value)`
  - `push_back(value)`
  - `insert_at(position, value)`
- Delete
  - `pop_front`
  - `pop_back`
  - `delete_at(position)`

---

# Insert Operations

## push_front

Inserts a new node at the beginning of the list.

```rb
def push_front(value)
    @size += 1
    new_node = Node.new(value)

    if @head == nil
        @head = new_node
        @tail = @head
        @tail.next = @head
        return
    end

    new_node.next = @head
    @head = new_node
    @tail.next = @head
end
```

## push_back

Inserts a new node at the end of the list.

```rb
def push_back(value)
    return push_front(value) if @head == nil

    new_node = Node.new(value)
    new_node.next = @head
    @tail.next = new_node
    @tail = new_node
    @size += 1
end
```

## insert_at

Inserts a new node in the middle of the list.

```rb
# 1-based index
def insertAt(position, value)
    return push_front(value) if position == 1
    return push_back(value) if position == @size+1

    curr = @head

    (position-2).times do
        curr = curr.next
    end

    new_node = Node.new(value)
    new_node.next = curr.next
    curr.next = new_node
    @size += 1
end
```

---

# Delete Operations

## pop_front

Removes the first element from the list.

```rb
def pop_front
    return if self.empty?

    if @size == 1
        data = @head.data
        @head = @tail = nil
        @size = 0
        return data
    end

    data = @head.data
    @head = @head.next
    @tail.next = @head
    @size -= 1
    data
end
```

## pop_back

Removes the last element from the list.

```rb
def pop_back
    return if self.empty?
    return pop_front if @size == 1

    curr = @head
    while curr.next != @tail
        curr = curr.next
    end

    data = curr.next.data
    curr.next = @head
    @tail = curr
    @size -= 1
    data
end
```

## delete_at

Removes a node in the middle of the list.

```rb
# 1-based index
def deleteAt(position)
    return pop_front if position == 1
    return pop_back if position == @size+1

    curr = @head
    (position-2).times do
        curr = curr.next
    end

    data = curr.next.data
    curr.next = curr.next.next
    @size -= 1
    data
end
```

---

Check full implementation from [here](https://github.com/rolemadelen/DataStructures-and-Algorithms/blob/main/02-linkedlists/circular-singly-linked-list/ruby/main.rb).

## See also

- [What is a Linked List](./what-is-a-linked-list)
- [Singly Linked List](./singly-linked-list)
- [Doubly Linked List](./doubly-linked-list)
- [Circular Linked List](./circular-linked-list)
