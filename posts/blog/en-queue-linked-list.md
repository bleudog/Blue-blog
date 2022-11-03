---
title: 'Queue: Linked List'
posttitle: 'Queue'
postsubtitle: 'Part 02: Linked List Implementation'
date: '2022-07-12 21:00:00'
updated: '2022-11-03 10:30:00'
tags:
  - queue
  - linked list
lang: en
about: ds
---

Queue is a linear data structure that follows a particular order (First-In, First-Out) in which operations are performed.

## Pseudocode for Basic Operations

Click [here](https://github.com/rolemadelen/typescript-algorithms/blob/main/src/data-structures/queue-linked-list/QueueList.ts) to view the entire code of linked list queue written in TypeScript.

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
    ELSE
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

    elem  ← front
    front ← front.next
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

## Time Complexity

|      | enqueue | dequeue | empty |
| :--: | :-----: | :-----: | :---: |
| Time |  O(1)   |  O(1)   | O(1)  |
