---
title: 'What is unwrap()?'
posttitle: 'Rust: What is unwrap()?'
date: '2023-01-17 22:00:00'
lang: en
tags:
  - rust
about: dev
---

`input` contains a string read from the user and I'm trying to store it to `num` which is of type `u32`.

```rust
let num: u32 = input.trim().parse();
```

This code wont work because of mismatched type.

```text
error[E0308]: mismatched types
   |
11 |   let num: usize = input.trim().parse();
   |          -----   ^^^^^^^^^^^^^^^^ expected `u32`, found enum `Result`
   |          |
   |          expected due to this
   |
   = note: expected type `usize`
              found enum `Result<_, _>`

error: aborting due to previous error
```

`parse()` returns [`enum Result`](https://doc.rust-lang.org/std/result/enum.Result.html) so I have to match these enums (`Ok` and `Err`) to correctly return the number.

```rust
let num: u32 = match input.trim().parse() {
  Ok(num) => num,
  Err(_) => 0,
};
```

Doesn't this seem little too much for just converting a number? I don't really need `Err` part. Can I just get `Ok` value?

I skimed throughed the documentation and there was [_unwrap_](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap) method.

What `unwrap()` does is it returns the contained `Ok` value.

```rust
let x: Result<u32, &str> = Ok(2);
assert_eq!(x.unwrap(), 2);
```

---

Going back to the previous code, I can rewrite it like this.

```rust
let num: u32 = input.trim().parse().unwrap();
```
