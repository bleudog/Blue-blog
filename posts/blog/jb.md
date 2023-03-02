---
title: 'How to sort integers correctly in JavaScript'
posttitle: 'How to sort integers correctly in JavaScript'
date: '2023-01-04 05:30:00'
uid: '68'
---

Given an array of integers `[11, 17, 2, 5, 3, 0, 9]`, we want to sort this array in numerical order.

We can use the built-in `sort()` method.

```js
let arr = [11, 17, 2, 5, 3, 0, 9];
arr.sort();
```

Did it work? Let's take a look at the output of `arr.sort()`.

```text
> [0, 11, 17, 2, 3, 5, 9]
```

It's not quite right 🤔

You might have noticed from the order of `11` and `17`, but the default ordering for `sort()` is lexicographic (alphabetical order).

In order to sort integers numerically, we need to pass in a compare function.

```js
let arr = [11, 17, 2, 5, 3, 0, 9];
const integerCompareFunction = (a, b) => a - b;

arr.sort(integerCompareFunction);
// [0, 2, 3, 5, 9, 11, 17]
```

We can also pass in an arrow function directly to the `sort()` method.

```js
let arr = [11, 17, 2, 5, 3, 0, 9];

arr.sort((a, b) => a - b);
// [0, 2, 3, 5, 9, 11, 17]
```
