---
title: '0001. Two Sum'
posttitle: 'Leetcode #0001'
postsubtitle: 'Two Sum'
date: '2022-08-18 06:50:00'
tags:
  - leetcode
  - top interview questions
  - easy
lang: en
about: cp
---

# Naive Approach

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

# HashMap

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
