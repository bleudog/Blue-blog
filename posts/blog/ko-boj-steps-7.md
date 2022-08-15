---
title: 'BOJ 07: 기본 수학 (w.i.p)'
date: "2022-08-13 14:20:00"
tags: [BaekjoonOJ]
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 [기본 수학 1](https://www.acmicpc.net/step/8) 문제 풀이입니다.

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

---

# 2292 벌집

벌집이 형성되는 규칙에 따라 벌집의 위치를 구하는 문제

```rust
// https://www.acmicpc.net/problem/2292
```

---

# 1193 분수찾기

분수의 순서에서 규칙을 찾는 문제

```rust
// https://www.acmicpc.net/problem/1193
```

---

# 10250 ACM 호텔	

호텔 방 번호의 규칙을 찾아 출력하는 문제

```rust
// https://www.acmicpc.net/problem/10250
```

---

# 2775 부녀회장이 될테야

층과 거주자 수의 규칙을 찾는 문제

```rust
// https://www.acmicpc.net/problem/2775
```

---

# 2839 설탕 배달	

5와 3을 최소 횟수로 합하여 N을 만드는 문제

```rust
// https://www.acmicpc.net/problem/2839
```

---

# 10757 큰 수 A+B

파이썬 같은 언어는 10,000자리 정도의 자연수도 자유롭게 다룰 수 있습니다. 하지만 C/C++이라면 이 문제를 어떻게 풀까요? C/C++ 사용자가 아니더라도 고민해 보면 좋을 것입니다.

```rust
// https://www.acmicpc.net/problem/10757
```