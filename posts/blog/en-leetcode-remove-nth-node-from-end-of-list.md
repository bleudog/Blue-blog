---
title: '0019. Remove Nth Node From End of List'
posttitle: 'Leetcode #0019'
postsubtitle: 'Remove Nth Node From End of List'
date: '2022-09-29 05:055:00'
tags:
  - leetcode
  - top interview questions
  - medium
lang: en
about: cp
---

# 0019. Remove Nth Node From End of List

[https://leetcode.com/problems/remove-nth-node-from-end-of-list/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

# Problem Statement

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

```text
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

---

**Example 2:**

```text
Input: head = [1], n = 1
Output: []
```

---

**Example 3:**

```text
Input: head = [1,2], n = 1
Output: [1]
```

# Approach

**Two Pass:**

Naive solution would be doing it in 2-pass. First, iterate the list to count number of nodes. Then during the 2nd pass, remove the `nth` node.

**One Pass:**

In order to solve it in 1-pass, we need to use two pointers `fast` and `slow`.

We first traverse the list using the `fast` node `n` times. Then, we traverse `fast` and `slow` nodes together until `fast` node becomes `null`. In 1-pass, we found the position of the node to be deleted. And all we have to do is set the current node to be the next node.

# Code

## 2-Pass

```cpp
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        if(!head || !(head->next)) return nullptr;

        int cnt = 0;
        ListNode *temp = head;
        while(temp) {
            ++cnt;
            temp = temp->next;
        }

        temp = head;
        if(cnt == n) {
            auto del = head;
            head = head->next;
            delete del;
            return head;
        }

        for(int i=0; i<cnt-n-1; ++i) {
            temp = temp->next;
        }

        auto del = temp->next;
        temp->next = temp->next->next;
        delete del;

        return head;
    }
};
```

## 1-Pass

```cpp
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode **slow = &head;
        ListNode *fast = head;

        while(n--) {
            fast = fast->next;
        }

        while(fast) {
            fast = fast->next;
            slow = &((*slow)->next);
        }

        ListNode *del = *slow;
        *slow = del->next;
        delete del;

        return head;
    }
};
```

# Complexity

For both algorithms, the worst time complexity is **O(N)**.
