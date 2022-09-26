---
title: '0058. Length of Last Word'
posttitle: 'Leetcode #0058'
postsubtitle: 'Length of Lost Word'
date: '2022-09-27 07:00:00'
tags:
  - leetcode
  - easy
lang: en
about: cp
---

# 058. Length of Last word

[https://leetcode.com/problems/length-of-last-word/](https://leetcode.com/problems/length-of-last-word/)

# Problem Statement

Given a string `s` consisting of words and spaces, return _the length of the **last** word in the string._

A **word** is a maximal substring consisting of non-space characters only.

**Example 1:**

```text
Input: s = "Hello World"
Output: 5

Explanation: The last word is "World" with length 5.
```

---

**Example 2:**

```text
Input: s = "   fly me   to   the moon  "
Output: 4

Explanation: The last word is "moon" with length 4.
```

---

**Example 3:**

```text
Input: s = "luffy is still joyboy"
Output: 6

Explanation: The last word is "joyboy" with length 6.
```

# Approach

I first removed all spaces at the end of the string `s`.
Then, I simply counted number of characters until I encounter a space or beginning of the string.

# Code

## C++

```cpp
class Solution {
public:
    int lengthOfLastWord(string s) {
        int cnt = 0;
        int i = s.length() - 1;
        if(s[i] == ' ') while(s[i] == ' ') { --i; }

        for(i; i>=0 && s[i] != ' '; --i, ++cnt) {}

        return cnt;
    }
};
```

# Time Complexity

**O(L + S)**, where `L = length of the last word` and `S = length of spaces` at the end

# Space Complexity

**O(1)**
