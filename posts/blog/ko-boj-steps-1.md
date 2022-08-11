---
title: 'BOJ 01: 입출력과 사칙연산 (STDIO & Arithmetic)'
date: "2022-08-09"
tags: 
  - BaekjoonOJ
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 첫 번째 단계 [입출력과 사칙연산](https://www.acmicpc.net/step/1)의 풀이입니다.

# 2557. Hello World

Hello World!를 화면에 출력하는 문제.

```rust
fn main() {
	println!("Hello World!")
}
```

---

# 10718. We love kriii

주어진 예제처럼 출력하는 문제.

```rust
fn main() {
	println!("강한친구 대한육군");
	println!("강한친구 대한육군");
}
```

---

# 1000. A+B

두 수를 입력받고 합을 출력하는 문제.

```rust
use std::io;

fn main() {
	let mut val = String::new();
	io::stdin().read_line(&mut val);
		
	let mut substr_iter = val.split_whitespace();
	let mut next_num = || -> usize {
		substr_iter.next().expect("Not enough input numbers")
					.parse().expect("Input is not a number")
	};
	let val1 = next_num();
	let val2 = next_num();
	
	println!("{}", val1+val2);
}
```

---

# 1001. A-B

두 수를 입력받고 뺄셈을 한 결과를 출력하는 문제.

```rust
use std::io;

fn main() {
	let mut nums = String::new();
	
	io::stdin().read_line(&mut nums);
	let numbers: Vec<&str> = nums.split_whitespace().collect();
	
	let val1 = match numbers[0].parse::<i32>() {
		Ok(i) => i,
		Err(_) => 0,
	};
	
	let val2 = match numbers[1].parse::<i32>() {
		Ok(i) => i,
		Err(_) => 0,
	};
	
	println!("{}", val1-val2);
}
```

---

# 10998. AxB

두 수를 입력받고 곱 한 결과를 출력하는 문제.

```rust
use std::io;

fn main() {
	let mut input = String::new();
	io::stdin().read_line(&mut input).expect("faield");
	
	let numbers: Vec<&str> = input.split_whitespace().collect();
	
	let val1 = match numbers[0].parse::<i32>() {
		Ok(i) => i,
		Err(_) => 0,
	};
	
	let val2 = match numbers[1].parse::<i32>() {
		Ok(i) => i,
		Err(_) => 0,
	};
	
	println!("{}", val1*val2);
}
```

---

# 1008. A/B

나눗셈 문제. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하이면 정답이다.

```rust
use std::io;

fn main() {
	let mut input = String::new();
	io::stdin().read_line(&mut input).expect("faield");
	
	let numbers: Vec<&str> = input.split_whitespace().collect();
	
	let val1 = match numbers[0].parse::<f64>() {
		Ok(i) => i,
		Err(_) => 0.0,
	};
	
	let val2 = match numbers[1].parse::<f64>() {
		Ok(i) => i,
		Err(_) => 0.0,
	};
	
	println!("{:.10}", val1/val2);
}
```

---

# 10869. 사칙연산

두 자연수 A와 B를 입력받고 A+B, A-B, A*B, A/B(몫), A%B(나머지)를 구하는 문제. 

```rust
use std::io;

fn main() {
	let mut input = String::new();
	io::stdin().read_line(&mut input).expect("faield");
	
	let mut it = input.split_whitespace();
	let mut next_num = || -> i32 {
		it.next().expect("not enough input numbers").parse().expect("input is not a number")
	};
	
	let a = next_num();
	let b = next_num();
	
	println!("{}", a+b);
	println!("{}", a-b);
	println!("{}", a*b);
	println!("{}", a/b);
	println!("{}", a%b);
}
```

---

# 10926. ??!

입출력을 응용하는 문제.

```rust
use std::io;

fn main() {
	let mut id = String::new();
	io::stdin().read_line(&mut id).expect("failed");
	println!("{}??!", id.trim());
}
```

---

# 18108. 1998년생인 내가 태국에서는 2541년생?!

식을 직접 세워서 계산하는 문제.

```rust
use std::io;

fn main() {
	let mut str = String::new();
	io::stdin().read_line(&mut str).expect("failed");
	
	let year = match str.trim().parse::<i32>() {
		Ok(i) => i,
		Err(_) => 0,
	};
	
	println!("{}", year-543);
}
```

---

# 3003. BIJELE

부족한 체스 피스의 개수를 구하는 문제.

```rust
use std::io;

fn main() {
	let mut pieces = vec![1, 1, 2, 2, 2, 8];
	let mut str = String::new();
	io::stdin().read_line(&mut str).expect("failed");
	
	let numbers: Vec<&str> = str.split_whitespace().collect();
	
	for i in 0..6 {
		print!("{} ", pieces[i] - numbers[i].parse::<i32>().unwrap());
	}
}
```

---

# 10430. Remainder

네 개의 계산식을 계산하는 문제.

```rust
use std::io;

fn main() {
    let mut s = String::new();
    io::stdin().read_line(&mut s).expect("failed");
    
    let nums: Vec<&str> = s.split_whitespace().collect();
    
    let a: i32 = nums[0].parse::<i32>().unwrap();
    let b: i32 = nums[1].parse::<i32>().unwrap();
    let c: i32 = nums[2].parse::<i32>().unwrap();
    
    println!("{}", (a+b)%c);
    println!("{}", ((a+c)+(b%c))%c);
    println!("{}", (a*b)%c);
    println!("{}", ((a%c)*(b%c))%c);
}
```

---

# 2588. 곱셈

빈 칸에 들어갈 수를 구하는 문제.

```rust
use std::io;

fn main() {
    let mut x = String::new();
    let mut y = String::new();
    
    io::stdin().read_line(&mut x).expect("failed");
    io::stdin().read_line(&mut y).expect("failed");
    
    let a: i32 = x.trim().parse::<i32>().unwrap();
    let b: i32 = y.trim().parse::<i32>().unwrap();
    
    println!("{}", a*(b%10));
    println!("{}", a*((b/10)%10));
    println!("{}", a*(b/100));
    println!("{}", a*b);
}
```

---

# 10171. Cats

\, ' 등의 문자에 주의하며 고양이를 출력하는 문제.

```rust
fn main() {
    println!("\\    /\\");
    println!(" )  ( ')");
    println!("(  /  )");
    println!(" \\(__)|");
}
```

---

# 10172. Dogs

", `, \ 등의 문자에 주의하며 개를 출력하는 문제.

```rust
fn main() {
    println!("|\\_/|");
    println!("|q p|   /}}");
    println!("( 0 )\"\"\"\\");
    println!("|\"^\"`    |");
    println!("||_/=\\\\__|");
}
```

---

# 25083. 새싹

', ", `, \ 등의 문자에 주의하며 새싹을 출력하는 문제.

```rust
fn main() {
    println!("         ,r'\"7");
    println!("r`-_   ,'  ,/");
    println!(" \\. \". L_r'");
    println!("   `~\\/");
    println!("      |");
    println!("      |");
}
```