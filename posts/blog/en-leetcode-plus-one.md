---
title: '0066. Plus One'
posttitle: 'Leetcode #0066'
postsubtitle: 'Plus One'
date: '2022-09-15 10:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

Link: [https://leetcode.com/problems/plus-one/](https://leetcode.com/problems/plus-one/)

# Problem Statement

You are given a large integer represented as an integer array digits, where each `digits[i]` is the `i`th digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:

```text
Input: digits = [1,2,3]
Output: [1,2,4]
```

**Explanation**: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

---

Example 2:

```text
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
```

**Explanation**: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

---

Example 3:

```text
Input: digits = [9]
Output: [1,0]
```

**Explanation**: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

# Approach

- Add 1 to the last index value
- LOOP: iterate through digits from last index to index 0.
  - add carried over value to current index's value.
  - udpate current value and `carry` if necessary.
  - repeate above process.
- LOOP END
- check if `carry = 1`.
  - if yes prepend `1` to the list.

# Code

## C++

```cpp
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int pos = digits.size() - 1;
        digits[pos] += 1;

        int carry = 0;
        while (pos > 0) {
            digits[pos] += carry;
            carry = 0;
            if (digits[pos] > 9) {
                carry = 1;
                digits[pos] -= 10;
            }
            --pos;
        }

        if (carry) digits[pos] += 1;
        if (digits[0] > 9) {
            auto it = digits.begin();
            digits[0] -= 10;
            digits.insert(it, 1);
        }

        return digits;
    }
};
```

# Time Complexity

For `n` digits, we're iterating `n` times. Therefore, the worst time complexity becomes **O(N)**.

# Space Complexity

We didn't use any extra storages to compute the answer. The space complexity is **O(1)**.
