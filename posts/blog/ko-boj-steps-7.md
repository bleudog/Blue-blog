---
title: 'BOJ 07: 기본 수학 (in progress)'
date: "2022-08-13 14:20:00"
tags: [BaekjoonOJ]
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 [기본 수학 1](https://www.acmicpc.net/step/8) | [기본 수학 2](https://www.acmicpc.net/step/10) 문제 풀이입니다.

# 1712 손익분기점

이익이 발생하는 지점을 찾는 문제.

```rust
// https://www.acmicpc.net/problem/1712

use std::io;

fn main() {
	let mut s = String::new();
	io::stdin().read_line(&mut s).unwrap();
	let nums: Vec<u32> = s.split_whitespace().map(|x| x.parse().unwrap()).collect();

	let a = nums[0];
	let b = nums[1];
	let c = nums[2];

	if b >= c {
		println!("{}", -1);
	} else {
		println!("{}", a/(c-b) + 1);
	}
}
```

---

# 2869 달팽이는 올라가고 싶다

달팽이의 움직임을 계산하는 문제.

```rust
// https://www.acmicpc.net/problem/2869

use std::io;

fn main() {
	let mut s = String::new();
	io::stdin().read_line(&mut s).unwrap();
	let nums: Vec<i32> = s.split_whitespace().map(|x| x.parse().unwrap()).collect();

	let a = nums[0];
	let b = nums[1];
	let v = nums[2];

	let n = (v-b-1)/(a-b)+1;
	println!("{}", n);
}
```