---
title: 'Circular Queue: Linked List'
posttitle: 'Circular Queue'
postsubtitle: 'Linked List Implementation'
date: '2022-07-16 09:00:00'
tags:
  - circular queue
  - linked list
lang: en
about: ds
---

If you want to review about what Circular Queue is, read [this post](./what-is-a-circular-queue).

---

A circular queue is simply a [queue](./what-is-a-queue) with an extra feature: last node is connected to the first node.

Only difference is on `enqueue` and `dequeue`.

## enqueue

We need to make sure that the last node `@rear` is always pointing to the `@front` unless the list is empty.

```rb
def enqueue(data)
    if self.empty?
        @front = Node.new(data)
        @rear = @front
        @front.next = @rear
    else
        node = Node.new(data)
        node.next = @rear.next
        @rear.next = Node.new(data)
        @rear = @rear.next
    end
end
```

We're using a singly linked list here, but for the case of doubly linked list, `@front.prev` will point to the `@rear` as well.

## dequeue

If `@front == @rear` this means we only have a single data in the list. So we're going to reset our nodes by setting it to `nil`.

```ruby
if @front == @rear
    @front = @rear = nil
end
```

Else, we move the `@front` node to its next node.

```rb
else
    @front = @front.next
end
```

Put everything together, we get:

```rb
def dequeue
    item = @front.data

    if @front == @rear
        @front = @rear = nil
    else
        @front = @front.next
    end

    item
end
```

Click [here](https://github.com/rolemadelen/DataStructures-and-Algorithms/blob/main/04-queue/circular-queue-linkedlist/ruby/main.rb) to view the entire source code.

## Time Complexity

Both `enqueue` and `dequeue` operations are performed in constant time, O(1).

---

See also:

- [Queue - Linked List Implementation](./queue-implementation-linkedlist)
- [Stack - Linked List Implementation](./stack-implementation-linkedlist)
