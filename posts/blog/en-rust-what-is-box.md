---
title: 'Rust: What is Box<T>?!'
posttitle: 'Rust'
postsubtitle: 'What is Box<T> ?!'
date: '2022-08-17 20:00:00'
tags:
  - smart pointer
  - rust
lang: en
about: programming
---

I was trying to solve [this problem](https://leetcode.com/problems/merge-two-sorted-lists/) from LeetCode and this was there given syntax to solve a problem:

```rust
impl Solution {
    pub fn merge_two_lists(list1: Option<Box<ListNode>>, list2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {

    }
}
```

I'm learning Rust's syntax through solving problems. As I encounter new issues, I look up collections, libraries, functions, and etc...

And here you go, a new concept that I've never seen. So let's figure out what `Box<T>` is.

## Smart Pointers

There's a general concept of a variable that stores an address in memory. This is called a **pointer**.

Now, a **smart pointer** is a data structure that acts like a pointer but with additional capabilities. There's a concept called _ownership_ in Rust and this pointer enables your data to have multiple owners. It also checks the number of owner and clears the data if no one owns it.

So why are we talking about smart pointers? Because `Box<T>` is a smart pointer.

_Box_ is a most straightforward smart pointer in Rust and it allows you to store values on the heap rather than the stack.

## Using `Box<T>`

Here's a syntax of using Box.

```rust
fn main() {
    let b = Box::new(5);
    println!("b = {}", b);
}
```

We used a value `5` here which is of type `i32`. Normally we use our own struct as a type in Box rather than primitive type.

So going back to the LeetCode problem, now I know that `Box<ListNode>` is a smart pointer pointing to `ListNode` structures.

Good luck to me and lets see if I can solve it in Rust.

---

Reference:

- [https://doc.rust-lang.org/book/ch15-00-smart-pointers.html](https://doc.rust-lang.org/book/ch15-00-smart-pointers.html)
