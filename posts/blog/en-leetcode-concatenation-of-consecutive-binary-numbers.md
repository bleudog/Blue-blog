---
title: '1680. Concatenation of Consecutive Binary Numbers'
posttitle: 'Leetcode #01680'
postsubtitle: 'Concatenation of Consecutive Binary Numbers'
date: '2022-09-23 07:00:00'
tags:
  - leetcode
  - top interview questions
  - medium
lang: en
about: cp
---

## 1680. Concatenation of Consecutive Binary Numbers

[https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/)

## Problem Statement

Given an integer `n`, return _the **decimal value** of the binary string formed by concatenating the binary representations of_ `1` _to_ `n` _in order, **modulo**_ `109 + 7`.

**Example 1:**

```text
Input: n = 1
Output: 1

Explanation: "1" in binary corresponds to the decimal value 1.
```

**Example 2:**

```text
Input: n = 3
Output: 27

Explanation: In binary, 1, 2, and 3 corresponds to "1", "10", and "11".
After concatenating them, we have "11011", which corresponds to the decimal value 27.
```

**Example 3:**

```text
Input: n = 12
Output: 505379714

Explanation: The concatenation results in "1101110010111011110001001101010111100".
The decimal value of that is 118505380540.
After modulo 109 + 7, the result is 505379714.
```

## Approach

My first impression of this problem was, "oh this is medium?" 🤣
It didn't took long to figure that this problem is indeed medium level.

I looked at the solution and from there, I learned that `(i & (i-1)) == 0` can be used to check if a number is a power of 2. This is useful because all power of 2s only have a single `1` bit (e.g. `1`, `10`, `100`, etc...). With this, I can determine how many bits I need to shift to the left. From there I just add the new number.

## Code

### C++

```cpp
class Solution {
public:
    int concatenatedBinary(int n) {
        const int MOD = 1e9+7;
        long res = 0;
        for(size_t i=1,shift=0; i<=n; ++i) {
            shift += ((i&(i-1)) == 0);
            res = (res << shift) + i;
            res %= MOD;
        }
        return res;
    }
};
```

- Time Complexity: **O(N)**
- Space Complexity: **O(1)**
