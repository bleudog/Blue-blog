---
title: '0108. Convert Sorted Array to Binary Search Tree'
posttitle: 'Leetcode #0108'
postsubtitle: 'Convert Sorted Array to Binary Search Tree'
date: '2022-09-18 19:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

Link: [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

# Problem Statement

Given an integer array `nums` where the elements are sorted in **ascending order**, convert it to a **height-balanced** binary search tree.

A **height-balanced** binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

**Example 1:**
![Tree1](https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg)

```text
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
```

Explanation: [0,-10,5,null,-3,null,9] is also accepted:

![Tree2](https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg)

---

**Example 2:**
![Tree3](https://assets.leetcode.com/uploads/2021/02/18/btree.jpg)

```text
Input: nums = [1,3]
Output: [3,1]
```

Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

# Approach

I actually had no idea how to approach this problem. I had to look up solutions 🥲

I found two beautiful solutions: one is using a recursion and other is using a DFS.

The general idea is to find the middle node in every iteration or recursion and construct a subtree based on that middle node. Why middle node? to make our BST balanced (I think? I mean it makes sense, because if you grab a middle node for every subtree, your tree wont ever be skewed).

# Code

## C++

Recursion:

```cpp
class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return helper(nums, 0, nums.size() - 1);
    }

    TreeNode* helper(vector<int> &nums, int left, int right) {
        if (left > right) return nullptr;

        int mid = left + (right - left)/2;

        TreeNode *root = new TreeNode(nums[mid]);
        root->left = helper(nums, left, mid-1);
        root->right = helper(nums, mid+1, right);
        return root;
    }
};
```

DFS:

```cpp
// Reference: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/discuss/2406623/c-straightforward-iterative-bfs-and-dfs-and-recursive-solution

class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        typedef vector<int>::const_iterator Iter;
        stack<tuple<TreeNode**,  Iter, Iter>> st;

        TreeNode *ans = nullptr;
        st.push({&ans, cbegin(nums), cend(nums)});

        while(!empty(st)) {
            auto [nptr, b, e] = st.top();
            st.pop();

            if (b == e) continue;

            Iter mid = next(b, distance(b, e) >> 1);
            *nptr = new TreeNode(*mid);

            st.push({&(*nptr)->left, b, mid});
            st.push({&(*nptr)->right, mid + 1, e});
        }

        return ans;
    }
};
```

# Time Complexity

- Recursion: **O(n)**, `n` is number of nodes
- DFS: **O(n)**

# Space Complexity

- Recursion: **O(logn)**, `n` is number of nodes
- DFS: ?? I feel like it's gonna be more than `logn`.. but I'm not sure 🥲
