---
title: '0268. Missing Number'
posttitle: 'Leetcode #268'
postsubtitle: 'Missing Number'
date: '2022-09-21 07:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 0268. Missing Number

https://leetcode.com/problems/missing-number/

## Problem Statement

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return _the only number in the range that is missing from the array._

**Example 1:**

```text
Input: nums = [3,0,1]
Output: 2

Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in `nums`.
```

**Example 2:**

```text
Input: nums = [0,1]
Output: 2

Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in `nums`.
```

**Example 3:**

```text
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8

Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in `nums`.
```

## Code

### C++

```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        for(int i=0; i<nums.size(); ++i) {
            if(nums[i] != i) return i;
        }

        return nums.size();
    }
};
```

- Time Complexity: due to the sorting process, the worst time complexity will be **O(nlogn)**.
- Space Complexity: **O(1)** or **O(n)** depends on the sorting algorithm used.
