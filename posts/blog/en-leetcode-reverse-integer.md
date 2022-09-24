---
title: 'LeetCode :: 7. Reverse Integer'
date: '2022-09-24 06:00:00'
tags:
  - leetcode
  - top interview questions
  - medium
lang: en
about: cp
---

Link: [https://leetcode.com/problems/reverse-integer](https://leetcode.com/problems/reverse-integer/)

# Problem Statement

Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return `0`.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

**Example 1:**

```text
Input: x = 123
Output: 321
```

---

**Example 2:**

```text
Input: x = -123
Output: -321
```

---

**Example 3:**

```text
Input: x = 120
Output: 21
```

# Approach

I thought about reversing a number using `% 10` to get the last number and `* 10` to shift one to the left.

But since our number may overflow, I need to have a way to check before it overflows. I could use `INT_MAX / 10`. I can't simply check `sum > INT_MAX` because this would cause an overflow.

If `sum == INT_MAX / 10`, I just need to check whether the number I'm going to add (`% 10`) is greater than `7` because `INT_MAX` in 32bits system ends with `7`.

# Code

## C++

### Failed attempt

This code failed with the input `-2147483648`.

It cause an overflow error when `revsum *= 10`. I thought checking at the `if` statement would catch this error, apparently it didn't.
I think it's because I forgot to handle the `INT_MIN` case.

```cpp
class Solution {
public:
    int reverse(int x) {
        int revsum = 0;
        while(x) {
            if(revsum > INT_MAX/10 || (revsum == INT_MAX/10 && x%10 > 7)) {
                return 0;
            }
            revsum *= 10;
            revsum += x%10;

            x/=10;
        }

        return revsum;
    }
};
```

### Passed

```cpp
class Solution {
public:
    int reverse(int x) {
        int revsum = 0;
        while(x != 0) {
            int pop = x % 10;
            x /= 10;

            if(revsum > INT_MAX/10 || (revsum == INT_MAX / 10 && pop > 7))
                return 0;
            if(revsum < INT_MIN/10 || (revsum == INT_MIN / 10 && pop < -8))
                return 0;

            revsum = revsum * 10 + pop;
        }

        return revsum;
    }
};
```

- Time complexity: **O(N)**
- Space complexity: **O(1)**
