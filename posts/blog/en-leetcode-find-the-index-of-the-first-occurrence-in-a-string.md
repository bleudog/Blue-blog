---
title: 'LeetCode :: 28. Find the Index of the First Occurrence in a String'
date: '2022-09-24 07:00:00'
tags:
  - leetcode
  - top interview questions
  - medium
lang: en
about: cp
---

Link: [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

# Problem Statement

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

**Example 1:**

```text
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
```

Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

---

**Example 2:**

```text
Input: haystack = "leetcode", needle = "leeto"
Output: -1
```

Explanation: "leeto" did not occur in "leetcode", so we return -1.

# Approach

- As I scan characters from the `haystack`, I'll check if it matches with the first character in the `needle`
- if `haystack[i] == needle[0]`, start scanning the two at the same time,
  - if it matches all the way, return `i` which is an initial position of `needle` in `haystack`
  - if not, break and continue scanning on `haystack` and repeat the above process
- if finished scanning, that means `needle` DNE in the `haystack`. return `-1`

# Code

## C++

```cpp
class Solution {
public:
    int strStr(string haystack, string needle) {
        if(needle.size() > haystack.size()) return -1;
        if(needle.size() == haystack.size()) {
            if(needle.size() == 1)
                return (needle[0] != haystack[0]) ? -1 : 0;
        }

        for(int i=0; i<haystack.size(); ++i) {
            if(haystack[i] == needle[0]) {
                bool isSame = false;
                for(int j=0; j<needle.size(); ++j) {
                    if(j < haystack.size() && haystack[i+j] != needle[j]) {isSame = false; break;}
                    else isSame = true;
                }

                if(isSame) {
                    return i;
                }
            }
        }

        return -1;
    }
}
```

# Time Complexity

Let `m` and `n` be the length of `haystack` and `needle` respectively. The time complexity is going to be **O(m + n)**.

# Space Complexity

**O(1)**
