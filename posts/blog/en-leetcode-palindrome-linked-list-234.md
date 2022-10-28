---
title: '0234. Palindrome Linked List'
posttitle: 'Leetcode #0234'
postsubtitle: 'Palindrome Linked List'
date: '2022-10-28 21:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

# 0234. Palindrome Linked List

https://leetcode.com/problems/palindrome-linked-list

## Problem Statement

Given the `head` of a singly linked list, return `true` _if it is a palindrome or_ `false` _otherwise_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg)

```text
Input: head = [1,2,2,1]
Output: true
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg)

```text
Input: head = [1,2]
Output: false
```

## Approach 1

I'm gonna use `slow` and `fast` pointer to find the mid-node of the list.

All nodes visited by `slow` pointer will be pushed to the stack. Once mid node is found, we'll iterate from the second-half and check top of the stack one by one and see if it matches with the second half.

```text
isPalindrome(head) → boolean
    Pre: head is the head node of the given list
    Post: We've determined whether the list is a palindrome or not

    slow  ← head
    fast  ← head
    cnt   ← 1
    stack ← Stack(slow)

    WHILE fast AND fast.next
        slow ← slow.next
        stack.PUSH(slow.val)
        fast ← fast.next
        cnt  ← cnt + 1

        IF NOT fast
            break
        END IF

        fast ← fast.next
        cnt  ← cnt + 1
    END WHILE

    IF cnt.EVEN
        stack.POP
    END IF

    fast ← slow.next

    WHILE stack NOT EMPTY
        tp ← stack.TOP

        IF tp NOT EQ fast.val
            RETURN false
        END IF
    END WHILE

    RETURN true
END
```

above pseudocode didn't worked actually but that's the general idea.

### TypeScript

```ts
function isPalindrome(head: ListNode | null): boolean {
  if (!head.next) return true;

  let slow = head;
  let fast = head;
  let cnt = 1;
  let stk: number[] = [head.val];

  while (fast && fast.next) {
    slow = slow.next;
    stk.push(slow.val);
    fast = fast.next;
    ++cnt;

    if (!fast || !fast.next) break;

    fast = fast.next;
    ++cnt;
  }

  stk.pop();
  if ((cnt & 1) === 1) {
    fast = slow.next;
  } else {
    fast = slow;
  }

  while (stk.length > 0) {
    let tp = stk.pop();
    if (tp !== fast.val) return false;
    fast = fast.next;
  }

  return true;
}
```

### Complexity

- Time complexity: **O(N)**
- Space complexity: O(N/2) → **O(N)**
