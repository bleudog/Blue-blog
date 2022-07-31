---
title: "Singly Linked List?"
date: "2022-07-31 15:50:00"
tags: 
  - linked list
lang: en
about: ds
---

# What is a Singly Linked List?
Singly Linked List is a unidirectional linked list that only one-way traversing is allowed. Each node contains a data and a pointer to reference the next node.

![Singly Linked List](/images/posts/linked-list/singly-linked-list.svg)

Here's a structure of node implemented in Ruby:
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

I'm using a dummy head in my implementation. By doing this, I don't have to worry about performing operations on a `nil` or an empty list.
```rb
class SinglyLinkedList
    def initialize 
        @dummy_head = Node.new(0)
    end 
end
```

# Insert Operations
## push_front
Inserts a new node at the beginning of the list.
```rb
def push_front(value)
    new_node = Node.new(value)
    new_node.next = @dummy_head.next
    @dummy_head.next = new_node
end 
```

## push_back
Inserts a new node at the end of the list.
```rb
def push_back(value)
    curr = @dummy_head
    while curr.next != nil 
        curr = curr.next 
    end 
    curr.next = Node.new(value)
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
    return pop_front if self.size == 1

    curr = @dummy_head.next
    while curr.next.next 
        curr = curr.next 
    end 

    data = curr.next.data
    curr.next = nil 
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
