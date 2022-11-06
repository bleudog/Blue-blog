---
title: '0125. Valid Palindrome'
posttitle: 'Leetcode #0125'
postsubtitle: 'Valid Palindrome'
date: '2022-09-19 08:00:00'
updated: '2022-11-06 16:15:00'
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

## C++

### Approach

- initialize 2 pointers: front and rear
- LOOP
  - if front (or rear) is not alpha-numeric, increase (or decrease)
  - return `false` if front value != rear value because they're not palindrome
  - repeat above process
- LOOP END
- return `true`

### Code

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

### Complexity

- Time Complexity
  - in worst case, we're iterating `n/2` times; thus, the worst time complexity is **O(n)**.
- Space Complexity
  - we're only using temporary variables, therefore the space complexity is just constant, **O(1)**.

## TypeScript

### Code

```ts
function removeNonAlphaneumeric(s: string): string {
  const len = s.length;
  let str = '';

  for (let i = 0; i < len; ++i) {
    if (
      (s[i] >= 'a' && s[i] <= 'z') ||
      (s[i] >= 'A' && s[i] <= 'Z') ||
      (s[i] >= '0' && s[i] <= '9')
    ) {
      str += s[i].toLocaleLowerCase();
    }
  }
  return str;
}

function isPalindrome(s: string): boolean {
  s = removeNonAlphaneumeric(s);
  const len = s.length;
  const bound = len >> 1;
  for (let i = 0; i <= bound; ++i) {
    if (s[i] !== s[len - i - 1]) return false;
  }
  return true;
}
```

I didn't really liked the code above because of all those clutters in conditionals. So I took them out.

```ts
function removeNonAlphaneumeric(s: string): string {
  const len = s.length;
  let str = '';

  const LOWER = (ch: string): boolean => ch >= 'a' && ch <= 'z';
  const UPPER = (ch: string): boolean => ch >= 'A' && ch <= 'Z';
  const NUMERIC = (ch: string): boolean => ch >= '0' && ch <= '9';

  for (let i = 0; i < len; ++i) {
    if (UPPER(s[i])) {
      str += s[i].toLocaleLowerCase();
    } else if (LOWER(s[i]) || NUMERIC(s[i])) {
      str += s[i];
    }
  }
  return str;
}

function isPalindrome(s: string): boolean {
  s = removeNonAlphaneumeric(s);
  const len = s.length;
  const bound = len >> 1;
  for (let i = 0; i <= bound; ++i) {
    if (s[i] !== s[len - i - 1]) return false;
  }
  return true;
}
```

Can't say if this is any better but I think it's tad bit easier to read.

### Complexity

#### Time complexity

**O(N)** for `removeNonAlphanemuric` and **O(N/2)** for `isPalindrome`. So the time complexity would be **O(N)** at the end.

#### Space Complexity

I believe it's going to be **O(N)** where **N = string length** because we're creating a new string without any non-alphanumeric characters or simply copying existing string in the worst case.
