---
title: 'BOJ 04: 1차원 배열'
date: "2022-08-13 10:00:00"
tags: [BaekjoonOJ]
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 네 번째 단계 [1차원 배열](https://www.acmicpc.net/step/6)의 풀이입니다.


# 1546. 평균

평균을 조작하는 문제.

```rust
use std::io;

fn read_int() -> i32 {
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();
	buf.trim().parse::<i32>().unwrap()
}

fn read_vec() -> Vec<i32> {
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();
	let nums: Vec<i32> = buf.split_whitespace().map(|x| x.parse().unwrap()).collect();
	return nums;
}

fn main() {
	let t = read_int();
	let mut nums: Vec<i32> = read_vec();

	nums.sort();
	let max = nums[nums.len()-1] as f32; 
	let mut avg: f32 = 0.0;

	for i in 0..nums.len() {
		avg += (nums[i] as f32)/max*100.0;
	}

	println!("{:.2}", avg/t as f32);
}
```

---

# 2562. 최댓값

최댓값이 어디에 있는지 찾는 문제.

```rust
// https://www.acmicpc.net/problem/2562

use std::io;

fn main() {
	let mut pos = -1;
	let mut max = -1;
	let mut buffer;
	let stdin = io::stdin();

	for i in 0..9 {
		buffer = String::new();
		stdin.read_line(&mut buffer).unwrap();
		let val = buffer.trim().parse().unwrap();

		if val > max {
			max = val;
			pos = i;
		}
	}

	println!("{}\n{}", max, pos+1);
}
```

---

# 3052. Modulo

modulo 42를 하기 때문에 최대 배열을 42개로 잡았다. 연산이 끝난 후, 배열을 돌면서  해당 값이 사용되었으면 `cnt+1`을 한다.
지금 생각해보면 배열을 `i32`가 아니라 `boolean`으로 해도 괜찮았을 것 같다.

```rust
// https://www.acmicpc.net/problem/3052

use std::io;

fn main() {
	let mut arr: [i32; 42] = [0; 42];
	let mut buffer;
	let stdin = io::stdin();

	for _ in 0..10 {
		buffer = String::new();
		stdin.read_line(&mut buffer).unwrap();
		let val: i32 = buffer.trim().parse().unwrap();

		arr[(val%42) as usize] = 1;
	}

    let mut cnt = 0;
    for i in 0..42 {
        cnt += arr[i as usize];
    }
    
    println!("{}", cnt);
}
```

배열이 아닌 `set`을 이용한 풀이.

```rust
use std::collections::HashSet;
use std::io;
pub fn main() {
    let mut set:HashSet<u16> = HashSet::new();
    for j in 0..10 {
        let mut f = String::new();
        io::stdin().read_line(&mut f).unwrap();
        let num:u16= f.trim().parse().unwrap();
        set.insert(num%42);
    }
    println!("{}", set.len())
}
```

---

# 4344. Above Average

평균을 구하는 문제.

```rust
// https://www.acmicpc.net/problem/4344

use std::io;

fn read_int() -> i32 {
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();
	buf.trim().parse::<i32>().unwrap()
}

fn read_vec() -> Vec<i32> {
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();
	let nums: Vec<i32> = buf.split_whitespace().map(|x| x.parse().unwrap()).collect();
	return nums;
}

fn main() {
	let t = read_int();

	for _ in 0..t {
		let nums = read_vec();

		let student = nums[0];

		let mut avg: f32 = 0.0;
		for i in 1..nums.len() {
			avg += nums[i] as f32;
		}

		avg /= student as f32;

		let mut above_avg = 0;
		for i in 1..nums.len() {
			if nums[i] as f32 > avg {
				above_avg += 1;
			}
		}

		println!("{:.3}%", (above_avg as f32)/(student as f32) * 100.0);
	}
}
```

---

# 8958. Score

OX 퀴즈의 결과를 일차원 배열로 입력받아 점수를 계산하는 문제.

```rust
// https://www.acmicpc.net/problem/8958

use std::io;

fn main() {
	let mut buffer = String::new();
	let stdin = io::stdin();
	stdin.read_line(&mut buffer).unwrap();
	let t: i32 = buffer.trim().parse().unwrap();

	for _ in 0..t {
		buffer = String::new();
		stdin.read_line(&mut buffer).unwrap();
		let chars: Vec<_> = buffer.chars().collect();
		let mut score = 0;
		let mut point = 1;

		for i in 0..chars.len() {
			if chars[i] == 'O'{
				score += point;
				point += 1;	
			} else {
				point = 1;
			}
		}

		println!("{}", score);
	}
}
```

---

# 10818. 최소, 최대

최솟값과 최댓값을 찾는 문제.

```rust
// https://www.acmicpc.net/problem/10818

use std::io;

fn main() {
	let mut buffer = String::new();
	let stdin = io::stdin();
	stdin.read_line(&mut buffer).unwrap();
	let _n: i32 = buffer.trim().parse().unwrap();

	buffer = String::new();
	stdin.read_line(&mut buffer).unwrap();
	let max: i32 = buffer.split_whitespace().map(|x| x.parse().unwrap()).max().unwrap();
	let min: i32 = buffer.split_whitespace().map(|x| x.parse().unwrap()).min().unwrap();
	println!("{} {}", min, max);
}
```