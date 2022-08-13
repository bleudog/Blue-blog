---
title: 'BOJ 08: 기본 수학 2 - 소수 (in progress)'
date: "2022-08-13 22:50gi:00"
tags: [BaekjoonOJ]
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 [기본 수학 2](https://www.acmicpc.net/step/10) 문제 풀이입니다.

# 1978 소수 찾기

2부터 X-1까지 모두 나눠서 X가 소수인지 판별하는 문제 1

```rust
// https://www.acmicpc.net/problem/1978

use std::io;

fn is_prime(x: i32) -> bool {
	if x <= 1 { return false; }
	if x <= 3 { return true; }

	let mut i = 2;
	while i < x {
		if x%i == 0 { return false; }

		i += 1;
	}

	return true;
}

fn main() {
	let mut s = String::new();
	io::stdin().read_line(&mut s).unwrap();
	s = String::new();
	io::stdin().read_line(&mut s).unwrap();

	let mut cnt = 0;
	for x in s.trim_end().split_whitespace() {
		if is_prime(x.parse::<i32>().unwrap()) == true { cnt += 1; }
	}

	println!("{}", cnt);
}
```

---

# 2581 소수

2부터 X-1까지 모두 나눠서 X가 소수인지 판별하는 문제 2

```rust
// https://www.acmicpc.net/problem/2581

use std::io;

fn is_prime(x: i32) -> bool {
	if x <= 1 { return false; }
	if x <= 3 { return true; }

	let mut i = 2;
	while i*i <= x {
		if x%i == 0 { return false; }

		i += 1;
	}

	return true;
}

fn range_prime(n: i32, m: i32) -> (i32, i32) {
	let mut sum = 0;
	let mut min = 10000;
	for i in n..m {
		if is_prime(i as i32) == true {
			sum += i;
			if (i as i32) < min {
				min = i as i32;
			}
		}
	}

	return (sum, min);
}

fn main() {
	let mut s = String::new();
	io::stdin().read_line(&mut s).unwrap();
	let n = s.trim().parse().unwrap();
	s = String::new();
	io::stdin().read_line(&mut s).unwrap();
	let m = s.trim().parse().unwrap();

	let (sum, min) = range_prime(n, m);

	if sum == 0 {
		println!("{}", -1);
	} else {
		println!("{}\n{}", sum, min);
	}
}
```

---

# 11653 소인수분해

N을 소인수분해하는 문제

```rust
// https://www.acmicpc.net/problem/11653

use std::io::{stdin};

fn prime_factorization(x: i32) {
	let mut n = x;
	let mut target = 2;
	while n > 1 {
		if n % target == 0 {
			println!("{}", target);
			n /= target;
		} else {
			target += 1;
		}
	}
}

fn main() {
	let mut s = String::new();
	stdin().read_line(&mut s).unwrap();
	let n = s.trim().parse().unwrap();

	prime_factorization(n);
}
```

---

# 1929 소수 구하기

더 빠르게 소수를 판별하는 문제

```rust
// https://www.acmicpc.net/problem/1929

use std::io::{stdin};
use std::fmt::Write;

fn is_prime(n: i32) -> bool {
	if n < 2 { return false; }
	if n <= 3 { return true; }

	if (n % 2 == 0) || (n % 3 == 0) { return false; }

	let mut i = 5;
	while i*i <= n {
		if (n % i == 0) || (n % (i+2) == 0) { return false; }
		i += 6;
	}

	return true;
}

fn main() {
	let mut s = String::new();
	stdin().read_line(&mut s).unwrap();
	let nums: Vec<i32> = s.trim().split_whitespace().map(|x| x.parse().unwrap()).collect();

	let mut w = String::new();
	for i in nums[0]..=nums[1] {
		if is_prime(i) {
			writeln!(&mut w, "{}", i).unwrap();
		}   
	}

	println!("{}", w);
}
```
