---
title: '0020. Valid Parentheses'
posttitle: 'Leetcode #0125'
postsubtitle: 'Valid Parentheses'
date: '2022-10-17 07:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 20. Valid Parentheses

https://leetcode.com/problems/valid-parentheses/

## Problem Statement

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

```text
Input: s = "()"
Output: true
```

**Example 2:**

```text
Input: s = "()[]{}"
Output: true
```

**Example 3:**

```text
Input: s = "(]"
Output: false
```

## Approach

1. if `i_th` character is an open parenthesis, push it to the stack.
2. if it's a closed parenthesis, check top of the stack if it matches.
3. If it matches, pop it. Otherwise, return `false`.
4. At the end of the iteration, check if the stack is empty. If it's empty, return `true` else `false`.

## TypeScript

```ts
function isValid(s: string): boolean {
  const SIZE = s.length;
  if (SIZE % 2 !== 0) {
    return false;
  }

  let stack: string[] = [];
  const mp = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < SIZE; ++i) {
    switch (s[i]) {
      case '(':
      case '[':
      case '{':
        stack.push(s[i]);
        break;
      default:
        if (stack.pop() !== mp[s[i]]) {
          return false;
        }
    }
  }

  return stack.length === 0;
}
```

- Time Complexity: **O(S)**, `S = s.length`
