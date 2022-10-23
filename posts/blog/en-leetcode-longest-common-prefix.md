---
title: '0014. Longest Common Prefix'
posttitle: 'Leetcode #0014'
postsubtitle: 'Longest Common Prefix'
date: '2022-09-15 09:30:00'
updated: '2022-10-17 07:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 14. Longest Common Prefix

[https://leetcode.com/problems/longest-common-prefix/](https://leetcode.com/problems/longest-common-prefix/)

## Problem Statement

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

```text
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

Example 2:

```text
Input: strs = ["dog","racecar","car"]
Output: ""

Explanation: There is no common prefix among the input strings.
```

## Approach

- I'm going to scan all words vertically and append a character if every words own that character.
- Inside the loop
  - if a word is not long enough (index out of bound), break and return the answer.
  - if a character that we're scanning does not match, break and return the answer.

## C++

```cpp
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string ans = "";
        if(strs.size() <= 1) return strs[0];

        for(int i=0; i<strs[0].length(); ++i) {
            char c = strs[0][i];

            for(int j=1; j<strs.size(); ++j) {
                if(i == strs[j].length() || strs[j][i] != c)
                    return ans;
            }
            ans += c;
        }

        return ans;
    }
};
```

- Time Complexity: let `n` be the length of the first string in the list (`n = strs[0].length()`) and let `m` be number of words (`m = strs.length()`), then the time complexity becomes **O(nm)**.
- Space Complexity: We know for sure that our answer wont be longer than the shortest word in the list; thus, the worst space complexity would be **O(S)** where `S` is a length of shortest word in the list.

## TypeScript

```ts
function longestCommonPrefix(strs: string[]): string {
  const WORDS = strs.length;
  const LENGTH = strs[0].length;
  if (WORDS <= 1) {
    return strs[0];
  }
  let result: string = '';

  for (let i = 0; i < LENGTH; ++i) {
    let ch = strs[0][i];

    for (let j = 1; j < WORDS; ++j) {
      if (i === strs[j].length || strs[j][i] !== ch) {
        return result;
      }
    }

    result += ch;
  }

  return result;
}
```

- Time Complexity: **O(NM)**, `N` = length of 1st word & `M` = number of words
