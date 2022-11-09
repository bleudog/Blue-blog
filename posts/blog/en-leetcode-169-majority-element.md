---
title: '0169. Majority Element'
posttitle: 'Leetcode #0169'
postsubtitle: 'Majority Element'
date: '2022-11-07 20:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

# 0169. Majority Element

https://leetcode.com/problems/majority-element/

## Problem Statement

Given an array `nums` of size `n`, return _the majority element_.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**Example 1:**

```text
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**

```text
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

## TypeScript

### Approach

I'm gonna use a hash map and count occurrences of each number. After, I'm going to iterate the map and output one that has showed up more than `n/2`.

### Code

```ts
function majorityElement(nums: number[]): number {
  let mp: Map<number, number> = new Map();
  for (const x of nums) {
    if (mp.has(x) === true) {
      let v = mp.get(x) || 0;
      mp.set(x, v + 1);
    } else {
      mp.set(x, 1);
    }
  }

  const half = nums.length >> 1;
  let k = 0;
  let v = 0;
  for (const kv of mp) {
    if (kv[1] > half && kv[1] > v) {
      k = kv[0];
      v = kv[1];
    }
  }

  return k;
}
```

You can also simply sort and return the middle element. Because if `x` is the majority element in the array, the middle element will be `x`.

```ts
function majorityElement(nums: number[]): number {
  nums = nums.sort();
  let i = nums.length >> 1;
  return nums[i];
}
```

### Complexity

- Using the hash map, **O(N)**
- Using the sort, **O(nlogn)**
