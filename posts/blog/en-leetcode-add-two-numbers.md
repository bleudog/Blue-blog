---
title: '0002. Add Two Numbers'
posttitle: 'Leetcode #0002'
postsubtitle: 'Add Two Numbers'
date: '2022-09-23 07:00:00'
tags:
  - leetcode
  - top interview questions
  - medium
lang: en
about: cp
---

## 0002. Add Two Numbers

[https://leetcode.com/problems/add-two-numbers/](https://leetcode.com/problems/add-two-numbers/)

## Problem Statement

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

```text
Input: l1 = [0], l2 = [0]
Output: [0]
```

**Example 2:**

```text
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

## Code

### Solution 1

```cpp
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *dummy = new ListNode(0);
        ListNode *curr = dummy;

        int carry = 0;
        while(l1 && l2) {
            int val = l1->val + l2->val + carry;
            carry = val > 9;
            val %= 10;
            curr->next = new ListNode(val);
            l1 = l1->next;
            l2 = l2->next;
            curr = curr->next;
        }

        while(l1) {
            int val = l1->val + carry;
            carry = val > 9;
            val %= 10;
            curr->next = new ListNode(val);
            l1 = l1->next;
            curr = curr->next;
        }

        while(l2) {
            int val = l2->val + carry;
            carry = val > 9;
            val %= 10;
            curr->next = new ListNode(val);
            l2 = l2->next;
            curr = curr->next;
        }

        if(carry) curr->next = new ListNode(1);

        return dummy->next;
    }
};
```

- Time Complexity: **O(N + M)**, where `N = l1.length` & `M = l2.length`
- Space Complexity: **O(L)**, where `L = l1.length + l2.length`

### Solution 2

```cpp
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *dummy = new ListNode(0);
        ListNode *curr = dummy;
        int carry = 0;

        while(l1 || l2 || carry) {
            int x = (l1) ? l1->val : 0;
            int y = (l2) ? l2->val : 0;
            int val = x + y + carry;
            carry = val > 9;

            curr->next = new ListNode(val%10);

            if(l1) l1 = l1->next;
            if(l2) l2 = l2->next;
            curr = curr->next;
        }

        return dummy->next;
    }
};
```
