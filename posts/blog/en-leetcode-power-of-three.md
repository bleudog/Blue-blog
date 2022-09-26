---
title: '0326. Power of Three'
posttitle: 'Leetcode #326'
postsubtitle: 'Power of Three'
date: '2022-09-22 07:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

# 0326. Power of Three

[https://leetcode.com/problems/power-of-three/](https://leetcode.com/problems/power-of-three/)

# Problem Statement

Given an integer `n`, return _`true` if it is a power of three. Otherwise, return `false`_.

An integer `n` is a power of three, if there exists an integer `x` such that `n == 3^x`.

**Example 1:**

```text
Input: n = 27
Output: true

Explanation: 27 = 3^3
```

---

**Example 2:**

```text
Input: n = 0
Output: false

Explanation: There is no x where 3^x = 0.
```

---

**Example 3:**

```text
Input: n = -1
Output: false

Explanation: There is no x where 3^x = (-1).
```

# Code

## C++

```cpp
class Solution {
public:
    bool isPowerOfThree(int n) {
        int neg = n < 0 ? -1 : 1;

        for(int i=0; i*i*i<=n; ++i) {
            if(pow(3,i) > n) break;
            if(pow(3, i)*neg == n) return true;
        }

        return false;
    }
};
```

# Time Complexity

We're looping upto cube root of `n`, so the worst time complexity is going to be **O(N^{1/3})**.

# Space Complexity

**O(1)**
