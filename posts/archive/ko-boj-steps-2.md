---
title: 'BOJ 02 - Conditional Statements'
posttitle: 'Baekjoon OJ'
postsubtitle: 'Part 01 - Conditional Statements'
date: '2022-08-10'
tags:
  - BaekjoonOJ
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 두 번째 단계 [조건문](https://www.acmicpc.net/step/4)의 풀이입니다.

# 1330. 두 수 비교하기

두 수를 비교한 결과를 출력하는 문제.

```rust
// https://www.acmicpc.net/problem/1330

use std::io;

fn main() {
    let mut s = String::new();
    io::stdin().read_line(&mut s).expect("failed");

    let nums: Vec<&str> = s.split_whitespace().collect();
    let x = nums[0].parse::<i32>().unwrap();
    let y = nums[1].parse::<i32>().unwrap();

    if x > y {
        println!(">");
    } else if x < y {
        println!("<");
    } else {
        println!("==");
    }
}
```

---

# 9498. 시험 성적

시험 점수를 성적으로 바꾸는 문제.

```rust
// https://www.acmicpc.net/problem/9498

use std::io;

fn main() {
    let mut s = String::new();
    io::stdin().read_line(&mut s).expect("failed");

    let x: i32 = s.trim().parse::<i32>().unwrap();

    if x >= 90 {
        println!("A")
    } else if x >= 80 {
        println!("B");
    } else if x >= 70 {
        println!("C");
    } else if x >= 60 {
        println!("D");
    } else {
        println!("F");
    }
}
```

---

# 2753. Leap Year

윤년을 판별하는 문제.

```rust
// https://www.acmicpc.net/problem/2753

use std::io;

fn main() {
    let mut s = String::new();
    io::stdin().read_line(&mut s).expect("faild");
    let year = s.trim().parse::<i32>().unwrap();

    if (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) {
        println!("1");
    } else {
        println!("0");
    }
}
```

---

# 14681. 사분면 고르기

점이 어느 사분면에 있는지 알아내는 문제.

```rust
// https://www.acmicpc.net/problem/14681

use std::io;

fn read() -> i32 {
    let mut buf = String::new();
    std::io::stdin().read_line(&mut buf).unwrap();
    buf.trim().parse().unwrap()
}

fn main() {
    let a = read();
    let b = read();

    if a > 0 && b > 0 {
        println!("{}", 1);
    } else if a < 0 && b > 0 {
        println!("{}", 2);
    } else if a < 0 && b < 0 {
        println!("{}", 3);
    } else {
        println!("{}", 4);
    }
}
```

---

# 2884. SPAVANAC

시간 계산 문제.

```rust
// https://www.acmicpc.net/problem/2884

use std::io;

fn main() {
    let mut s = String::new();
    io::stdin().read_line(&mut s).unwrap();

    let mut nums: Vec<i32> = s.split_whitespace().map( |n| n.parse().unwrap()).collect();

    if (nums[1]-45) < 0 {
        nums[0] = (nums[0]+23)%24;
    }

    nums[1] = (nums[1]+15)%60;

    println!("{} {}", nums[0], nums[1]);
}
```

---

# 2525. 오븐 시계

범위가 더 넓은 시간 계산 문제.

```rust
// https://www.acmicpc.net/problem/2525

use std::io;

fn main() {
    let mut s = String::new();
    io::stdin().read_line(&mut s).unwrap();
    let mut nums: Vec<i32> = s.split_whitespace().map( |n| n.parse().unwrap()).collect();

    let mut s2 = String::new();
    io::stdin().read_line(&mut s2).unwrap();
    let mut c: i32 = s2.trim().parse::<i32>().unwrap();

    if (nums[1] + c) > 59 {
        nums[0] = (nums[0]+(nums[1]+c)/60) % 24;
    }

    nums[1] = (nums[1]+c)%60;

    println!("{} {}", nums[0], nums[1]);
}
```

---

# 2480. 주사위 세개

조건에 따라 상금을 계산하는 문제.

처음 제출한 코드:

```rust
// https://www.acmicpc.net/problem/2480

use std::io;
use std::cmp;

fn main() {
    let mut s = String::new();
    io::stdin().read_line(&mut s).unwrap();
    let mut nums: Vec<i32> = s.split_whitespace().map( |n| n.parse().unwrap()).collect();

    if (nums[0] == nums[1] && nums[1] != nums[2]) ||
        (nums[0] == nums[2] && nums[0] != nums[1]) {
        println!("{}", 1000+nums[0]*100);
    } else if (nums[1] == nums[2] && nums[0] != nums[1]) {
        println!("{}", 1000+nums[1]*100);
    } else if (nums[0] == nums[1] && nums[1] == nums[2]) {
        println!("{}", 10000+nums[0]*1000);
    } else {
        println!("{}", (cmp::max(nums[0], cmp::max(nums[1], nums[2])))*100);
    }
}
```

`vec.sort()`로 벡터의 정렬이 가능했다. 정렬을 하고 나면 코드가 좀 더 간결해진다.

```rust
use std::io;

fn main() {
    let mut s = String::new();
    io::stdin().read_line(&mut s).unwrap();
    let mut nums: Vec<i32> = s.split_whitespace().map( |n| n.parse().unwrap()).collect();

    nums.sort();

    if nums[0] == nums[2] {
        println!("{}", 10000+nums[0]*1000);
    } else if (nums[0] == nums[1]) | (nums[1] == nums[2]) {
        println!("{}", 1000+nums[1]*100);
    } else {
        println!("{}", nums[2] * 100);
    }
}
```
