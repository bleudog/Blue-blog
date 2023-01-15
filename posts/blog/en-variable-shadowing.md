---
title: 'Variable Shadowing?'
posttitle: 'Variable Shadowing?'
date: '2023-01-16 08:00:00'
lang: en
about: journal
---

I started learning [Rust](https://www.rust-lang.org/) and there was this concept called _shadowing_.

**Shadowing** allows you to re-use previously defined variable names. That is, you can declare a new variable with a same name.

```rust
let mut fruit = "apple";

// some computations..

let fruit = 1; // shadowing
println!("fruit: {fruit}"); // fruit: 1
```

My first thought about this was _why_? This reminded me of non-typed language like JavaScript.

```js
let fruit = 'fruit';

fruit = 1;
console.log(fruit);
```

I'm only couple hours into Rust, so may be I'm not there yet to see the advantage of _shadowing_.

As I spend more time playing with Rust, I hope to find answers for these questions:

- _Is shadowing temporary?_
- _Can we remove shadowing? That is, can we reference older variables with a same name?_
