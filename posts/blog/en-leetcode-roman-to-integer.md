---
title: '0013. Roman To Integer'
posttitle: 'Leetcode #0013'
postsubtitle: 'Roman to Integer'
date: '2022-09-15 20:50:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

# Problem Statement

[https://leetcode.com/problems/roman-to-integer/](https://leetcode.com/problems/roman-to-integer/)

Given a roman numeral, convert it to an integer.

- `I` : `1`
- `V` : `5`
- `X` : `10`
- `L` : `50`
- `C` : `100`
- `D` : `500`
- `M` : `1000`

# Approach

- Scan the string from left to right.
- Add up corresponding values when the symbol is either `V`, `L`, `D`, or `M`.
- Other symbols have special cases: `IV`, `IX`, `XL`, `XC`, `CD`, and `CM`.
  - For `I`, check if next character is `V` or `X`
  - For `X`, check if next character is `L` or `C`
  - For `C`, check if next character is `D` or `M`

# Code

## C++

```cpp
class Solution {
public:
    int romanToInt(string s) {
        int sum = 0;

        for(int i=0; i<s.size(); ++i) {
            int val = 0;
            switch(s[i]) {
                case 'I':
                    if(s[i+1] == 'V') {
                        val += 4;
                        ++i;
                    } else if(s[i+1] == 'X') {
                        val += 9;
                        ++i;
                    } else {
                        ++val;
                    }
                    break;
                case 'X':
                    if (s[i+1] == 'L') {
                        val += 40;
                        ++i;
                    } else if (s[i+1] == 'C') {
                        val += 90;
                        ++i;
                    } else {
                        val += 10;
                    }
                    break;
                case 'C':
                     if (s[i+1] == 'D') {
                        val += 400;
                        ++i;
                    } else if (s[i+1] == 'M') {
                        val += 900;
                        ++i;
                    } else {
                        val += 100;
                    }
                    break;
                case 'V': val += 5; break;
                case 'L': val += 50; break;
                case 'D': val += 500; break;
                case 'M': val += 1000; break;
                default: break;
            }

            sum += val;
        }

        return sum;
    }
};
```

### Complexity

We iterate through the string `S` times, where `S = string.length()`, therefore, the worst case time complexity is **O(S)**.

We didn't use any extra storage to store variables. The space complexity is **O(1)**.

## TypeScript

I could've used HashMap rather than using bunch of if-statements or switch.

```ts
function romanToInt(s: string): number {
  let num = 0;
  const SIZE = s.length;

  let mp = new Map<string, number>([
    ['I', 1],
    ['IV', 4],
    ['V', 5],
    ['IX', 9],
    ['X', 10],
    ['XL', 40],
    ['L', 50],
    ['XC', 90],
    ['C', 100],
    ['CD', 400],
    ['D', 500],
    ['CM', 900],
    ['M', 1000],
  ]);

  for (let i = 0; i < SIZE; ) {
    const roman = s[i] + s[i + 1];
    const word = mp.get(roman) ? roman : s[i];
    num += mp.get(word);
    i += word.length;
  }

  return num;
}
```

Time complexity would be linear since lookup is amortized O(1) in hashmap.
