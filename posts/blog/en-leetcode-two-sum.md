---
title: '0001. Two Sum'
posttitle: 'Leetcode #0001'
postsubtitle: 'Two Sum'
date: '2022-08-18 06:50:00'
tags:
  - leetcode
  - top interview questions
  - easy
  - rust
  - typescript
lang: en
about: cp
---

## 0001. Two Sum

https://leetcode.com/problems/two-sum/

## Problem Statement

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

**Example 1:**

```text
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```text
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```text
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Rust

### Naive Approach

```rust
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut res: Vec<i32> = vec![];

        for i in 0..nums.len() {
            for j in (i+1)..nums.len() {
                if nums[i as usize] + nums[j as usize] == target {
                    res.push(i as i32);
                    res.push(j as i32);
                    return res;
                }
            }
        }

        res
    }
}
```

---

### HashMap

`std::collections:HashMap` ([doc](https://doc.rust-lang.org/std/collections/struct.HashMap.html)).

The syntax for inserting an item:

```rust
// pub fn insert(&mut self, k: K, v: V) -> Option<V>
let mut map: HashMap<i32, i32> = HashMap::new();
map.insert(K, V);
```

Check if key exists:

```rust
// pub fn contains_key<Q: ?Sized>(&self, k: &Q) -> bool
map.contains_key(&k)
```

Solution:

```rust
use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut res: Vec<i32> = vec![];
        let mut map: HashMap<i32, i32> = HashMap::new();

        for i in 0..nums.len() {
            let v: i32 = target - nums[i as usize];
            if map.contains_key(&nums[i as usize]) {
                res.push(*(map.get(&nums[i as usize]).unwrap()));
                res.push(i as i32);
                break;
            }

            map.insert(v, i as i32);
        }

        res
    }
}
```

---

## TypeScript

### Bruteforce

```ts
function twoSum(nums: number[], target: number): number[] {
  const SIZE = nums.length;
  let i = 0;
  let j = 0;

  loop: for (; i < SIZE - 1; ++i) {
    for (j = i + 1; j < SIZE; ++j) {
      if (nums[i] + nums[j] === target) {
        break loop;
      }
    }
  }

  return [i, j];
}
```

- Time complexity: O(N^2)

---

### HashMap

```ts
function twoSum(nums: number[], target: number): number[] {
  let mp = new Map<number, number>();
  const SIZE = nums.length;

  for (let i = 0; i < SIZE + 1; ++i) {
    let v = mp.get(nums[i]);
    if (v !== undefined) {
      return [v, i];
    }
    mp.set(target - nums[i], i);
  }

  return [];
}
```

브라우저 엔진에 따라 내부 구현이 다른 것 같다.
HashMap을 사용한 경우 get/set은 O(1)이기에 최종 시간 복잡도는 O(n) (`n = nums.length`).

만약 내부적으로 트리를 사용했다면 get/set은 O(logn)이므로 최종 시간 복잡도는 O(n\*logn)이 될 것 같다.

> The specification requires maps to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).

Ref: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
