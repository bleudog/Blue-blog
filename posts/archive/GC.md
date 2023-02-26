---
title: 'Circular Queue: Linked List Implementation'
posttitle: 'Circular Queue: Linked List Implementation'
date: '2022-07-16 09:00:00'
updated: '2022-11-03 16:20:00'
uid: 'GC'
---

Circular Queue is an extended version of a regular queue where rear element is connected to the front element.

![Circular Queue](/images/posts/what-is-a-circular-queue/circular-queue2.svg)

When implementing a circular queue with a linked list, it can be implemented either with a singly or doubly linked list.

|      | enqueue | dequeue | empty | front | rear |
| :--: | :-----: | :-----: | :---: | :---: | :--: |
| Time |  O(1)   |  O(1)   | O(1)  | O(1)  | O(1) |

## Pseudocode for Basic Operations

Click [here](https://github.com/bprsstnt/typescript-algorithms/blob/main/src/data-structures/circular-queue/CircularQueue.ts) to view the full source code of linked list circular queue written in TypeScript.

### enqueue

```text
enqueue(queue<T>, front, rear, value) → void
    Pre: queue is the queue array
         front references the first node in the queue
         rear references the last node in the queue
         value is the value we're going to enqueue
    Post: new element is added to the queue

    n ← new Node(value)

    IF (front == ø)
        front      ← n
        rear       ← n
        front.next ← rear
        rear.next  ← front
    ELSE
        n.next    ← front
        rear.next ← n
        rear      ← n
    END IF
END
```

### dequeue

```text
dequeue(queue<T>, front, rear) → Node<T>
    Pre: queue is the queue array
         front references the first node in the queue
         rear references the last node in the queue
    Post: front element has been removed from the queue

    elem      ← front
    front     ← front.next
    rear.next ← front
    return elem
END
```

### empty

```text
empty(queue<T>, front) → boolean
    Pre: queue is the queue array
         front references the first node in the queue
    Post: returns true if queue is empty; otherwise false;

    return front == ø
END
```

## See also

-   [Circular Queue - Array](./circular-queue-array)
