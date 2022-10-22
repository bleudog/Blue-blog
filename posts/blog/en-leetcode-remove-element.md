---
title: '0027. Remove Element'
posttitle: 'Leetcode #0027'
postsubtitle: 'Remove Element'
date: '2022-09-26 07:00:00'
tags:
  - leetcode
  - easy
lang: en
about: cp
---

## 0027. Remove Element

https://leetcode.com/problems/remove-element/

## Problem Statement

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm). The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` _after placing the final result in the first_ `k` _slots of_ `nums`.

Do **not** allocate extra space for another array. You must do this by **modifying the input array** _in-place_ with O(1) extra memory.

**Example 1:**

```text
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]

Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Example 2:**

```text
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]

Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## Approach

Since I don't have to maintain the relative order of data in the list, I can simply swap its data with the last element in the list. For cases like `[3 2 2 3], delete = 3`, even if we swap the data it will still be `[3 2 2 3]`. So, I assigned a `null` value for deleted item before I swapped.

## Code

### C++

```cpp
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int removed = 0;
        for(int i=0; i<nums.size()-removed; ++i) {
            if(nums[i] == val) {
                nums[i] = -1;
                swap(nums[i], nums[nums.size()-1-removed]);
                ++removed;
                --i;
            }
        }

        return nums.size() - removed;
    }
};
```

- Time Complexity: **O(N)**
- Space Complexity: **O(1)**
