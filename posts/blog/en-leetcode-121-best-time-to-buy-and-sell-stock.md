---
title: '0121. Best Time to Buy and Sell Stock'
posttitle: 'Leetcode #0121'
postsubtitle: 'Best Time to Buy and Sell Stock'
date: '2022-11-06 13:18:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

## 0121. Best Time to Buy and Sell Stock

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

## Problem Statement

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return _the maximum profit you can achieve from this transaction_. If you cannot achieve any profit, return `0`.

**Example 1:**

```text
Input: prices = [7,1,5,3,6,4]
Output: 5

Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

**Example 2:**

```text
Input: prices = [7,6,4,3,1]
Output: 0

Explanation: In this case, no transactions are done and the max profit = 0.
```

## TypeScript

```ts
function maxProfit(prices: number[]): number {
  let maxp = 0;
  let minp = prices[0];
  const len = prices.length;

  for (let i = 1; i < len; ++i) {
    minp = Math.min(minp, prices[i]);
    maxp = Math.max(maxp, prices[i] - minp);
  }

  return maxp;
}
```

### Time Complexity

**O(N)** because we're iterating the list exactly once.
