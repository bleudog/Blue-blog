---
title: '0101. Symmetric Tree'
posttitle: 'Leetcode #0101'
postsubtitle: 'Symmetric Tree'
date: '2022-09-17 11:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 0101. Symmetric Tree

https://leetcode.com/problems/symmetric-tree/

## Problem Statement

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

**Example 1:**

![Tree](https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg)

```text
Input: root = [1,2,2,3,4,4,3]
Output: true
```

## Approach

I used BFS to scan the tree in level order and checked if two nodes are same or not.
Be careful with the order of nodes you're enqueuing.

```cpp
q.push(left_child->left);
q.push(right_child->right);
q.push(left_child->right);
q.push(right_child->left);
```

If you mess up the order, you wont be able to pop 2 nodes that you really want.

## Code

### C++

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        if (!root) return true;

        queue<TreeNode *> q;
        q.push(root->left);
        q.push(root->right);

        while (!q.empty()) {
            TreeNode *left = q.front();
            q.pop();
            TreeNode *right = q.front();
            q.pop();

            if (!left && right) return false;
            if (left && !right) return false;
            if (left && right) {
                if (left->val != right->val) return false;
                q.push(left->left);
                q.push(right->right);
                q.push(left->right);
                q.push(right->left);
            }
        }

        return true;
    }
};
```

- Time Complexity
  - When a tree is symmetrical, we'll be checking every nodes in the queue. Therefore, the worst time complexity is going to be **O(V)**, `V` = number of nodes or vertices.
- Space Complexity
  - As we visit each node, we'll be enqueuing all child nodes to the queue. So, the worst space complexity will be **O(V)** where `V` = number of nodes or vertices.
