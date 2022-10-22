---
title: '0066. Plus One'
posttitle: 'Leetcode #0066'
postsubtitle: 'Plus One'
date: '2022-09-15 10:00:00'
updated: '2022-10-19 07:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 0066. Plus One

https://leetcode.com/problems/plus-one/

## Problem Statement

You are given a large integer represented as an integer array digits, where each `digits[i]` is the `i`th digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:

```text
Input: digits = [1,2,3]
Output: [1,2,4]

Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
```

Example 2:

```text
Input: digits = [4,3,2,1]
Output: [4,3,2,2]

Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
```

Example 3:

```text
Input: digits = [9]
Output: [1,0]

Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
```

## Approach

- Add 1 to the last index value
- LOOP: iterate through digits from last index to index 0.
  - add carried over value to current index's value.
  - udpate current value and `carry` if necessary.
  - repeate above process.
- LOOP END
- check if `carry = 1`.
  - if yes prepend `1` to the list.

## C++

```cpp
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int pos = digits.size() - 1;
        digits[pos] += 1;

        int carry = 0;
        while (pos > 0) {
            digits[pos] += carry;
            carry = 0;
            if (digits[pos] > 9) {
                carry = 1;
                digits[pos] -= 10;
            }
            --pos;
        }

        if (carry) digits[pos] += 1;
        if (digits[0] > 9) {
            auto it = digits.begin();
            digits[0] -= 10;
            digits.insert(it, 1);
        }

        return digits;
    }
};
```

- Time Complexity: for `n` digits, we're iterating `n` times. Therefore, the worst time complexity becomes **O(N)**.
- Space Complexity: we didn't use any extra storages to compute the answer. The space complexity is **O(1)**.

## TypeScript

### Method 1: split and join

```ts
function plusOne(digits: number[]): number[] {
  let x = BigInt(digits.join('')) + 1n;
  return x.toString().split('').map(Number);
}
```

- [Array.prototype.join](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.join)은 O(n).
- [x.toString()](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tostring)은 내부적으로 `join`을 두 번째 인자 없이(디폴트 `,`) 호출하니까 똑같이 O(N).
- [String.prototype.split](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.split) 도 내가 구현한다고 하면 일단 전체 문자열을 한 번 순회하니까 O(N)일 것 같으니..

전체 시간복잡도는 O(3N) => **O(N)**

### Method 2: Iterative

```ts
function plusOne(digits: number[]): number[] {
  let index = digits.length - 1;

  if (digits[index] < 9) {
    digits[index] += 1;
    return digits;
  }

  digits[index] += 1;

  while (digits[index] > 9) {
    digits[index] %= 10;
    if (index - 1 < 0) {
      return [1, ...digits];
    } else {
      digits[index - 1] += 1;
    }
    --index;
  }
  return digits;
}
```

`digits` 리스트를 순회하고 끝이기 때문에 시간 복잡도는 **O(N)**.
