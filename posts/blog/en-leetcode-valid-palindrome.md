---
title: '0125. Valid Palindrome'
posttitle: 'Leetcode #0125'
postsubtitle: 'Valid Palindrome'
date: '2022-09-19 08:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 0125. Valid Palindrome

https://leetcode.com/problems/valid-palindrome/

## Problem Statement

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` _if it is a palindrome, or `false` otherwise_.

Example 1:

```text
Input: s = "A man, a plan, a canal: Panama"
Output: true

Explanation: "amanaplanacanalpanama" is a palindrome.
```

Example 2:

```text
Input: s = "race a car"
Output: false

Explanation: "raceacar" is not a palindrome.
```

Example 3:

```text
Input: s = " "
Output: true

Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

## Approach

- initialize 2 pointers: front and rear
- LOOP
  - if front (or rear) is not alpha-numeric, increase (or decrease)
  - return `false` if front value != rear value because they're not palindrome
  - repeat above process
- LOOP END
- return `true`

## Code

### C++

```cpp
class Solution {
public:
    bool isPalindrome(string s) {
        int fp = 0;
        int rp = s.size() - 1;

        while(fp < rp) {
            while(fp < s.size() && !isalnum(s[fp])) ++fp;
            while(rp > -1 && !isalnum(s[rp])) --rp;

            if(fp >= rp) break;
            if(tolower(s[fp]) != tolower(s[rp])) return false;
            ++fp;
            --rp;
        }

        return true;
    }
};
```

- Time Complexity
  - in worst case, we're iterating `n/2` times; thus, the worst time complexity is **O(n)**.
- Space Complexity
  - we're only using temporary variables, therefore the space complexity is just constant, **O(1)**.
