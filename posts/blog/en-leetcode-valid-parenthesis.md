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

## Approach

- `i`번째 문자가 open parenthesis일 경우 스택에 추가.
- closed parenthesis일 경우 스택 top을 확인하고 페어인 경우 pop, 아니면 종료.
- 반복문 종료 후, 스택에 괄호가 남아있는지 확인한다. empty면 `true` 아니면 `false`

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

- Time Complexity: 문자열을 한 번 순회하기 때문에 **O(S)**, `S = s.length`
