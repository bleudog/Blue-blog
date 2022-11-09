---
title: '0171. Excel Sheet Column Number'
posttitle: 'Leetcode #0171'
postsubtitle: 'Excel Sheet Column Number'
date: '2022-11-08 17:17:17'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

# 0171. Excel Sheet Column Number

https://leetcode.com/problems/excel-sheet-column-number/

## Problem Statement

Given a string `columnTitle` that represents the column title as appears in an Excel sheet, return _its corresponding column number_.

For example:

```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
```

**Example 1:**

```text
Input: columnTitle = "A"
Output: 1
```

**Example 2:**

```text
Input: columnTitle = "AB"
Output: 28
```

**Example 3:**

```text
Input: columnTitle = "ZY"
Output: 701
```

## TypeScript

### Approach

it's basically base26 conversion where `1 = 'A'` and `26 = 'Z'`.

```text
base26(code: string): number
    Pre: code is a string consists of A-Z
    Post: return the decoded value

    len  ← code.length - 1
    num  ← 0
    base ← 26
    p    ← 0
    WHILE (len >= 0)
        // decode => a function that returns base26 of a character (A=1, B=2, etc...)
        num += decode(code[len]) * pow(base, p)
        --len
        ++p
    END WHILE

    return num
END base26
```

### Code

```ts
function decode(x: string) {
  return x.charCodeAt(0) - 64;
}

function titleToNumber(s: string): number {
  let len = s.length - 1;
  let num = 0;
  let base = 26;
  let p = 0;

  while (len >= 0) {
    num += decode(s[len]) * Math.pow(base, p);
    --len;
    ++p;
  }

  return num;
}
```

### Complexity

If `pow` runs in **O(logn)** time, the worst time complexity would be **O(nlogn)** where `n = s.length`. If not, it will be **O(n)**.
