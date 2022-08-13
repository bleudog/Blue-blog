---
title: 'BOJ 06: 문자열'
date: "2022-08-13 13:31:00"
tags: [BaekjoonOJ]
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 여섯 번째 단계 [문자열](https://www.acmicpc.net/step/7)의 풀이입니다.

# 11654 아스키 코드

아스키 코드에 대해 알아보는 문제.

```rust
// https://www.acmicpc.net/problem/11654

use std::io;

fn main() {
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();
	let ch: char = buf.trim().parse::<char>().unwrap();
	println!("{}", ch as u32);
}
```

--- 

# 11720. 숫자의 합

정수를 문자열로 입력받는 문제. Python처럼 정수 크기에 제한이 없다면 상관 없으나, 예제 3은 일반적인 정수 자료형에 담기에 너무 크다는 점에 주목합시다.

```rust
// https://www.acmicpc.net/problem/11720

use std::io;

fn main() {
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();
	buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();

	let chars: Vec<_> = buf.trim().chars().collect();
	let mut sum = 0;

	for i in 0..chars.len() {
		sum += (chars[i] as u32) - ('0' as u32);
	}

	println!("{}", sum);
}
```

--- 

# 10809. 알파벳 찾기

한 단어에서 각 알파벳이 처음 등장하는 위치를 찾는 문제.

```rust
// https://www.acmicpc.net/problem/10809

use std::io;

fn main() {
	let mut alphabet: [i32; 26] = [-1; 26];
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();
	let chars: Vec<_> = buf.trim().chars().collect();

	for i in 0..chars.len() {
		let pos = ((chars[i as usize] as u32) - ('a' as u32)) as usize;

		if alphabet[pos] == -1 {
			alphabet[pos] = i as i32;
		}
	}

	for i in 0..26 {
		print!("{} ", alphabet[i as usize]);
	}
}
```

--- 

# 2675. Repeating Characters

각 문자를 반복하여 출력하는 문제.

```rust
// https://www.acmicpc.net/problem/2675

use std::io;

fn main() {
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();
	let t = buf.trim().parse().unwrap();

	for _ in 0..t {
		buf = String::new();
		io::stdin().read_line(&mut buf).unwrap();
		let input: Vec<&str> = buf.split_whitespace().collect();

		let x = input[0].parse().unwrap();
		let chars: Vec<_> = input[1].trim().chars().collect();

		for i in 0..chars.len() {
			for _ in 0..x {
				print!("{}", chars[i as usize])
			}
		}
		println!();
	}
}
```

--- 

# 1157. 단어 공부

주어진 단어에서 가장 많이 사용된 알파벳을 출력하는 문제.

```rust
// https://www.acmicpc.net/problem/1157

use std::io;

fn main() {
	let mut alphabet: [i32; 26] = [0; 26];
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();
	let chars: Vec<_> = buf.trim().to_lowercase().chars().collect();

	let mut pos = 0;
	let mut max = 0;
	for i in 0..chars.len() {
		let p = ((chars[i as usize] as u32) - ('a' as u32)) as usize;
		alphabet[p] += 1;

		if alphabet[p] > max {
			max = alphabet[p];
			pos = p as i32;
		}
	}

	let mut cnt = 0;
	for i in 0..26 {
		if alphabet[i as usize] == max {
			cnt += 1;
		}
	}

	if cnt > 1 {
		println!("?");
	} else {
		pos += 65;
		println!("{}", (pos as u8) as char);
	}
}
```

--- 

# 1152. 단어의 개수

단어의 개수를 구하는 문제.

```rust
// https://www.acmicpc.net/problem/1152

use std::io;

fn main() {
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();
	let words: Vec<&str> = buf.split_whitespace().collect();
	println!("{}", words.len());
}
```

--- 

# 2908. FILIP	

숫자를 뒤집어서 비교하는 문제.

직접 숫자를 뒤집는 함수를 구현해서 푼 풀이.
```rust
// https://www.acmicpc.net/problem/2908

use std::io;

fn rev(n:&mut i32) -> i32 {
	let mut x = *n % 10;
	*n /= 10;
	x *= 10;

	x += *n % 10;
	*n /= 10;
	x *= 10;

	x += *n;

	x
}
fn main() {
	let mut buf = String::new();
	io::stdin().read_line(&mut buf).unwrap();
	let nums: Vec<&str> = buf.split_whitespace().collect();

	let mut n1: i32 = nums[0].trim().parse().unwrap();
	let mut n2: i32 = nums[1].trim().parse().unwrap();

	n1 = rev(&mut n1);
	n2 = rev(&mut n2);

	if n1 > n2 { println!("{}", n1); }
	else { println!("{}", n2); }
}
```

문자 배열에 내장되어 있는 `rev()`함수를 사용하여 문자열을 뒤집고, 이를 하나하나 배열에 추가했다.
그리고 난 뒤 숫자로 변환하여 둘 중 큰 값을 출력했다.

```rust
// https://www.acmicpc.net/problem/2908

use std::io;

fn main() {
	let mut s = String::new();
	io::stdin().read_line(&mut s).unwrap();
	let mut arr = vec![];

	for x in s.split_whitespace() {
		let mut buf = String::new();
		for y in x.chars().rev() {
			buf.push(y);
		}

		arr.push(buf.parse::<i32>().unwrap());
	}

	println!("{}", arr[0].max(arr[1]));
}
```

--- 

# 5622. BAKA

규칙에 따라 문자에 대응하는 수를 출력하는 문제.

```rust
// https://www.acmicpc.net/problem/5622

use std::io;

fn main() {
	let dial = [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,9,9,9,10,10,10,10];
	let mut s = String::new();
	io::stdin().read_line(&mut s).unwrap();
	let chars = s.trim().to_ascii_lowercase();
	let mut sum = 0;

	for x in chars.as_bytes() {
		let i = *x as usize;
		sum += dial[i-97];
	}

	print!("{}", sum);
}
```

--- 

# 2941. LJESNJAK

크로아티아 알파벳의 개수를 세는 문제.

```rust
// https://www.acmicpc.net/problem/2941

use std::io;

fn main() {
	let mut s = String::new();
	io::stdin().read_line(&mut s).unwrap();
	let chars: Vec<_> = s.trim().chars().collect();

	let mut letter = 0;
	let mut i = 0;
	while i < chars.len() {
		if chars[i] == 'c' {
			if i+1 < chars.len() { 
				if chars[i+1] == '-' || chars[i+1] == '=' {
					i += 1;
				}
			}
		} else if chars[i] == 'd' {
			if i+1 < chars.len() && chars[i+1] == '-' {
				i += 1;
			}
			else if i+2 < chars.len() && chars[i+1] == 'z' && chars[i+2] == '=' {
				i += 2;
			}
		}
		else if chars[i] == 'n' || chars[i] == 'l' {
			if i+1 < chars.len() && chars[i+1] == 'j' {
				i += 1;
			}
		} else if chars[i] == 's' || chars[i] == 'z' {
			if i+1 < chars.len() && chars[i+1] == '=' {
				i += 1;
			}
		}

		i += 1;
		letter += 1;
	}


	println!("{}", letter);
}
```

`replace`를 사용해서 문자들을 치환하면 보다쉽게 풀 수 있다.

```rust
// // https://www.acmicpc.net/problem/2941

use std::io;

fn main() {
	let mut s = String::new();
	io::stdin().read_line(&mut s).unwrap();
	let mut s = s.trim().to_string();

	for x in ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="] {
		s = s.replace(x, "x");
	}

	print!("{}", s.len());
}
```

--- 

# 1316. 그룹 단어 체커
조건에 맞는 문자열을 찾는 문제.

```rust
// https://www.acmicpc.net/problem/1316

use std::io;

fn main() {
	let mut s = String::new();
	io::stdin().read_line(&mut s).unwrap();
	let t = s.trim().parse().unwrap();

	let mut cnt = 0;
	for _ in 0..t {
		let mut arr = [false; 26];
		s = String::new();
		io::stdin().read_line(&mut s).unwrap();
		let str: Vec<_> = s.trim_end().chars().collect();
		arr[((str[0] as u32) - ('a' as u32)) as usize] = true;

		let mut group_word = true;

		for i in 1..str.len() {
			let j = i as usize;
			let arr_index = ((str[j] as u32) - ('a' as u32)) as usize;
			if str[j] == str[j-1] { continue; }
			if arr[arr_index] == true { 
				group_word = false;
				break;
			 }

			arr[arr_index] = true;
		}

		if group_word == true { cnt += 1; }

	}
	println!("{}", cnt);
}
```