---
title: '0026. Remove Duplicates from Sorted Array'
posttitle: 'Leetcode #0026'
postsubtitle: 'Remove Duplicates from Sorted Array'
date: '2022-10-18 22:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 26. Remove Duplicates from Sorted Array

https://leetcode.com/problems/remove-duplicates-from-sorted-array/

## Problem Statement

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm) such that each unique element appears only **once**. The **relative order** of the elements should be kept the **same**.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` _after placing the final result in the first_ `k` _slots of_ `nums`.

Do **not** allocate extra space for another array. You must do this by **modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** with O(1) extra memory.

**Example 1:**

```text
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Example 2:**

```text
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## Approach

We can declare a position variable, `pos`, to track an index for unique values.

```text
removeDuplicates(nums, n, i=1) → number
  Pre: nums is the number array
       n is the total number of elements
       i is the index we'll use to track unique elements
  Post: first 'i' elements are unique without duplicates

  FOR (i=1 to n)
    IF (nums[i] != nums[i-1])
      nums[pos] = nums[i]
      ++i;
    END IF
  END FOR

  // new array contains 'i' elements which is the size
  return i
END removeDuplicates
```

## TypeScript

```ts
function removeDuplicates(nums: number[]): number {
  const SIZE = nums.length;
  let pos = 1;

  for (let i = 1; i < SIZE; ++i) {
    if (nums[i] !== nums[i - 1]) {
      nums[pos] = nums[i];
      ++pos;
    }
  }

  return pos;
}
```

## Complexity

- Time Complexity
  - iterating once through the array, so the worst time complexity is going to be linear **O(N)**.
- Space Complexity
  - **O(1)**
