---
title: '0021. Merge Two Sorted Lists'
posttitle: 'Leetcode #0021'
postsubtitle: 'Merge Two Sorted Lists'
date: '2022-10-19 17:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 21. Merge Two Sorted Lists

https://leetcode.com/problems/merge-two-sorted-lists/

## Problem Statement

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return _the head of the merged linked list_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

```ex
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Example 2:**

```ex
Input: list1 = [], list2 = []
Output: []
```

**Example 3:**

```ex
Input: list1 = [], list2 = [0]
Output: [0]
```

## Approach

- Compare two values from the list until one of the them reaches the NULL
- Link a node with the smaller value to the new list
- After the iteration, link rest of the nodes to the end of the new list.

```text
mergeTwoLists(L1, L2) → ListNode | null
  Pre: L1 and L2 are the list we're going to merge
  Post: L1 and L2 is merged into one list sorted in ascending order

  current ← new Node(0)
  WHILE L1 and L2
    IF L1.value < L2.value
      current.next ← L1
      L1           ← L1.next
    ELSE
      current.next ← L2
      L2           ← L2.next
    END IF

    current ← current.next
  END WHILE

  IF L1
    current.next ← L1
  END IF

  IF L2
    current.next ← L2
  END IF
END
```

## TypeScript

### Solution 1

```ts
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  let head: ListNode = new ListNode(0);
  let curr = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      curr.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list1) curr.next = list1;
  if (list2) curr.next = list2;

  return head.next;
}
```

- Time Complexity: **O(N + M)**
- Space Complexity: **O(N + M)**

### Solution 2

Using less space.

```ts
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  let head: ListNode = new ListNode(0);
  let curr = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list1) curr.next = list1;
  if (list2) curr.next = list2;

  return head.next;
}
```

- Time Complexity: **O(N + M)**
- Space Complexity: **O(1)**
