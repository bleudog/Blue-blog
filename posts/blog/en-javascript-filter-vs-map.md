---
title: 'JavaScript filter vs. map'
posttitle: 'JavaScript filter() vs. map()'
date: '2023-02-13 11:45:00'
tags:
  - javascript
lang: en
about: dev
---

## Array.prototype.filter
`filter()` function calls predicate function on each element and filters out one that passes a test.

![predicate](/images/posts/dev/javascript/predicate.png)

```js
let nums = [0, 1, 2, 3, 4, 5, 6];
nums.filter(x => x * 2); // [1, 2, 3, 4, 5, 6]
```

The predicate function we used to determine whether to filter out the element or not is `x * 2`. In JavaScript, non-zero values are regarded as `true`. So every element except `0` were filtered out because `0 * 2` is `0` which is `false`.

## Array.prototype.map

`map()` function creates a new array filled with elements resulted from a callback function and returns it.

![callback](/images/posts/dev/javascript/callback.png)

```js
let nums = [0, 1, 2, 3, 4, 5, 6];
nums.map(x => x * 2); // [0, 2, 4, 6, 8, 10, 12];
```

`map(callback)` function executes callback on each element and stores the data in a new array then returns it when all elements were processed. 

## Summary

The `filter` function focuses on selecting elements from the original array while `map` function focuses on creating a new array using the original data.