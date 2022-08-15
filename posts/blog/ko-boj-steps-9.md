---
title: 'BOJ 09: 재귀 (w.i.p)'
date: "2022-08-14"
tags: [BaekjoonOJ]
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 아홉 번째 단계 [재귀](https://www.acmicpc.net/step/19) 풀이입니다.

# 10872 팩토리얼	

팩토리얼은 단순 for문으로도 구할 수 있지만, 학습을 위해 재귀를 써 봅시다.

```rust
// https://www.acmicpc.net/problem/10872

use std::io::{stdin};

fn factorial(n: i32) -> i32 {
	if n<=1 {return 1;}
	return n * factorial(n-1);
}

fn main() {
	let mut s = String::new();
	stdin().read_line(&mut s).unwrap();
	let n = s.trim().parse().unwrap();

	println!("{}", factorial(n));
}
```

---

# 10870 피보나치 수 5	

피보나치 수 역시 단순 for문으로도 구할 수 있지만, 학습을 위해 재귀를 써 봅시다.

```rust
// https://www.acmicpc.net/problem/10870

use std::io::{stdin};

fn fibo(n: i32) -> i32 {
	if n==0 {return 0;}
	if n<=2 {return 1;}
	return fibo(n-2) + fibo(n-1);
}

fn main() {
	let mut s = String::new();
	stdin().read_line(&mut s).unwrap();
	let n = s.trim().parse().unwrap();

	println!("{}", fibo(n));
}
```

---

# 17478 재귀함수가 뭔가요?	

재귀함수를 배우면서 재귀함수를 배우는 문제

```rust
// https://www.acmicpc.net/problem/17478

use std::io::{stdin};

fn sage(n: i32, lv: i32) {
	if lv == 0 {
		println!("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
	}

	let mut str = "".to_string();
	for _ in 0..lv { str += "____"; }

	println!("{}\"재귀함수가 뭔가요?\"", str);

	if lv == n {
		println!("{}\"재귀함수는 자기 자신을 호출하는 함수라네\"", str);
	} else {
		println!("{}\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.", str);
		println!("{}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.", str);
		println!("{}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\"", str);
		sage(n, lv+1);
	}

	println!("{}라고 답변하였지.", str);
}

fn main() {
	let mut s = String::new();
	stdin().read_line(&mut s).unwrap();
	let n = s.trim().parse().unwrap();

	sage(n, 0);
}
```

---

# 2447 별 찍기 - 10

재귀적인 패턴을 재귀함수로 찍는 문제

```rust
// https://www.acmicpc.net/problem/2447
```

---

# 11729 하노이 탑 이동 순서

재귀적인 패턴을 찾아서 재귀함수로 찍는 문제
```rust
// https://www.acmicpc.net/problem/11729
```
