---
title: '0217. Contains Duplicate'
posttitle: 'Leetcode #0217'
postsubtitle: 'Contains Duplicate'
date: '2022-11-10 08:42:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

# 0217. Contains Duplicate

https://leetcode.com/problems/contains-duplicate/

## Problem Statement

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

**Example 1:**

```text
Input: nums = [1,2,3,1]
Output: true
```

**Example 2:**

```text
Input: nums = [1,2,3,4]
Output: false
```

**Example 3:**

```text
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

## TypeScript

### Code

```ts
function containsDuplicate(nums: number[]): boolean {
  let set = new Set();
  for (const x of nums) {
    if (set.has(x)) return true;
    set.add(x);
  }

  return false;
}
```

Simpler way

```ts
function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}
```

### Complexity

Time complexity - **O(N)** assuming that `set.has()` has a constant time complexity.
