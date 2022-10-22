---
title: '0034. Find First and Last position of Element in Sorted Array'
posttitle: 'Leetcode #0034'
postsubtitle: 'Find First and Last position of Element in Sorted Array'
date: '2022-09-25 07:00:00'
tags:
  - leetcode
  - top interview questions
  - medium
lang: en
about: cp
---

## 0034. Find First and Last position of Element in Sorted Array

[https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

## Problem Statement

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```text
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

**Example 2:**

```text
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

**Example 3:**

```text
Input: nums = [], target = 0
Output: [-1,-1]
```

## Approach

We're gonna use binary search because we need a logarithmic solution. One modification to the algorithm is that we're not going to terminate the algorithm when we found the target.

Imagine we have `[1,8,8,8,8,10]` and our target is `8`. If we return right at the moment we find `8`, we cannot guarantee that that is the first position where `8` occurs. So we're going to repeat until we find the first position.

For the last position of `8`, we simply look for the position of `9`. Then we subtract `1` from its position and that's going to be either the first position if `8` is the only number in the list, or the last position of `8`.

## Code

### C++

```cpp
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int lb1 = lower_bound(nums, target);
        int lb2 = lower_bound(nums, target+1) - 1;

        if(lb1 <= lb2) return {lb1, lb2};
        else return {-1, -1};
    }

    int lower_bound(vector<int> &nums, int target) {
        int l = 0;
        int r = nums.size() - 1;
        while(l <= r) {
            int mid = l + ((r - l)>>1);
            if(nums[mid] < target) l = mid + 1;
            else r = mid - 1;
        }

        return l;
    }
};
```

- Time Complexity: It takes logarithmic time to find the target, so it's **O(log n)**.
- Space Complexity: **O(1)**
