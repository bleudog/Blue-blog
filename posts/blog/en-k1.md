---
title: 'Rust: Variable Shadowing pt.2'
posttitle: 'Variable Shadowing pt.2'
date: '2023-01-18 07:00:00'
lang: en
tags:
  - rust
about: dev
---

[Last time](./rust-variable-shadowing) when I first encountered this concept, I bascially said I don't see why this exists.

Not that I fully understand the concept now, but I can see the use of shadowing.

First of all, Rust is a typed language. So I cannot do this:

```rust
let spaces = "   ";
spaces = spaces.len();
```

Normally I'd create a new variable:

```rust
let spaces = "   ";
let num_spaces = spaces.len();
```

We all know how hard it is to name a variable; it gets tiring. But with the concept of shadowing, we can shadow the first variable and re-use the name.

```rust
let spaces = "   ";
let spaces = spaces.num(); // works fine
```

---

I had couple questions regarding this concept which I wrote in the previous post:

- _Is shadowing temporary?_
- _Can we remove shadowing? That is, can we reference older variables with a same name?_

This two is basically the same question: _what's the scope of shadowed variable?_

```rust
let favorite_number = 17;

{
  let favorite_number = 4;
  println!("{favorite_number}"); // 4
}

println!("{favorite_number}"); // 17
```

First `favorite_number` is shadowed by the second `favorite_number` inside the block. When you print the value, you'll get `4`. But once you exit the block, the first variable is no longer shadowed and you'll get the original value which is `17`.

So,

_is shadowing temporary?_ - It depends on the scope but I'd say yes.

_can we remove shadowing?_ - I don't think there's a way to forcefully remove the shadowing and access the original variable 🤔
