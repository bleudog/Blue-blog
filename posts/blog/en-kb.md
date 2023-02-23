---
title: "Rust doesn't assume"
posttitle: "Rust doesn't assume"
date: '2023-01-19 22:00:00'
lang: en
tags:
  - rust
about: dev
---

Here's a simple C code that prints either `true` or `false` depends on the condition.

```c
#include <stdio.h>

int main(void) {
  int condition = 17;

  if (condition) {
    printf("true\n");
  } else {
    printf("false\n");
  }

  return 0;
}
```

If you compile and run this code, it'll output `true`. In C language, any values other than `0`, `NULL`, or `'\0'` will be `true` (am I missing anything🤔).

This also true in JavaScript, Ruby, Python, and many other programming languages; if non-boolean value is passed when boolean was expected, the program will implicitly convert it to boolean. This isn't the case for Rust.

```rust
let condition = 17;

if condition {
  println!("true");
} else {
  println!("false");
}
```

You'll get an error when you try to compile this code:

```sh
error[E0308]: mismatched types
 --> src/main.rs:4:5
  |
4 |     if condition {
  |        ^^^^^^^^^ expected `bool`, found integer

```

It wont convert the value into boolean implicitly. You have to do it explicitly.

```rust
let condition = 17;

if condition != 0 {
  println!("true");
} else {
  println!("false");
}
```

This means `!condition` wont work as well. I'll need to use it as `!(condition != 0)` if I ever want to use it - _I mean you can just use `==` instead of `!=` but you get the point..?_

I have a habit of using `if (condition) {}` or `if (!condition) {}`, because it's more concise, compact, and shorter to type. But I started to like being explicit when writing boolean expressions.

Although I still think that it's a bit lengthy, it does get to me faster to comprehend the expression and determine whether this condition is checking for `true` or `false` conditions.