---
title: 'LeetCode :: 69. Sqrt(x)'
date: '2022-09-17 10:20:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

Link: [https://leetcode.com/problems/sqrtx/](https://leetcode.com/problems/sqrtx/)

# Problem Statement

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are **truncated**, and **only the integer part** of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as `pow(x, 0.5)` or `x ** 0.5`.

Example 1:

```text
Input: x = 4
Output: 2
```

---

Example 2:

```text
Input: x = 8
Output: 2
```

**Explanation**: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

# Approach

At first, I was going to use the [babylonian method](blogs.sas.com/content/iml/2016/05/16/babylonian-square-roots.html) to find the square root.

However, we're only using integers here meaning we don't need to worry about decimal points at all. So, I used a binary search.

# Code

## C++

```cpp
class Solution {
public:
    int mySqrt(int x) {
        if(x==0 || x==1) return x;

        int low, mid, res;
        low = mid = res = 0;
        int high = x;

        while(low <= high){
            mid = floor(low + (high-low) / 2);

            if(mid <= x / mid)
                res = mid, low = mid + 1;
            else if(mid > x / mid)
                high = mid - 1;
        }

        return res;
    }
};
```

# Time Complexity

We're using binary search here, so the worst time complexity is same as binary search which is **O(logn)**.

# Space Complexity

No extra storage so **O(1)**.
