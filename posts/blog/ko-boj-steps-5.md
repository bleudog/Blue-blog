---
title: 'BOJ 05: 함수'
date: "2022-08-13 10:39:00"
tags: [BaekjoonOJ]
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 다섯 번째 단계 [함수](https://www.acmicpc.net/step/5)의 풀이입니다.

# 1065. 한수

X가 한수인지 판별하는 함수를 정의하여 문제를 해결해 봅시다.

```rust
// https://www.acmicpc.net/problem/1065

use std::io;

fn hansoo(n: i32) -> i32 {
	if n < 100 { return n; }
	if n < 110 { return 99; }
	if n == 1000 { return 144; }

	let mut cnt = 99;

	for i in 111..=n {
		let a = i/100;
		let b = (i%100)/10;
		let c = i%10;

		if b-a == c-b { cnt += 1; }
	}

	cnt
}

fn main() {
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();
	let x = buf.trim().parse().unwrap();

	println!("{}", hansoo(x));
}
```

---

# 4673. Self Number

함수 d를 정의하여 셀프넘버를 구하는 문제.

```rust
// https://www.acmicpc.net/problem/4673

fn d(n: i32) -> i32 {
	let mut temp = n;
	let mut sum = n;

	while temp > 0 {
		sum += temp%10;
		temp /= 10;
	}

	return sum;
}

fn main() {
	let mut self_number: [bool; 10001] = [true; 10001];

	for i in 1..10000 {
		if self_number[i] == false {
			continue;
		}

		println!("{}", i);

		let mut x = i as i32;
		while x < 10000 {
			self_number[x as usize] = false;
			x = d(x);
		}
	}
}
```

---

# 15596. 정수 N개의 합

이 문제는 C, C++, Python, Java, Go만 지원하기 때문에 C++로 풀었습니다.

```cpp
#include <vector>
long long sum(std::vector<int> &a) {
    long long ans = 0;
    for(int i=0; i<a.size(); ++i) {
        ans += a[i];
    }
    return ans;
}
```