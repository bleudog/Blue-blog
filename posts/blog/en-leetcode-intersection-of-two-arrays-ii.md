---
title: '0350. Intersection of Two Arrays II'
posttitle: 'Leetcode #0350'
postsubtitle: 'Intersection of Two Arrays II'
date: '2022-09-22 07:30:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 0350. Intersection of Two Arrays II

[https://leetcode.com/problems/intersection-of-two-arrays-ii/](https://leetcode.com/problems/intersection-of-two-arrays-ii/)

## Problem Statement

Given two integer arrays `nums1` and `nums2`, return _an array of their intersection_. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

**Example 1:**

```text
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

**Example 2:**

```text
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

Explanation: [9,4] is also accepted.
```

## Approach

I simply counted data in both arrays and extracted one that seen more than once.

## Code

### C++

```cpp
class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        int arr[1001] = {0};
        for(int x : nums1) arr[x]++;

        vector<int> ans;

        for(int x: nums2) {
            if(arr[x] > 0) {
                ans.push_back(x);
                arr[x]--;
            }
        }

        return ans;
    }
};
```

- Time Complexity: scanning two arrays linearly ≫ **O(N)**
- Space Complexity: O(1001) ≫ **O(1)**
