---
title: 'Queue: Array'
posttitle: 'Queue'
postsubtitle: 'Part 01: Array Implementation'
date: '2022-07-10 22:00:00'
updated: '2022-11-10 09:00:00'
tags:
  - queue
  - data structure
lang: en
about: dev
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

## Problems

Queue related problems selected from [Leetcode](https://leetcode.com/tag/queue/).

|       #       | Problem                                | Difficulty |
| :-----------: | :------------------------------------- | :--------- |
|  [225][i225]  | Implement Stack using Queues           | Easy       |
|  [933][i933]  | Number of Recent Calls                 | Easy       |
| [1700][i1700] | Number of Students Unable to Eat Lunch | Easy       |
|  [950][i950]  | Reveal Cards In Increasing Order       | Medium     |
| [1670][i1670] | Design Front Middle Back Queue         | Medium     |
| [1823][i1823] | Find the Winner of the Circular Game   | Medium     |
| [2327][i2327] | Number of People Aware of a Secret     | Medium     |
|  [239][i239]  | Sliding Window Maximum                 | Hard       |
|  [936][i936]  | Stamping The Sequence                  | Hard       |
| [2444][i2444] | Count Subarrays With Fixed Bounds      | Hard       |

[i225]: https://leetcode.com/problems/implement-stack-using-queues/
[i933]: https://leetcode.com/problems/number-of-recent-calls/
[i1700]: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
[i950]: https://leetcode.com/problems/reveal-cards-in-increasing-order/
[i1670]: https://leetcode.com/problems/design-front-middle-back-queue/
[i1823]: https://leetcode.com/problems/find-the-winner-of-the-circular-game/
[i2327]: https://leetcode.com/problems/number-of-people-aware-of-a-secret/
[i239]: https://leetcode.com/problems/sliding-window-maximum/
[i936]: https://leetcode.com/problems/stamping-the-sequence/
[i2444]: https://leetcode.com/problems/count-subarrays-with-fixed-bounds/

## See also

- [Queue - Linked List](./queue-linked-list)
- [Double Ended Queue (Deque)](./double-ended-queue)
