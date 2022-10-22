---
title: '0412. Fizz Buzz'
posttitle: 'Leetcode #0412'
postsubtitle: 'Fizz Buzz'
date: '2022-09-18 19:30:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 412. Fizz Buzz

[https://leetcode.com/problems/fizz-buzz/](https://leetcode.com/problems/fizz-buzz/)

## Problem Statement

Given an integer n, return a string array answer (1-indexed) where:

```text
answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
```

Example 1:

```text
Input: n = 3
Output: ["1","2","Fizz"]
```

Example 2:

```text
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
```

Example 3:

```text
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

## Approach

- Check if a number is divisible by 3 and 5 which is simply checking for 15 -> `FizzBuzz`
- Check if a number is divisible by 5 -> `Buzz`
- Check if a number is divisible by 3 -> `Fizz`
- If none, print the integer as a string -> `to_string(integer)`

## Code

### C++

```cpp
class Solution {
public:
    vector<string> fizzBuzz(int n) {
        vector<string> vec;

        for(int i=1; i<=n; ++i) {
            if (i%15 == 0) {
                vec.push_back("FizzBuzz");
            } else if (i%5 == 0) {
                vec.push_back("Buzz");
            } else if (i%3 == 0) {
                vec.push_back("Fizz");
            } else {
                vec.push_back(to_string(i));
            }
        }

        return vec;
    }
};
```

- Time Complexity: we're iterating from `1` to `n`; thus the worst time complexity is **O(n)**.
- Space Complexity: **O(1)**
