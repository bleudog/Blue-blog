---
title: 'Circular Queue: Array'
posttitle: 'Circular Queue'
postsubtitle: 'Part 01: Array Implementation'
date: '2022-07-12 07:50:00'
tags:
  - circular queue
  - data structure
lang: en
about: ds
---

## Circular Queue

Circular Queue is an extended version of a regular queue where last element is connected to the first element.

![Circular Queue](/images/posts/what-is-a-circular-queue/circular-queue2.svg)

After number of enqueuing and dequeuing items in a regular queue, you end up with non-usable spaces in the front like the figure below.
![limitations of a regular queue](/images/posts/what-is-a-queue/queue3.svg)

Circular Queue lets you re-use those spaces by circulating back to the beginning when of the queue is reached.

![Circular Queue](/images/posts/what-is-a-queue/circular-queue.svg)

## Circular Increment

Circular queue works by the process of circular increment. As we enqueue data, we increase the index of `rear` by `1`.
We use modulo division to keep the index within the size of the queue.

```rb
rear = (rear + 1) % SIZE;
```

or we can simply set it to `0` when end is reached:

```rb
if rear + 1 == SIZE
	rear = 0
end

# or depending on your implementation

if rear == SIZE
	read = 0
end
```

In the case of a linked list, we don't have an index. Instead, we can check if `rear.next` is `front`.

```rb
if rear.next == front
	puts "Last node!"
else
    rear = rear.next
end
```

## Operations of Circular Queue

### enqueue

Add an element to the end of the queue.

```rb
def enqueue(item)
    if self.full?
        puts "Queue is full.."
        return
    elsif self.empty?
        @front = 0
    end

    @rear = (@rear + 1) % @SIZE;
    @arr[@rear] = item
end
```

### dequeue

Remove an element from the front of the queue.

```rb
def dequeue
    if self.empty?
        puts "Queue is empty..."
        return
    end

    item = @arr[@front]
    if @front == @rear
        @front = -1
        @rear = -1
    else
        @front += 1
    end

    item
end
```

### isEmpty

Check if the queue is empty.

```rb
def empty?
    (@front == -1 && @rear == -1)
end
```

### isFull

Check if the queue is full.

```rb
def full?
    (@front == 0 and @rear == @SIZE-1) or (@front == @rear + 1)
end
```

### front

Get the value at the front of the queue without removing it.

```rb
def front
    if !self.empty?
        @arr[@front]
    end
end
```

## Time Complexity

The complexity of `enqueue` and `dequeue` operations in a circular queue using an array is `O(1)`.

## Problems

Queue related problems selected from [Leetcode](https://leetcode.com/tag/queue/).

|       #       | Problem                                | Difficulty |
| :-----------: | :------------------------------------- | :--------- |
|  [225][i225]  | Implement Stack using Queues           | Easy       |
|  [933][i933]  | Number of Recent Calls                 | Easy       |
| [1700][i1700] | Number of Students Unable to Eat Lunch | Easy       |
|  [622][i622]  | Design Circular Queue                  | Medium     |
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
[i622]: https://leetcode.com/problems/design-circular-queue
[i950]: https://leetcode.com/problems/reveal-cards-in-increasing-order/
[i1670]: https://leetcode.com/problems/design-front-middle-back-queue/
[i1823]: https://leetcode.com/problems/find-the-winner-of-the-circular-game/
[i2327]: https://leetcode.com/problems/number-of-people-aware-of-a-secret/
[i239]: https://leetcode.com/problems/sliding-window-maximum/
[i936]: https://leetcode.com/problems/stamping-the-sequence/
[i2444]: https://leetcode.com/problems/count-subarrays-with-fixed-bounds/

---

See also:

- [Circular Queue - Linked List](./circular-queue-linked-list)

Reference:

- [https://www.programiz.com/dsa/circular-queue](https://www.programiz.com/dsa/circular-queue)
