---
title: "What is a Queue?"
date: "2022-07-10 22:00:00"
tags: 
  - queue
  - data structure
lang: en
---

# Queue

Queue is a linear data structure that follows the principle of FIFO (First-In, First-Out), which means the item that goes in first is the item that comes out first.

![Queue](/images/posts/what-is-a-queue/queue.svg)

Imagine you're trying to print documents `A`, `B` and `C` from a single printer. If the document `A` was the first one in the queue, it will be printed first. Not `B` nor `C`. 

Simply you can think of a Queue data structure as a "first-come, first-serve" type structure.

In programming, the term **enqueue** refers to adding an item to the queue and **dequeue** for removing an item from the queue.

# Basic Operations of Queue (Array-based)
## enqueue
Add an element to the end of the queue.

```rb
def enqueue(item)
    if self.full?
        puts "Queue is full.."
        return
    elsif self.empty?
        @head = 0
        @tail = 0
    end

    @arr[@tail] = item
    @tail += 1
end
```

## dequeue
Remove an element from the front of the queue.

```rb
def dequeue
    if self.empty?
        puts "Queue is empty..."
        @head = -1
        @tail = -1
        return
    end

    item = @arr[@head]
    @head += 1
    item
end 
```

## isEmpty
Check if the queue is empty.
```rb
def empty?
    (@head == -1 && @tail == -1) or (@head == @tail)
end
```

## isFull
Check if the queue is full.

```rb
def full?
    @tail == @SIZE-1
end
```

## front
Get the value at the front of the queue without removing it.
```rb
def front
    if !self.empty?
        @arr[@head]
    end
end
```

# Time Complexity
The complexity of `enqueue` and `dequeue` operations in a queue using an array is `O(1)`.

---

# Limitations of Queue (Array-based)
Imagine we have a full sized queue like the below:
![Limitations of Queue 1](/images/posts/what-is-a-queue/queue2.svg)

Problem occurs when we dequeue an item from the queue. The `front` index increases every time we dequeue an item and we end up
losing the access to all spaces before the `front` index.

![Limitations of Queue 2](/images/posts/what-is-a-queue/queue3.svg)

We can solve this issue by letting the `rear` index circulate through the queue when it reaches the last index. 


![Circular Queue](/images/posts/what-is-a-queue/circular-queue.svg)

This type of queue is called **Circular Queue**.

# Applications of Queue
- CPU scheduling.
- Disk Scheduling.
- Handling of interrupts in real-time-systems.
- Call center phone systems use queues to hold people calling them in order.

---

See also:
- [What is a Circular Queue?](./what-is-a-circular-queue)
- [Queue related problems from BOJ and Leetcode](https://github.com/bleuinu/DataStructures-and-Algorithms/tree/main/04-queue)

Reference:
- [https://www.programiz.com/dsa/queue](https://www.programiz.com/dsa/queue)