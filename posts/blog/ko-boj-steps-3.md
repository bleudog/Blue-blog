---
title: 'BOJ 03: Loops'
posttitle: 'Baekjoon OJ'
postsubtitle: 'Part 03 - Loops'
date: '2022-08-12'
tags:
	- BaekjoonOJ
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 세 번째 단계 [반복문](https://www.acmicpc.net/step/3)의 풀이입니다.

# 2739. 구구단

구구단을 출력하는 문제.

```rust
// https://www.acmicpc.net/problem/2739

use std::io;

fn main() {
    let mut s = String::new();
    io::stdin().read_line(&mut s).unwrap();

    let x = s.trim().parse::<i32>().unwrap();

    for i in 1..=9 {
        println!("{} * {} = {}", x, i, x*i);
    }
}
```

---

# 10950. A + B - 3

A+B를 여러 번 출력하는 문제.

```rust
// https://www.acmicpc.net/problem/10950

use std::io;

fn read() -> i32 {
    let mut s = String::new();
    io::stdin().read_line(&mut s).unwrap();
    return s.trim().parse().unwrap();
}

fn main() {
    let mut t = read();
    while t > 0 {
        let mut s = String::new();
        io::stdin().read_line(&mut s).unwrap();

        let nums: Vec<i32> = s.split_whitespace().map( |n| n.parse().unwrap()).collect();

        println!("{}", nums[0]+nums[1]);
        t -= 1;
    }
}
```

---

# 8393. Sum

1부터 N까지의 합을 구하는 문제. 물론 반복문 없이 풀 수도 있습니다.

```rust
// https://www.acmicpc.net/problem/8393
use std::io;

fn read() -> i32 {
    let mut s = String::new();
    io::stdin().read_line(&mut s).unwrap();
    return s.trim().parse().unwrap();
}

fn main() {
    let x = read();
    println!("{}", x*(x+1)/2);
}
```

---

# 25304. 영수증

```rust
// https://www.acmicpc.net/problem/25304

use std::io;

fn read() -> i32 {
    let mut s = String::new();
    io::stdin().read_line(&mut s).unwrap();
    return s.trim().parse().unwrap();
}

fn main() {
    let total_cost = read();
    let n = read();
    let mut sum = 0;

    for i in 0..n {
        let mut s = String::new();
        io::stdin().read_line(&mut s).unwrap();

        let nums: Vec<i32> = s.split_whitespace().map( |n| n.parse().unwrap()).collect();

        sum += nums[0]*nums[1];
    }

    if sum == total_cost {
        println!("Yes");
    } else {
        println!("No");
    }
}
```

---

# 15552. 빠른 A+B

빠르게 입력받고 출력하는 문제.

```rust
// https://www.acmicpc.net/problem/15552

use std::io::{Read, stdin};
use std::fmt::Write;

fn main() {
    let mut buf = String::new();
    stdin().read_to_string(&mut buf).unwrap();
    let mut arr = buf.split_whitespace().map(|x| x.parse::<i32>().unwrap());
    let mut w = String::new();
    let mut num = || arr.next().unwrap();

    for _ in 0..num() {
        let y = num() + num();
        writeln!(&mut w, "{}", y).unwrap();
    }

    println!("{}", w);
}
```

---

# 11021. A+B - 7

A+B를 조금 더 아름답게 출력하는 문제.

```rust
// https://www.acmicpc.net/problem/11021

use std::io;

fn main() {
	let mut buffer = String::new();
	let stdin = io::stdin();
	stdin.read_line(&mut buffer).unwrap();
	let t = buffer.trim().parse().unwrap();

	for i in 0..t {
		buffer = String::new();
		stdin.read_line(&mut buffer).unwrap();
		let nums: Vec<&str> = buffer.split_whitespace().collect();
		let x = nums[0].parse::<i32>().unwrap();
		let y = nums[1].parse::<i32>().unwrap();
		println!("Case #{}: {}", i+1, x+y);
	}
}
```

---

# 11022. A+B - 8

A+B를 바로 위 문제보다 아름답게 출력하는 문제.

```rust
// https://www.acmicpc.net/problem/11022

use std::io;

fn main() {
	let mut buffer = String::new();
	let stdin = io::stdin();
	stdin.read_line(&mut buffer).unwrap();
	let t = buffer.trim().parse().unwrap();

	for i in 0..t {
		buffer = String::new();
		stdin.read_line(&mut buffer).unwrap();
		let nums: Vec<&str> = buffer.split_whitespace().collect();
		let x = nums[0].parse::<i32>().unwrap();
		let y = nums[1].parse::<i32>().unwrap();
		println!("Case #{}: {} + {} = {}", i+1, x, y, x+y);
	}
}
```

---

# 2438. 별 찍기 - 1

별을 찍는 문제 1

```rust
// https://www.acmicpc.net/problem/2438

use std::io;

fn main() {
	let mut buffer = String::new();
	let stdin = io::stdin();
	stdin.read_line(&mut buffer).unwrap();
	let n = buffer.trim().parse().unwrap();

	for i in 0..n {
		for _ in 0..i+1 {
			print!("*");
		}
		println!();
	}
}
```

---

# 2439. 별 찍기 - 2

별을 찍는 문제 2

```rust
// https://www.acmicpc.net/problem/2439

use std::io;

fn main() {
	let mut buffer = String::new();
	let stdin = io::stdin();
	stdin.read_line(&mut buffer).unwrap();
	let n = buffer.trim().parse().unwrap();

	for i in 0..n {
		for _ in 0..n-(i+1) {
			print!(" ");
		}
		for _ in 0..i+1 {
			print!("*");
		}
		println!();
	}
}
```

---

# 10871. X보다 작은 수

for와 if를 같이 쓰는 문제.

```rust
// https://www.acmicpc.net/problem/10871

use std::io;

fn main() {
	let mut buffer = String::new();
	let stdin = io::stdin();
	stdin.read_line(&mut buffer).unwrap();
	let nums: Vec<i32> = buffer.split_whitespace().map(|x| x.parse().unwrap()).collect();

	buffer = String::new();
	stdin.read_line(&mut buffer).unwrap();

	for v in buffer.split_whitespace() {
		if v.parse::<i32>().unwrap() < nums[1] {
			print!("{} ", v);
		}
	}
}
```

---

# 10952. A+B - 5

0 0이 들어올 때까지 A+B를 출력하는 문제.

```rust
// https://www.acmicpc.net/problem/10952

use std::io;

fn main() {
	loop {
		let mut buffer = String::new();
		let stdin = io::stdin();
		stdin.read_line(&mut buffer).unwrap();
		let nums: Vec<i32> = buffer.split_whitespace().map(|x| x.parse().unwrap() ).collect();
		if nums[0]==0 && nums[1] == 0 {
			break;
		}
		println!("{}", nums[0] + nums[1]);
	}
}
```

---

# 10951. A+B - 4

입력이 끝날 때까지 A+B를 출력하는 문제. EOF에 대해 알아 보세요.

```rust
// https://www.acmicpc.net/problem/10951

use std::io;

fn main() {
	loop {
		let mut buffer = String::new();
		let stdin = io::stdin();
		let bytes = stdin.read_line(&mut buffer).unwrap();
		if bytes == 0 {
			break;
		}
		let nums: Vec<i32> = buffer.split_whitespace().map(|x| x.parse().unwrap() ).collect();
		println!("{}", nums[0] + nums[1]);
	}
}
```

---

# 1110. 더하기 사이클

원래 수로 돌아올 때까지 연산을 반복하는 문제

```rust
// https://www.acmicpc.net/problem/1110

use std::io;

fn new_num(x: i32) -> i32 {
	if x < 10 {
		return x*10+x;
	} else {
		return ((x%10) * 10) + ((x/10 + x%10)%10);
	}
}

fn main() {
	let mut buffer = String::new();
	let stdin = io::stdin();
	stdin.read_line(&mut buffer).unwrap();
	let x = buffer.trim().parse().unwrap();
	let mut temp = new_num(x);
	let mut cnt = 1;

	loop {
		if temp == x {
			println!("{}", cnt);
			break;
		}

		temp = new_num(temp);
		cnt += 1;
	}
}
```
