---
title: '0003. Longest Substring Without Repeating Characters'
posttitle: 'Leetcode #0003'
postsubtitle: 'Longest Substring Without Repeating Characters'
date: '2022-09-25 07:30:00'
tags:
  - leetcode
  - top interview questions
  - medium
lang: en
about: cp
---

# 0003. Longest Substring Without Repeating Characters

[https://leetcode.com/problems/longest-substring-without-repeating-characters/](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

# Problem Statement

Given a string `s`, find the length of the **longest substring** without repeating characters.

**Example 1:**

```text
Input: s = "abcabcbb"
Output: 3

Explanation: The answer is "abc", with the length of 3.
```

---

**Example 2:**

```text
Input: s = "bbbbb"
Output: 1

Explanation: The answer is "b", with the length of 1.
```

---

**Example 3:**

```text
Input: s = "pwwkew"
Output: 3

Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

# Code

## C++

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        vector<int> v(256, -1);
        int _max = 0;
        int begin = -1;

        for(int i=0; i<s.length(); ++i) {
            if(v[s[i]] > begin)
                begin = v[s[i]];

            v[s[i]] = i;
            _max = max(_max, i - begin);
        }

        return _max;
    }
};
```

# Time Complexity

**O(S)**, where `S = length of a string`

# Space Complexity

O(256) => **O(1)**
