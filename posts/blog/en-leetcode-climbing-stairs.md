---
title: '0070. Climbing Stairs'
posttitle: 'Leetcode #0070'
postsubtitle: 'Climbing Stairs'
date: '2022-10-20 15:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 70. Climbing Stairs

https://leetcode.com/problems/climbing-stairs/

## Problem Statement

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**Example 1:**

```text
Input: n = 2
Output: 2

Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

**Example 2:**

```text
Input: n = 3
Output: 3

Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

## Approach

|  n  | answer |
| :-: | :----: |
|  1  |   1    |
|  2  |   2    |
|  3  |   3    |
|  4  |   5    |
|  5  |   8    |

see the pattern? fibonacci :)
I'm going to implement fibonacci using a [tail recursion](https://www.geeksforgeeks.org/tail-recursion-fibonacci/).

## TypeScript

```ts
function fibo(n: number, a: number, b: number): number {
  if (n === 1) return a;
  if (n === 2) return b;

  return fibo(n - 1, b, a + b);
}

function climbStairs(n: number): number {
  return fibo(n, 1, 2);
}
```

## Complexity

**Linear** for both space and time complexity because of the tail-recursion. If used normal recursion, it would be exponential.
