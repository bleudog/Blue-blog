---
title: '0150. Evaluate Reverse Polish Notation'
posttitle: 'Leetcode #0150'
postsubtitle: 'Evaluate Reverse Polish Notation'
date: '2022-09-27 07:30:00'
tags:
  - leetcode
  - top interview questions
  - medium
lang: en
about: cp
---

## 0150. Evaluate Reverse Polish Notation

[https://leetcode.com/problems/evaluate-reverse-polish-notation/](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

## Problem Statement

Evaluate the value of an arithmetic expression in [Reverse Polish Notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation).

Valid operators are `+`, `-`, `*`, and `/`. Each operand may be an integer or another expression.

**Note** that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

**Example 1:**

```text
Input: tokens = ["2","1","+","3","*"]
Output: 9

Explanation: ((2 + 1) * 3) = 9
```

**Example 2:**

```text
Input: tokens = ["4","13","5","/","+"]
Output: 6

Explanation: (4 + (13 / 5)) = 6
```

**Example 3:**

```text
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22

Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

## Approach

- sum -> add two numbers in any order (`a+b` or `b+a`)
- difference -> subtract in proper order (`b-a`)
- product -> multiply in any order (`a*b` or `b*a`)
- quotient -> divide in proper order (`b/a`)

## Code

### Solution 1

```cpp
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<long> st;
        long a, b;

        for(string &str : tokens) {
            if(st.size() > 1) {
                a = st.top(); st.pop();
                b = st.top(); st.pop();
            }
            if(str == "+") st.push(a+b);
            else if(str == "-") st.push(b-a);
            else if(str == "/") st.push(b/a);
            else if(str == "*") st.push(a*b);
            else {
                st.push(b);
                st.push(a);
                st.push(stoi(str));
            }
        }

        return st.top();
    }
};
```

- Time Complexity: **O(S)**, where `S = tokens.size()`
- Space Complexity: **O(S)**, where `S = tokens.size()`

---

## Solution 2

by [hercule24](https://leetcode.com/problems/evaluate-reverse-polish-notation/discuss/47514/Fancy-C%2B%2B-lambda-expression-solution)

```cpp
// lambda expression solution

class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        unordered_map<string, function<int (int, int) > > map = {
            { "+" , [] (int a, int b) { return a + b; } },
            { "-" , [] (int a, int b) { return a - b; } },
            { "*" , [] (int a, int b) { return a * b; } },
            { "/" , [] (int a, int b) { return a / b; } }
        };
        std::stack<int> stack;
        for (string& s : tokens) {
            if (!map.count(s)) {
                stack.push(stoi(s));
            } else {
                int op1 = stack.top();
                stack.pop();
                int op2 = stack.top();
                stack.pop();
                stack.push(map[s](op2, op1));
            }
        }
        return stack.top();
    }
};
```
