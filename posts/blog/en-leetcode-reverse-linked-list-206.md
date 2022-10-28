---
title: '0206. Reverse Linked List'
posttitle: 'Leetcode #0206'
postsubtitle: 'Reverse Linked List'
date: '2022-10-26 22:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

# 0206. Reverse Linked List

https://leetcode.com/problems/reverse-linked-list/

## Problem Statement

Given the `head` of a singly linked list, reverse the list, and return _the reversed list_.

**Example 1:**
![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

```text
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Example 2:**
![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)

```text
Input: head = [1,2]
Output: [2,1]
```

**Example 3:**

```text
Input: head = []
Output: []
```

## Approach

![[ReverseIter.jpg]](/public/images/posts/leetcode/206/rev-iter.jpg)

## TypeScript

### Iterative

```ts
function reverseList(head: ListNode | null): ListNode | null {
  if (!head || null === head.next) return head;

  let prev: ListNode = null;
  let curr: ListNode = null;

  while (head) {
    curr = head.next;
    head.next = prev;
    prev = head;
    head = curr;
  }

  return prev;
}
```

- Time complexity: **O(N)**
- Space complexity: **O(1)**

### Recursive

ref: [@roy6234leetcode](https://leetcode.com/problems/reverse-linked-list/discuss/869957/Javascript-Iterative-and-Recursive-solution)

```ts
var reverseList = function (head) {
  // base case
  if (head == null || head.next == null) {
    return head;
  }
  // go all the way to the end
  let reversedListHead = reverseList(head.next);
  // add reverse myself
  head.next.next = head;
  head.next = null;
  // go up
  return reversedListHead;
};
```

- Time complexity: **O(N)**
- Space complexity: **O(N)** if counting stack frames

### ES6 code

ref: [@roy6234leetcode](https://leetcode.com/problems/reverse-linked-list/discuss/869957/Javascript-Iterative-and-Recursive-solution)

```ts
var reverseList = function (head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};
```

- Time complexity: **O(N)**
- Space complexity: **O(1)**
