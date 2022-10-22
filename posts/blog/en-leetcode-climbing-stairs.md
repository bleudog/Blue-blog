---
title: '0070. Climbing Stairs'
posttitle: 'Leetcode #0070'
postsubtitle: 'Climbing Stairs'
date: '2022-10-20 07:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 70. Climbing Stairs

https://leetcode.com/problems/climbing-stairs/

## Approach

|  n  | answer |
| :-: | :----: |
|  1  |   1    |
|  2  |   2    |
|  3  |   3    |
|  4  |   5    |
|  5  |   8    |

패턴 파악! 피보나치 였다. 주어진 `n`의 피보나치 수열을 구하면 된다.

## Code

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

꼬리 재귀 (Tail Recursion)을 사용했기 때문에 **O(N)**. 만약 일반적인 재귀를 사용했다면 O(2^n)이 된다.
