---
title: "Doubly Linked List?"
date: "2022-07-31 17:50:00"
tags: 
  - linked list
lang: en
about: ds
---

# What is a Doubly Linked List?
In doubly linked list, every node has two pointers to reference a node one before and after the current node. Benefit of having two pointers is that we can traverse in either direction: forward and backward.

![Doubly Linked List](/images/posts/linked-list/doubly-linked-list.svg)

Here's a structure of doubly linked list's node implemented in Ruby:
```rb
class Node 
    attr_accessor :next, :prev
    attr_reader :data

    def initialize(value)
        @next = @prev = nil
        @data = value
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

I'm using a dummy head in my implementation. By doing this, I don't have to worry about performing operations on a `nil` or an empty list.
```rb
class DoublyLinkedList
    def initialize 
        @dummy_head = Node.new(0)
        @dummy_tail = Node.new(0)
        @dummy_head.next = @dummy_tail 
        @dummy_tail.prev = @dummy_head
    end 
end
```

# Insert Operations
## push_front
Inserts a new node at the beginning of the list.
```rb
def push_front(value)
    new_node = Node.new(value)

    new_node.prev = @dummy_head
    new_node.next = @dummy_head.next
    @dummy_head.next.prev = new_node
    @dummy_head.next = new_node
end 
```

## push_back
Inserts a new node at the end of the list.
```rb
def push_back(value)
    new_node = Node.new(value)
    
    new_node.next = @dummy_tail 
    new_node.prev = @dummy_tail.prev
    @dummy_tail.prev.next = new_node
    @dummy_tail.prev = new_node
end 
```
## insert_at
Inserts a new node in the middle of the list.
```rb
# 1-based index
def insertAt(position, value)
    new_node = Node.new(value)
    curr = @dummy_head

    (position-1).times do 
        curr = curr.next
    end 

    new_node.next = curr.next 
    curr.next = new_node
end 
```

---

# Delete Operations
## pop_front
Removes the first element from the list.
```rb
def pop_front
    return if self.empty?

    data = @dummy_head.next.data 
    @dummy_head.next = @dummy_head.next.next
    data
end
```

## pop_back
Removes the last element from the list.
```rb
def pop_back
    return if self.empty?

    data = @dummy_tail.prev.data
    @dummy_tail.prev.prev.next = @dummy_tail
    @dummy_tail.prev = @dummy_tail.prev.prev
    data
end
```

## delete_at
Removes a node in the middle of the list.
```rb
# 1-based index
def deleteAt(position)
    curr = @dummy_head
    
    (position-1).times do
        curr = curr.next 
    end 

    data = curr.next.data
    curr.next = curr.next.next
    data
end
```
