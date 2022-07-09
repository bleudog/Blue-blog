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
Click [here](https://github.com/bleuinu/DataStructures-and-Algorithms/blob/main/03-stack/stack-linkedlist/ruby/main.rb) to view the entire source code.

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
Here's the skeleton of our `Stack` class.
```rb
class Stack 
    def initialize 
        @top = nil
    end 

    def push(data)
    end 

    def pop
    end 

    def peek
    end 

    def empty?
    end
end
```

Let's go through each methods.

### push

There are two cases to consider when pushing an item to the stack:
1) is stack empty?
2) is it not?

If stack is empty, we simply create a new node and assign it to `top`:
```text
if stack is empty
    top = new node(data)
end
```

If stack is NOT empty, we first create a new node and let it point to current `top` node. Then, we re-assign our `top` with the newly created node:
```text
if stack is not empty
    newNode = new node(data)
    newNode.next = top
    top = newNode
end
```

Here's the actual code:
```rb
def push(data)
    if self.empty?
        @top = Node.new(data)
    else
        temp = Node.new(data)
        temp.next = @top
        @top = temp
    end
end 
```

Time complexity for `push` is constant, O(1).

### pop
Since first node of the list represents the top of the stack, we don't need to navigate through the end of the list.

We let the top node points to the next element in the list if exists:
```text
if stack is not empty
    data = top.data
    top = top.next
    ret data
end
```

Here's the code.

```rb
 def pop 
    if !self.empty?
        data = @top.data
        temp = @top
        @top = @top.next
        temp = nil
        return data
    end
end 
```

Time complexity of `pop` is constant, O(1).

### peek
Return the top element if stack is not empty:
```rb
def peek 
    if !self.empty?
        return @top.data
    end 
end 
```
### empty?
If stack is empty, our top node will point nothing. Hence, it'll be `nil`. We can use this to check if the stack is empty or not.

```rb
def empty?
    @top == nil
end 
```

---

See also:
- [What is a Stack?](./what-is-a-stack)

Link:

- [C implementation](https://github.com/bleuinu/DataStructures-and-Algorithms/tree/main/03-stack/stack-linkedlist)
- [Stack related problems from BOJ and Leetcode](https://github.com/bleuinu/DataStructures-and-Algorithms/tree/main/03-stack)