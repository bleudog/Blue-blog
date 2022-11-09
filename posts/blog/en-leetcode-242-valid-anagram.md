---
title: '0242. Valid Anagram'
posttitle: 'Leetcode #0242'
postsubtitle: 'Valid Anagram'
date: '2022-11-10 08:40:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

# 0242. Valid Anagram

https://leetcode.com/problems/valid-anagram/

## Problem Statement

Given two strings `s` and `t`, return `true` _if_ `t` _is an anagram of_ `s`_, and_ `false` _otherwise_.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```text
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**

```text
Input: s = "rat", t = "car"
Output: false
```

## TypeScript

### Naive Approach

```ts
function isAnagram(s: string, t: string): boolean {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  return s === t;
}
```

#### Complexity

Time complexity would be **O(nlogn)** because of the internal `sort()`

### Hashmap

```ts
function isAnagram(s: string, t: string): boolean {
  let smap = new Map<string, number>();
  let tmap = new Map<string, number>();
  if (s.length < t.length) {
    let temp = s;
    s = t;
    t = temp;
  }

  for (const ch of s) {
    let x = 0;
    if (smap.has(ch)) {
      x = smap.get(ch) || 0;
    }

    smap.set(ch, x + 1);
  }

  for (const ch of t) {
    let x = 0;
    if (tmap.has(ch)) {
      x = tmap.get(ch) || 0;
    }

    tmap.set(ch, x + 1);
  }

  for (const kv of smap) {
    if (kv[1] !== tmap.get(kv[0])) {
      return false;
    }
  }

  return true;
}
```

Slightly optimized code.

```ts
function isAnagram(s: string, t: string): boolean {
  let mp = new Map<string, number>();

  for (const ch of s) {
    mp.set(ch, (mp.get(ch) || 0) + 1);
  }

  for (const ch of t) {
    mp.set(ch, (mp.get(ch) || 0) - 1);
  }

  for (const kv of mp) {
    if (kv[1] !== 0) return false;
  }

  return true;
}
```

#### Complexity

Time complexity would be **O(n + m)** where `n = s.length` and `m = t.length`.
