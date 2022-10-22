---
title: "0118. Pascal's Triangle"
posttitle: 'Leetcode #0118'
postsubtitle: "Pascal's Triangle"
date: '2022-09-19 07:30:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 0118. Pascal's Triangle

https://leetcode.com/problems/pascals-triangle/

## Problem Statement

Given an integer numRows, return the first numRows of Pascal's triangle.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

![pascal's triangle](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

Example 1:

```text
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

Example 2:

```text
Input: numRows = 1
Output: [[1]]
```

## Approach

Draw it out and you can see that position `[i][j]` is a sum of `[i-1][j-1] + [i-1][j]`.

```text
pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
```

## Code

### C++

My failed attempt:

```cpp
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> pascal(31);
        pascal[0].push_back(1);

        if (numRows == 1) return pascal;

        for(int i=1; i<=numRows; ++i) {
            for(int j=0; j<=numRows; ++j) {
                if(j==0 || j==numRows)
                    pascal[i].push_back(1);
                else
                    pascal[i].push_back(pascal[i-1][j-1] + pascal[i-1][j]);
            }
        }

        return pascal;
    }
};
```

solution:

```cpp
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        auto pascal = vector<vector<int>>(numRows);
        for(auto i=size_t(); i<numRows; ++i) {
            pascal[i] = vector<int>(i+1, 1);

            for(auto j=size_t(1); j<i; ++j) {
                pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
            }
        }

        return pascal;
    }
};
```

- Time Complexity: **O(n^2)** where `n` is number of rows.
- Space Complexity: I'm not 100% sure but I think it's **O(n^2)**, because if you look at the way pascal values grow, it wont ever reach `n^2`.
