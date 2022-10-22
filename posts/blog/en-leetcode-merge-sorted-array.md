---
title: '0088. Merge Sorted Array'
posttitle: 'Leetcode #0088'
postsubtitle: 'Merge Sorted Array'
date: '2022-09-16 11:00:00'
updated: '2022-10-22 21:00:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 0088. Merge Sorted Array

https://leetcode.com/problems/merge-sorted-array/

## Problem Statement

You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

**Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

**Example 1:**

```text
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Explanation: The arrays we are merging are `[1,2,3]` and `[2,5,6]`.
The result of the merge is `[1,2,2,3,5,6]` with the underlined elements coming from `nums1`.
```

**Example 2:**

```text
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]

Explanation: The arrays we are merging are `[1]` and `[]`.
The result of the merge is `[1]`.
```

**Example 3:**

```text
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]

Explanation: The arrays we are merging are `[]` and `[1]`.
The result of the merge is `[1]`.
Note that because `m = 0`, there are no elements in `nums1`. The `0` is only there to ensure the merge result can fit in `nums1`.
```

## Approach

There are two ways that I can think of to solve this problem.

1. merge two arrays into one and sort them.
2. sort them as you merge the array.

## C++

### Method 1

**O(nlogn)** solution: merge two arrays into one and sort them.

```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        if(n == 0) return;
        if(m == 0) {
            for(int i=0; i<n; ++i)
                nums1[i] = nums2[i];
            return;
        }

        for(int i=0; i<n; ++i) {
            nums1[i+m] = nums2[i];
        }

        sort(nums1.begin(), nums1.end());
    }
};
```

The constraints for `m` and `n` are both `<= 200`.
200\*200 is only 40000 meaning we can use any slowest sorting algorithm to solve this.

So I just used a bulit-in `sort` algorithm which is O(NlogN).

Whatever sorting algorithm you use, the time complexity of your sort will be the worst time complexity for this approach.

The space complexity is **O(n)** because of sorting.

### Method 2

**O(M + N)** solution: sort the array as you merge the array.

```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int p1 = m-1;
        int p2 = n-1;
        int i = m+n-1;

        while(p2 >= 0) {
            if(p1 >= 0 && nums1[p1] > nums2[p2])
                nums1[i--] = nums1[p1--];
            else
                nums1[i--] = nums2[p2--];
        }
    }
};
```

As we move a value from `nums2` to `nums1`, we're going to compare the two and decide whether to insert the value from `nums2` or move over existing value in `nums1`.

This is the part:

```cpp
if(p1 >= 0 && nums1[p1] > nums2[p2])
    // move existing value in nums1
    nums1[i--] = nums1[p1--];
else
    // insert values in nums2
    nums1[i--] = nums2[p2--];
```

The space complexity is **O(1)**.

## TypeScript

### Method 1

처음 문제를 봤을 때 딱 떠오른 방법. 그냥 단순히 두 리스트를 머지하는 것 처럼 비교하고 새로운 배열에 하나하나 추가한다. 그리고 마지막에 `nums1`에 덮어씌운다.

in-place라고 했으니... 반칙일수도..

```ts
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0;
  let j = 0;
  let pos = 0;
  let res: number[] = new Array(m + n);

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      res[pos] = nums1[i];
      ++i;
    } else {
      res[pos] = nums2[j];
      ++j;
    }
    ++pos;
  }

  while (i < m) {
    res[pos++] = nums1[i++];
  }

  while (j < n) {
    res[pos++] = nums2[j++];
  }

  for (let i = 0; i < n + m; ++i) {
    nums1[i] = res[i];
  }
}
```

- 시간 복잡도: **O(m+n)**
- 공간 복잡도: **O(m+n)**

### Method 2: In-place

```ts
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let pos = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[pos--] = nums1[i--];
    } else {
      nums1[pos--] = nums2[j--];
    }
  }
}
```

- 시간 복잡도: **O(m+n)**
- 공간 복잡도: **O(1)**
