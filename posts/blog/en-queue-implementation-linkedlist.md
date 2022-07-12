---
title: "Implement a Queue using a Linked List"
date: "2022-07-12 21:00:00"
tags:
  - queue
  - linked list
lang: en
---

We're going to implement following functions with a linked list:
- **enqueue(data)** - add an element to the end of the Queue.
- **dequeue** - remove an element from the front of the Queue.
- **front** - check the front element in the queue without removing it.
- **rear** - Check the last element in the queue without removing it.
- **empty?** - check if the stack is empty.

# Implementation
Click [here](https://github.com/bleuinu/DataStructures-and-Algorithms/blob/main/04-queue/queue-linkedlist/ruby/main.rb) to view the entire source code.

## Node class

Here's a `Node` class.
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

It's a simple class with a constructor only that initializes the node with a passed data.

## Queue Class
Here's a skeleton of the `Queue` class.
```rb
class Queue 
    def initialize 
        @front = nil
        @rear = nil
    end 

    # add new data to the back of the queue
    def enqueue(data)
    end 

    # remove a data from the front of the queue
    def dequeue
    end 

    # check the first data in the queue
    def front
    end 

    # check the last data in the queue
    def rear
    end

    # check if queue is empty
    def empty?
    end
end
```

I'll go through each methods with a pseudocode.

### enqueue
There are two cases to consider when adding a data to the queue: 
1. a queue is empty
2. a queue contains 1 or more nodes

When queue is empty, we simply assign a new node to both `front` and `rear` node.
```text
if queue.empty == TRUE
    front = new node
    rear = front
end
```

If queue is not empty, we use `rear` node to track the last node and let its next node be the new node. And we'll need to update our `rear`.
```text
if queue.empty == FALSE
    rear.next = new node
    rear = rear.next
end
```

Here's what `enqueue` looks like in visual:

![Enqueue steps](/images/posts/implement-queue-linkedlist/enqueue.png)

Time complexity for `enqueue` is constant, O(1).

### dequeue

We simply move `front` to `front.next` if exists.

```text
if queue.empty == FALSE
    data = front.data
    front = front.next
    return data
end
```

Time complexity of `dequeue` is constant, O(1).

### front & rear & empty?
Rest of these methods are trivial.

`front` method:
```text
if queue.empty == FALSE
    return front.data
end
```

`rear` method:
```text
if queue.empty == FALSE
    return rear.data
end
```

`empty?` method:
```text
return front == nil
```

---

See also:
- [What is a Queue?](./what-is-a-queue)

Link:
- [Ruby source code](https://github.com/bleuinu/DataStructures-and-Algorithms/blob/main/04-queue/queue-linkedlist/ruby/main.rb)
- [C source code](https://github.com/bleuinu/DataStructures-and-Algorithms/blob/main/04-queue/queue-linkedlist/c/main.c)