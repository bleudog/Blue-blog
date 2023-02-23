---
title: 'Queue: Linked List'
posttitle: 'Queue'
postsubtitle: 'Part 02: Linked List Implementation'
date: '2022-07-12 21:00:00'
updated: '2022-11-10 09:00:00'
tags:
  - queue
  - linked list
lang: en
about: dev
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

- [Queue - Array](./queue-array)
- [Double Ended Queue (Deque)](./double-ended-queue)
