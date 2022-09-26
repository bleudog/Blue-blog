---
title: '0005. Longest Palindromic Substring'
posttitle: 'Leetcode #0005'
postsubtitle: 'Longest Palindromic Substring'
date: '2022-09-26 08:00:00'
tags:
  - leetcode
  - top interview questions
  - medium
lang: en
about: cp
---

# 0005. Longest Palindromic Substring

https://leetcode.com/problems/longest-palindromic-substring/

# Problem Statement

Given a string `s`, return _the longest palindromic substring_ in `s`.

A string is called a palindrome string if the reverse of that string is the same as the original string.

**Example 1:**

```text
Input: s = "babad"
Output: "bab"

Explanation: "aba" is also a valid answer.
```

---

**Example 2:**

```text
Input: s = "cbbd"
Output: "bb"
```

# Approach

At first I was gonna append characters one by one and test whether it's a palindrome or not.
If it's a palindrome, I'll remember that string and continue appending the next character and repeat the above process. But I soon realized this not gonna work for the case like `aba`. It will return false for `ab` and there's no way to get `aba`.

I looked at the solution and their were many ways to solve it. With a help from [here](https://leetcode.com/problems/longest-palindromic-substring/discuss/2928/Very-simple-clean-java-solution), I decided to use a method where I start from one character, and start extending the range to check if a string is a palindrome.

# Code

## C++

```cpp
class Solution {
private:
    int start = 0;
    int end = 0;

public:
    void extend(string s, int i, int j) {
        // if palindrome (s[i]==s[j], extend the range
        while(i >= 0 && j < s.length() && s[i] == s[j]) {
            --i;
            ++j;
        }

        if(end < j-i-1) {
            start = i+1; // beginning position of the palindrome
            end = j-i-1; // length of the palindrome
        }
    }

    string longestPalindrome(string s) {
       int len = s.length();
        if(len < 2) return s;

        for(int i=0; i<len-1; ++i) {
            extend(s, i, i); // odd
            extend(s, i, i+1); // even
        }

        return s.substr(start ,end);
    }
};
```

# Time Complexity

**O(S^2)**, where `S = length of a string`

# Space Complexity

**O(1)**
