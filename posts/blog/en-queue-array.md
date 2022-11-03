---
title: 'Queue: Array'
posttitle: 'Queue'
postsubtitle: 'Part 01: Array Implementation'
date: '2022-07-10 22:00:00'
updated: '2022-11-03 10:00:00'
tags:
  - queue
  - data structure
lang: en
about: ds
---

Queue is a linear data structure that follows a particular order (First-In, First-Out) in which operations are performed.

![Queue](/images/posts/what-is-a-queue/queue.svg)

In programming, the term **enqueue** refers to adding an item to the queue and **dequeue** for removing an item from the queue.

## Pseudocode for Basic Operations

Click [here](https://github.com/rolemadelen/typescript-algorithms/blob/main/src/data-structures/queue-array/QueueArray.ts) to view the entire code of array queue written in TypeScript.

### enqueue

```text
push(queue<T>, front, rear, value) → void
    Pre: queue is the queue array
         rear index tracks the most recently added element (last element in queue array)
         front index tracks the first element
         value is the value we're going to enqueue
    Post: new element is added to the queue

    queue[rear++] ← value
END
```

### dequeue

```text
dequeue(queue<T>, front, rear) → T
    Pre: queue is the queue array
         rear index tracks the most recently added element (last element in queue array)
         front index tracks the first element
    Post: front element has been removed from the queue

    elem ← queue[front++];
    return elem
END
```

### empty

```text
empty(queue<T>, front, rear) → boolean
    Pre: queue is the queue array
         rear index tracks the most recently added element (last element in queue array)
         front index tracks the first element
    Post: returns true if queue is empty; otherwise false;

    return front == rear
END
```

### full

```text
full(queue<T>, size, rear) → boolean
    Pre: queue is the queue array
         size is the array size
         rear index tracks the most recently added element (last element in queue array)
    Post: returns true if queue is empty; otherwise false;

    return rear == size
END
```

## Time Complexity

|      | enqueue | dequeue | empty | full |
| :--: | :-----: | :-----: | :---: | :--: |
| Time |  O(1)   |  O(1)   | O(1)  | O(1) |

## Limitations of Array Queue

Imagine we have a fully occupied queue:
![Limitations of Queue 1](/images/posts/what-is-a-queue/queue2.svg)

Problem occurs when we dequeue an item from the queue. The `front` index increases every time we dequeue an item and we lose the access to all spaces before `front` index.

![Limitations of Queue 2](/images/posts/what-is-a-queue/queue3.svg)

We can solve this issue by letting the `rear` index circulate through the queue when it reaches the last index.

![Circular Queue](/images/posts/what-is-a-queue/circular-queue.svg)

This type of queue is called **Circular Queue**.

## Applications of Queue

- CPU scheduling.
- Disk Scheduling.
- Handling of interrupts in real-time-systems.
- Call center phone systems use queues to hold people calling them in order.
