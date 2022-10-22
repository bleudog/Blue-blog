---
title: '0079. Word Search'
posttitle: 'Leetcode #0079'
postsubtitle: 'Word Search'
date: '2022-09-28 07:30:00'
tags:
  - leetcode
  - medium
  - backtracking
lang: en
about: cp
---

## 0079. Word Search

https://leetcode.com/problems/word-search/

## Problem Statement

Given an `m x n` grid of characters `board` and a string `word`, return `true` _if_ `word` _exists in the grid_.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

**Example 1:**
![Sample1](https://assets.leetcode.com/uploads/2020/11/04/word2.jpg)

```text
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
```

**Example 2:**
![Sample2](https://assets.leetcode.com/uploads/2020/10/15/word3.jpg)

```text
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
```

## Approach

Since we can't use the same letter twice, we just need to find the position of `word[0]`. Then, we'll proceed with checking all 4 directions using DFS.

## Code

### C++

```cpp
class Solution {
public:
    bool dfs(vector<vector<char>>& board, string word, int i, int j, int n) {
        if(n == word.size()) return true;

        if(i<0 || i>=board.size()) return false;
        if(j<0 || j>=board[i].size()) return false;
        if(board[i][j] != word[n]) return false;

        // visited
        board[i][j] = '0';

        // check 4 directions
        bool status = dfs(board, word, i+1, j, n+1) || // down
                      dfs(board, word, i, j+1, n+1) || // right
                      dfs(board, word, i-1, j, n+1) || // up
                      dfs(board, word, i, j-1, n+1);   // left

        // change character back for next search
        board[i][j] = word[n];

        return status;
    }

    bool exist(vector<vector<char>>& board, string word) {
        if(word.empty()) return false;

        for(int i=0; i<board.size(); ++i) {
            for(int j=0; j<board[i].size(); ++j) {
                if(board[i][j] == word[0] && dfs(board, word, i, j, 0))
                    return true;
            }
        }

        return false;
    }
};
```

### Time Complexity

- `N` = row
- `M` = column
- `L` = length of a word

Worst time complexity would be **O(N・M・4^L)**.

I think it's `4^L` because for every `dfs`, we're checking 4 directions.
