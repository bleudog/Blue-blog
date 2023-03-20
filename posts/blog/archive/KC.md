---
title: 'How Rust Handles Memory: Ownership'
posttitle: 'How Rust Handles Memory: Ownership'
date: '2023-01-30 07:00:00'
uid: 'KC'
---

High-level languages like Java or JavaScript has a garbage collector (GC) that monitors memory allocation and reclaim it when a block of allocated memory is no longer used.

Low-level languages like C or C++ does not have a GC. So it becomes our responsibility to identify which data are in the heap and when to call functions like `free` or `delete` explicitly to deallacote the memory.

Memory management is not an easy task to do especially when we have to do it on our own. If you forget to do it, you're wasting the memory and you're causing a _memory leak_. If you accidentally _double free_ the same block of memory, it leads to undefined behavior. If you mistakenly access memory that has already been freed, it also leads to undefined behavior -- _segmentation fault_ error most likely.

Rust does not have a garbage collector but it has GC-like model of system that monitors and handles memory for you. It's called _Ownership_.

## Ownership

Ownership is a set of rules that the compiler checks when compiling a Rust program.

Here are basic rules of ownership:

1. Each data is _owned_ by an _owner_.
2. There can only be one _owner_ at a time.
3. Once the owner goes out of scope, the data will no longer be valid (_dropped_).

```rust
fn main() {
    let mut x: i32 = 5; // 'x' is declared and it's valid;
                        //  'x' is an owner of a value 5
    x = 7;              //  now 'x' is the owner of a value 7

    {    // new scope entered
        let y = 7;       // y is declared and it's valid within the scope
    }    // goes out of scope
         // now 'y' is dropped

} // goes out of scope
  // 'x' is dropped
```

When the owner goes out of the scope, Rust automatically calls the `drop` function to either pop the data from the stack or to retrieve any allocated memory in the heap.

### Copy and Move

When you copy a data to another variable, who will own the data?

```rust
fn main() {
    let x: i32 = 5;
    let y: i32 = x;
}
```

A variable `x` is the owner of the data `5` which is of type `i32`. As we bind `x` to `y`, we simply push two values to the stack because the size of `i32` type is known and fixed. So both `x` and `y` are owners of their data.

What about with `String` type?

```rust
fn main() {
    let s1 = String::from("hello, world");
    let s2 = s1;
}
```

A `String` type is a mutable data, which means a compiler cannot determine how many blocks of memory is needed at compile time to store the data.

When we call `String::from()`, this is when the compiler allocates enough memory to store the _given_ data at runtime to the heap. So `s1` becomes the owner of the _address_ which points to the data `"hello, world"` located somewhere in the memory.

When we assign `s1` to `s2`, it's not making a copy of the data. It's just copying the reference (address) that points to the data in the heap. It looks like this.

![ownership move](/images/posts/dev/rust/ownership/move.svg)

-   image src: https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html

As you can see from the table, both `s1` and `s2` points to the same data in the heap.

What will happen if `s1` goes out of the scope? `drop` function will be called and `"hello, world"` will no longer be valid.

But wait. `s2` is still pointing at that address which just became invalid. This isn't good.

There must be only one free-ing with one allocation; it's a pair.

So what Rust came up with is, this idea of transferring the ownership called _move_.

Try to print `s1` after binding it to `s2`. You'll get an error.

```text
error[E0382]: borrow of moved value: `s1`
 --> src/main.rs:5:20
  |
2 |     let s1 = String::from("hello, world");
  |         - move occurs because `s1` has type `String`, which does not implement the `Copy` trait
3 |     let s2 = s1;
  |              - value moved here
4 |
5 |     println!("{}", s1);
  |                    ^ value borrowed here after move
```

Basically what it's saying is that, `s1` is no longer the owner of the value `"hello, world"` because it just got moved to `s2`.

![ownership move2](/images/posts/dev/rust/ownership/move2.svg)

-   image src: https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html

This restriction makes us to suffer less because it's caught at the compile time and we don't neew to worry about dangling pointers or double free-ing data in the heap.

---

Reference

-   https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html
