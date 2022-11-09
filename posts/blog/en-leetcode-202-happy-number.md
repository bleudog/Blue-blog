---
title: '0202. Happy Number'
posttitle: 'Leetcode #0202'
postsubtitle: 'Happy Number'
date: '2022-11-09 17:17:17'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

# 0202. Happy Number

https://leetcode.com/problems/happy-number/

## Problem Statement

Write an algorithm to determine if a number `n` is happy.

A **happy number** is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it **loops endlessly in a cycle** which does not include 1.
- Those numbers for which this process **ends in 1** are happy.

Return `true` _if_ `n` _is a happy number, and_ `false` _if not_.

**Example 1:**

```text
Input: n = 19
Output: true

Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
```

**Example 2:**

```text
Input: n = 2
Output: false
```

## TypeScript

### Approach

Every time we generate a new value, save it to the hash map. Check if we have seen the number before and return false if we have, otherwise continue generating a new number until we get $1$.

```text
isHappy(n: number) → boolean
    Pre: n is a number to test whether it's a happy number or not
    Post: n is either happy or not happy

    hmp ← new Hashmap
    hmp.add(n)

    WHILE (n != 1)
        newN ← sumOfDigitSquare(n)

        IF hmp.contains(newN)
            return false
        END IF
        hmp.add(newN)
    END WHILE

    return true
END isHappy
```

### Code

```ts
function digitSum(n: number): number {
  let x = 0;

  while (n) {
    let t = n % 10;
    x += t * t;
    n = Math.trunc(n / 10);
  }

  return x;
}

function isHappy(n: number): boolean {
  let hmp = new Map<number, number>();
  hmp.set(n, 1);

  while (n !== 1) {
    n = digitSum(n);
    if (hmp.has(n)) {
      return false;
    }

    hmp.set(n, 1);
  }
  return true;
}
```

### Complexity

**O(logn)**

Reference: https://leetcode.com/problems/happy-number/solution/
