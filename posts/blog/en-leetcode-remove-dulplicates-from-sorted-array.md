---
title: '0026. Remove Duplicates from Sorted Array'
posttitle: 'Leetcode #0026'
postsubtitle: 'Remove Duplicates from Sorted Array'
date: '2022-10-22 22:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 26. Remove Duplicates from Sorted Array

https://leetcode.com/problems/remove-duplicates-from-sorted-array/

## Approach

- 리스트의 크기로 사용 할 변수를 하나 선언 -> `pos`. `pos`가 리스트의 실제 크기가 된다.
- `nums` 리스트를 순회하면서 두 값 (`[i] != [i-1]`) 이 다를 경우, `pos`위치에 `i`번째 값을 덮어씌운다.

## Code

```ts
function removeDuplicates(nums: number[]): number {
  const SIZE = nums.length;
  let pos = 1;

  for (let i = 1; i < SIZE; ++i) {
    if (nums[i] !== nums[i - 1]) {
      nums[pos] = nums[i];
      ++pos;
    }
  }

  return pos;
}
```

- Time Complexity: `nums` 리스트 크기만큼 순회하기 때문에 **O(N)**.
