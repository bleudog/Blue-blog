---
title: '0094. Binary Tree Inorder Traversal'
posttitle: 'Leetcode #0094'
postsubtitle: 'Binary Tree Inorder Traversal'
date: '2022-10-23 20:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 0094. Binary Tree Inorder Traversal

https://leetcode.com/problems/binary-tree-inorder-traversal/

## Problem Statement

Given the `root` of a binary tree, return _the inorder traversal of its nodes' values_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

```text
Input: root = [1,null,2,3]
Output: [1,3,2]
```

**Example 2:**

```text
Input: root = []
Output: []
```

**Example 3:**

```text
Input: root = [1]
Output: [1]
```

## Approach

We can implement inorder traversal using recursion.

```text
inorder(node) → Node
    Pre: node is any arbitrary node in the list
    Post: we have traversed the list in inorder

    IF (node == Ø)
        return
    END IF

    inorder(node.left)
    print node.value
    inorder(node.right)
END
```

## TypeScript

```ts
function inorder(root: TreeNode | null, res: number[]): number[] {
  if (!root) return res;

  res = inorder(root.left, res);
  res.push(root.val);
  res = inorder(root.right, res);

  return res;
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  let res: number[] = inorder(root, []);

  return res;
}
```

- Time Complexity: **O(N)**
- Space Complexity: **O(N)**

### Another solution

```ts
function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];

  const inorder = (node: TreeNode) => {
    node.left && inorder(node.left);
    res.push(node.val);
    node.right && inorder(node.right);
  };

  inorder(root);

  return res;
}
```

- Time Complexity: **O(N)**
- Space Complexity: **O(N)**
