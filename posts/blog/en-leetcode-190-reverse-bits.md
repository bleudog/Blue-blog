---
title: '0190. Reverse Bits'
posttitle: 'Leetcode #0190'
postsubtitle: 'Reverse Bits'
date: '2022-11-08 17:17:17'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

# 0190. Reverse Bits

https://leetcode.com/problems/reverse-bits/

## Problem Statement

Reverse bits of a given 32 bits unsigned integer.

**Note:**

- Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
- In Java, the compiler represents the signed integers using [2's complement notation](https://en.wikipedia.org/wiki/Two%27s_complement). Therefore, in **Example 2** above, the input represents the signed integer `-3` and the output represents the signed integer `-1073741825`.

**Example 1:**

```text
Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)

Explanation: The input binary string **00000010100101000001111010011100** represents the unsigned integer 43261596, so return 964176192 which its binary representation is **00111001011110000010100101000000**.
```

**Example 2:**

```text
Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)

Explanation: The input binary string **11111111111111111111111111111101** represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 1011111111111111111111111111111.
```

## TypeScript

### Approach

~~I think I can just XOR input string with `111....111 (32)`.~~

OH wait. No, I'm not inversing bits. I'm reversing its order.

### Code

```ts
function reverseBits(n: number): number {
  let str = n.toString(2).padStart(32, '0');
  let rev = str.split('').reverse().join('');
  return parseInt(rev, 2);
}
```

### Complexity

**O(N)** where `N = string.length`
