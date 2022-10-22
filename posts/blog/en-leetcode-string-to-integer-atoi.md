---
title: '0008. String to Integer (atoi)'
posttitle: 'Leetcode #0008'
postsubtitle: 'String to Integer (atoi)'
date: '2022-09-23 07:00:00'
tags:
  - leetcode
  - top interview questions
  - medium
lang: en
about: cp
---

## 0008. String to Integer (atoi)

https://leetcode.com/problems/string-to-integer-atoi/

## Problem Statement

Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer (similar to C/C++'s `atoi` function).

```text
Note:
- Only the space character `' '` is considered a whitespace character.
- Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
```

**Example 1:**

```text
Input: s = "42"
Output: 42

Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.
```

## Approach

I wasn't sure how to check overflowed number. So I added bunch of if-else statements here and there which made my code dirty.

After I submitted my code, I learned from other solutions that I could've done it much easier. For overflowing, I can simply check `INT_MAX / 10` and make sure my last digit `num % 10` is less than `7` because `INT_MAX` in 32bits machine is `2147483647`. But `INT_MIN` is `-2147483648` (it ends with `8`), so I can check for the `sign` at the end and decide whether to return `INT_MAX` or `INT_MIN` for the overflow.

## Code

### C++

```cpp
class Solution {
public:
    int myAtoi(string s) {
        string parseInt = "";
        int neg = 1;
        bool sign = false;
        bool numAdded = false;

        for(char ch : s) {
            if(ch == ' ') {
                if(numAdded) break;
                continue;
            }
            if(ch == '-' || ch == '+') {
                if(numAdded) break;
                if(sign) return 0;
                sign = true;
                neg = (ch == '-') ? -1 : 1;
                numAdded = true;
                continue;
            }
            if(isdigit(ch)) {
                numAdded = true;
                if(parseInt.length() == 0 && ch=='0') continue;
                parseInt += ch;
            }
            else break;
        }

        string limit = (neg < 0) ? "2147483648" : "2147483647";
        if(parseInt.length() >= 10) {
            if(parseInt.length() == 10) {
                if(parseInt[0] >= '3' || (parseInt[0] == '2' && parseInt[1] > '1'))
                    return (neg < 0) ? -2147483648 : 2147483647;

                long x = 0, y=0;
                for(int i=0; i<10; ++i) {
                    x *= 10;
                    y *= 10;
                    x += parseInt[i]-'0';
                    y += limit[i]-'0';
                    if(x > y)
                        return (neg < 0) ? -2147483648 : 2147483647;
                }
            } else {
                return (neg < 0) ? -2147483648 : 2147483647;
            }
        }

        long integer = 0;
        for(char x : parseInt) {
            integer *= 10;
            integer += (x - '0');
        }

        return integer * neg;
    }
};
```

- Time Complexity: **O(S^2)**, where S = length of a given string
- Space Complexity: **O(S)**, because of the extra string variable `parseInt`

---

### Other Solution

```cpp
class Solution {
public:
    int myAtoi(string s) {
        int sign = 1;
        int base = 0;
        int i = 0;
        while(s[i] ==' ') ++i;

        if(s[i] == '-' || s[i] == '+') {
            sign = 1 - 2 * (s[i++] == '-');
        }

        while(isdigit(s[i])) {
            if(base > INT_MAX / 10 || (base == INT_MAX / 10 && s[i] - '0' > (INT_MAX % 10))) {
                if(sign == 1) return INT_MAX;
                else return INT_MIN;
            }

            base = 10 * base + (s[i++] - '0');
        }

        return base * sign;
    }
};
```

- Time Complexity: **O(S)**, where S = length of a given string
- Space Complexity: **O(1)**
