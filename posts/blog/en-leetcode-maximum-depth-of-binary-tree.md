---
title: '0104. Maximum Depth of Binary Tree'
posttitle: 'Leetcode #0104'
postsubtitle: 'Maximum Depth of Binary Tree'
date: '2022-09-17 11:20:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

https://leetcode.com/problems/maximum-depth-of-binary-tree/

## Problem Statement

Given the `root` of a binary tree, return its maximum depth.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Example 1:**
![Tree](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

```text
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

**Example 2:**

```text
Input: root = [1,null,2]
Output: 2
```

## Code

### Method 1: DFS

```cpp
class Solution {
public:
    int maxDepth(TreeNode* root) {
        return root == nullptr ? 0 : max(maxDepth(root->left), maxDepth(root->right)) + 1;
    }
};
```

### Method 2: BFS

```cpp
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if (!root) return 0;

        queue<TreeNode *> q;
        q.push(root);

        int depth = 0;

        while (!q.empty()) {
            ++depth;

            for (int i=0, n=q.size(); i<n; ++i) {
                TreeNode *node = q.front();
                q.pop();

                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }
        }

        return depth;
    }
};
```
