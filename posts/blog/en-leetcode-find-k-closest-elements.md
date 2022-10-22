---
title: '0658. Find K Closest Elements'
posttitle: 'Leetcode #0658'
postsubtitle: 'Find K Closest Elements'
date: '2022-09-30 05:30:00'
tags:
  - leetcode
  - medium
lang: en
about: cp
---

## 0658. Find K Closest Elements

[https://leetcode.com/problems/find-k-closest-elements/](https://leetcode.com/problems/find-k-closest-elements/)

## Problem Statement

Given a **sorted** integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order.

An integer `a` is closer to `x` than an integer `b` if:

- `|a - x| < |b - x|`, or
- `|a - x| == |b - x|` and `a < b`

**Example 1:**

```text
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
```

**Example 2:**

```text
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
```

## Approach

At first I tried using a hashmap, but I forgot that it doesn't store duplicated keys. So I just use a `vector` with a `pair<int, int>`, which is going to be `pair<|a-x|, a>`.

Then, I'll simply grab the first `k` elements from `vector<pair<int, int>>` and that'll be the answer.

## Code

### C++

```cpp
class Solution {
public:
    vector<int> findClosestElements(vector<int>& arr, int k, int x) {
        vector<pair<int, int>> m;
        for(int &a : arr)
            m.push_back(make_pair(abs(a-x), a));

        sort(m.begin(), m.end());
        m.push_back(make_pair(99999999, 1));

        vector<int> ans;
        for(int i=0; i<k; ++i)
            ans.push_back(m[i].second);

        sort(ans.begin(), ans.end());

        return ans;
    }
};
```

- Time Complexity: O(n + n logn) which becomes **O(n logn)**. `n` is the length of the list.
- Space Complexity: **O(n)** because we're using an extra vector storage to store `n` or `arr.length` elements.
