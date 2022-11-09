---
title: '0136. Single Number'
posttitle: 'Leetcode #0136'
postsubtitle: 'Single Number'
date: '2022-11-08 17:17:17'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

# 0136. Single Number

https://leetcode.com/problems/single-number/

## Problem Statement

Given a **non-empty** array of integers `nums`, every element appears _twice_ except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

**Example 1:**

```text
Input: nums = [2,2,1]
Output: 1
```

**Example 2:**

```text
Input: nums = [4,1,2,1,2]
Output: 4
```

**Example 3:**

```text
Input: nums = [1]
Output: 1
```

## TypeScript

### Approach

Count occurrences of each data and output one that has appeared once at the end.

### Code

```ts
function singleNumber(nums: number[]): number {
  let mp: Map<number, number> = new Map();
  for (const x of nums) {
    if (mp.has(x) === true) {
      let v = mp.get(x) || 0;
      mp.set(x, v + 1);
    } else {
      mp.set(x, 1);
    }
  }

  for (const kv of mp) {
    if (kv[1] === 1) return kv[0];
  }

  return -1;
}
```

### Complexity

Time complexity: **O(N)**
