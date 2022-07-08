---
title: "Implement a Stack using a Linked List"
date: "2022-07-09 07:30:00"
tags:
  - stack
  - linked list
lang: en
---

We're going to implement following functions using a linked list:
- **push(data)** - add an item to the top.
- **pop()** - remove an item from the top and return it.
- **peek()** - return the top item without removing it.
- **empty()** - check if the stack is empty.

# Implementation
## Node class

I first created a `Node` class. 

It's a bare minimum class that only has a constructor to initialize member variables.
```rb
class Node
    attr_accessor :next
    attr_reader   :data

    def initialize(data)
        @data = data
        @next = nil
    end
end
```

`attr_accessor` is Ruby way of creating a getter and setter methods. This will allow me to access and modify `next` member variable of `Node`.

Since I don't need to modify node's `data`, I used `attr_reader` to create the getter method only -- *you can use `attr_writer` for the setter*.

## Stack Class

```rb
class Stack 
    def initialize 
        @head = nil
    end 

    def push(data)
        if @head == nil
            @head = Node.new(data)
        else
            temp = Node.new(data)
            temp.next = @head
            @head = temp
        end
    end 

    def pop 
        if self.empty?
            puts "stack is empty..."
            return
        else
            data = @head.data
            temp = @head
            @head = @head.next
            temp = nil
            return data
        end
    end 

    def peek 
        if self.empty?
            puts "stack is empty..."
        else 
            return @head.data
        end 
    end 

    def empty?
        @head == nil
    end 
end
```

---

See also:
- [What is a Stack?](./what-is-a-stack)

Link:

- [C implementation](https://github.com/bleuinu/DataStructures-and-Algorithms/tree/main/03-stack/stack-linkedlist)
- [Stack related problems from BOJ and Leetcode](https://github.com/bleuinu/DataStructures-and-Algorithms/tree/main/03-stack)