---
title: "0118. Pascal's Triangle"
posttitle: 'Leetcode #0118'
postsubtitle: "Pascal's Triangle"
date: '2022-09-19 07:30:00'
updated: '2022-11-06 07:25:00'
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

## C++

### Approach

Draw it out and you can see that position `[i][j]` is a sum of `[i-1][j-1] + [i-1][j]`.

```text
pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
```

### Code

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

### Complexity

- Time Complexity: **O(n^2)** where `n` is number of rows.
- Space Complexity: I'm not 100% sure but I think it's **O(n^2)**, because if you look at the way pascal values grow, it wont ever reach `n^2`.

## TypeScript

### Approach

![image](/images/posts/leetcode/118-pascal.jpg)

- first and last one is always 1.
- anything between can be calculated using this formula: `arr[row][col] = arr[row - 1][col-1] + arr[row-1][col]`

```text
genPascal(r: number): number[][]
    Pre: r is the number of rows we'll going to generate pascal's triangle upto
    Post: we've generated pascal's triangle

    arr ← new Array[r]
    arr FOR_EACH row SET row ← new Array[r]

    FOR (row=0 to row<r)
        FOR (col=0 to col<=row)
            IF (col == 0 || col == row)
                arr[row][col] = 1
            ELSE
                arr[row][col] = arr[row-1][col-1] + arr[row-1][col]
            END IF
        END FOR
    END FOR
END genPascal
```

### Code

```ts
function generate(r: number): number[][] {
  let arr: number[][] = new Array(r);
  for (let i = 0; i < r; ++i) {
    arr[i] = [];
  }

  for (let row = 0; row < r; ++row) {
    for (let col = 0; col <= row; ++col) {
      if (0 === col || row === col) {
        arr[row].push(1);
      } else {
        arr[row].push(arr[row - 1][col - 1] + arr[row - 1][col]);
      }
    }
  }

  return arr;
}
```

### Complexity

#### Time Complexity

We're repeating the inner loop $1, 2, 3, ..., n-1, n$ times which leads to $O(n^2)$ worst time complexity.

#### Space Complexity

We're creating $n*(n+1)/2$ extra spaces (e.g. 15 extra spaces for $row = 5$). The worst space complexity is going to be $O(N^2)$.
