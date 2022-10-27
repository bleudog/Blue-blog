---
title: '0141. Linked List Cycle'
posttitle: 'Leetcode #0141'
postsubtitle: 'Linked List Cycle'
date: '2022-10-27 17:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

# 141. Linked List Cycle

https://leetcode.com/problems/linked-list-cycle

## Problem Statement

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter**.

Return `true` _if there is a cycle in the linked list_. Otherwise, return `false`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

```text
Input: head = [3,2,0,-4], pos = 1
Output: true

Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

## Approach

I used _Floyd's Tortoise and Hare_ algorithm.

- `Tortoise → slow pointer`, moves one node at a time.
- `Hare → fast pointer`, moves twice faster than the `Tortoise`.

If there is a cycle, two pointers will intersect eventually. So all I need to do is wait until the hare catches up to the tortoise and return `true` or `false` when one of the node reaches `null`.

## Code

```ts
function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  let hare = head;
  let tort = head;

  while (hare && hare.next && tort) {
    hare = hare.next.next;
    tort = tort.next;

    if (tort == hare) {
      return true;
    }
  }

  return false;
}
```

## Complexity

Time complexity is linear, $O(N)$.[^1]

[^1]: https://stackoverflow.com/questions/47193225/runtime-complexity-of-floyds-cycle-detection
