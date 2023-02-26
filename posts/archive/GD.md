---
title: 'Double Ended Queue'
posttitle: 'Double Ended Queue'
date: '2022-11-10 09:00:00'
uid: 'GD'
---

Deque or Double Ended Queue is a type of queue in which insertion and removal of elements can either be performed from the front or the rear. Thus, it does not follow FIFO rule (First In First Out).

[![deque](https://cdn.programiz.com/sites/tutorial2program/files/deque.png)](https://www.programiz.com/dsa/deque)

## Pseudocode for Basic Operations

Click [here](https://github.com/bprsstnt/typescript-algorithms/blob/main/src/data-structures/double-ended-queue/Deque.ts) to view the entire code of deque written in TypeScript.

### addFront

```text
addFront(front, rear, data)
    Pre: front is the front(first) node in the deque
         rear is the rear(last) node in the deque
         data is the new data we're going to add it to the deque
    Post: new data is added to the front of the deque

    n ← new Node(value)

    IF (front == ø)
        front      ← n
        rear       ← n
        front.next ← rear
        rear.prev  ← front
    ELSE
        n.next          ← front
        front.next      ← n
        front           ← n
    END IF
END addFront
```

### addRear

```text
addRear(front, rear, data)
    Pre: front is the front(first) node in the deque
         rear is the rear(last) node in the deque
         data is the new data we're going to add it to the deque
    Post: new data is added at the back of the deque

    n ← new Node(value)

    IF (rear == ø)
        front      ← n
        rear       ← n
        front.next ← rear
        rear.prev  ← front
    ELSE
        rear.next ← n
        n.prev    ← rear
        rear      ← n
    END IF
END addRear
```

### removeFront

```text
removeFront(front): Node | ø
    Pre: front is the front(first) node in the deque
    Post: a node has been removed from the deque

    elem       ← front
    front      ← front.next
    front.prev ← ø
    return elem
END removeFront
```

### removeRear

```text
removeRear(front, rear, data): Node | ø
    Pre: front is the front(first) node in the deque
         rear is the rear(last) node in the deque
         data is the new data we're going to add it to the deque
    Post: a node has been removed from the deque

    elem ← rear
    rear ← rear.prev
    return elem
END removeRear
```

### empty

```text
empty(front): boolean
    Pre: front is the front(first) node in the deque
    Post: returns true if deque is empty; otherwise false.

    return front == null
END empty
```

### getFront

```text
getFront(front): Node | ø
    Pre: front is the front(first) node in the deque
    Post: either ø or the front node has been returned

    return front
END getFront
```

### getRear

```text
getRear(rear): Node | ø
    Pre: rear is the rear(last) node in the deque
    Post: either ø or the rear node has been returned

    return rear
END getRear
```

## Time Complexity

Using doubly linked list, every operations can be done in constant time.

|      | addFront | addRear | removeFront | removeRear | empty |
| :--: | :------: | :-----: | :---------: | :--------: | :---: |
| Time |   O(1)   |  O(1)   |    O(1)     |    O(1)    | O(1)  |

If singly linked list is used, `removeRear` will be linear, O(N).

## Problems

Queue related problems selected from [Leetcode](https://leetcode.com/tag/queue/).

|       #       | Problem                                | Difficulty |
| :-----------: | :------------------------------------- | :--------- |
|  [225][i225]  | Implement Stack using Queues           | Easy       |
|  [933][i933]  | Number of Recent Calls                 | Easy       |
| [1700][i1700] | Number of Students Unable to Eat Lunch | Easy       |
|  [641][i641]  | Design Circular Deque                  | Medium     |
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
[i641]: https://leetcode.com/problems/design-circular-deque
[i950]: https://leetcode.com/problems/reveal-cards-in-increasing-order/
[i1670]: https://leetcode.com/problems/design-front-middle-back-queue/
[i1823]: https://leetcode.com/problems/find-the-winner-of-the-circular-game/
[i2327]: https://leetcode.com/problems/number-of-people-aware-of-a-secret/
[i239]: https://leetcode.com/problems/sliding-window-maximum/
[i936]: https://leetcode.com/problems/stamping-the-sequence/
[i2444]: https://leetcode.com/problems/count-subarrays-with-fixed-bounds/

## See also

-   [Queue - Array](./queue-array)
-   [Queue - Linked List](./queue-linked-list)
