---
title: '0021. Merge Two Sorted Lists'
posttitle: 'Leetcode #0021'
postsubtitle: 'Merge Two Sorted Lists'
date: '2022-10-18 07:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 21. Merge Two Sorted Lists

https://leetcode.com/problems/merge-two-sorted-lists/

## Approach

- 두 리스트 중 하나가 `null`에 도달할 때까지 두 값을 비교.
- 둘 중 작은 값을 가진 노드를 `head.next`에 연결.
- 순회가 끝나면 `list1` 혹은 `list2`에 노드가 남아있는지 확인하고, 나머지를 그대로 `head` 맨뒤에 연결해준다.

## TypeScript

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

Modified the code to use less space.

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

## Complexity

`list1`의 노드의 개수가 `N`, `list2`의 크기가 `M`이라고 할 때, 시간복잡도는 O(min(N, M))이 된다.
