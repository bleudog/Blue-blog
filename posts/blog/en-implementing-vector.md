---
title: "Implementing a Vector with Rust (WIP)"
date: "2022-08-17 07:00:00"
tags: 
  - vector
  - data structure
lang: en
about: ds
---

As I'm studying Rust, I tried to implement a vector using fixed size array.

My vector should be able to do all the followings:
- `size()` - return number of items in a vector.
- `capacity()` - return number of items it can hold.
- `is_empty()` - returns true if empty, else false.
- `at(index)` - returns item at given index; blows up if index-out-of-bound occurs.
- `push(item)` - inserts item at the end of the vector.
- `insert(index, item)` - inserts item at index; shifts that index's value and trailing elements to the right.
- `prepend(item)` - inserts item at index 0.
- `pop()` - remove and return the last item in the vector.
- `delete(index)` - removes item at index and shift all trailing elements to the left.
- `remove(item)` - looks for the item and removes index holding it (even if in multiple places).
- `find(item)` - looks for the item and returns first index with that value, -1 if not found.
- `resize(new_capacity)` -- private function
    - when you reach the capacity, double the container size.
    - when current size becomes 1/4th of the capacity, halve the container size.

---

I don't even know how to create a class in Rust (it has one right?) so let's start from there.

If you just want to see the code, [here you go](https://github.com/rolemadelen/rust-algorithms/tree/main/src/data_structures/vector).

# Classes in Rust
Welp. It seems like [there is no class in Rust](https://jimmco.medium.com/classes-in-rust-c5b72c0f0a4c), but we can simulate classes using `struct` (structure) and `impl` (implement) keyword.

```rust
struct Person;

impl Person {
    pub fn greet(&mut self) {
        println!("Hello, World!");
    }
}

fn main() {
    let mut person = Person;
    person.greet();
    // Hello, World!
}
```

We can use this behavior to create our vector class.

## Define Vector

```rust
struct Vector {
	size: i32,
	capacity: i32,
	arr: [i32; 16],
}
```

Here I defined my vector with three pieces of data: `size`, `capacity`, and `arr` which is the vector container itself.

I actually want the `arr` to be a pointer like in C where I can later dynamically allocate memory. 

```c
struct Vector {
    int *arr;
};

int main() {
    struct Vector vec;
    const int SIZE = 16;
    vec.arr = (int *)malloc(sizeof(int) * SIZE);

    free(vec.arr);
    return 0;
}
```

But I haven't figured this part out yet in Rust, so I just hard coded `16` which is going to be our default vector size.

Anyway, now that we have our vector struct, we can start implementing it. I added `new()` which is somewhat like a constructor or initializer in other languages.

```rust
struct Vector {
	size: i32,
	capacity: i32,
	arr: [i32; 16],
}

#[allow(dead_code)]
impl Vector {
    pub fn new() -> Vector {
        Vector {
            size: 0,
            capacity: 16,
            arr: [0; 16],
        }
    }
}

fn main() {
    let mut vec = Vector::new();
}
```

`#[allow(dead_code)]` is to hide warnings for never used functions:
```sh
warning: associated function `size` is never used
  --> vector.rs:16:9
   |
16 |     pub fn size(&mut self) -> i32 {
   |            ^^^^
   |
   = note: `#[warn(dead_code)]` on by default
---
```

---

# Implement Functions

These four functions are trivial.

```rust
pub fn size(&mut self) -> i32 {
    return self.size;
}

pub fn capacity(&mut self) -> i32 {
    return self.capacity;
}

pub fn is_empty(&mut self) -> bool {
    return self.size == 0;
}

// blows up if index out of bounds
pub fn at(&mut self, index: i32) -> i32 {
    return self.arr[index as usize];
}
```

## push(item)

```rust
pub fn push(&mut self, item: i32) { 
    if self.size == self.capacity {
        println!("vector is full.");
        return;
    }

    self.arr[self.size as usize] = item;
    self.size += 1;
}
```

## prepend(item)

```rust
pub fn prepend(&mut self, item: i32) {
    let mut i = self.size as usize;
    while i > 0 {
        self.arr[i] = self.arr[(i-1) as usize];
        i -= 1;
    }

    self.arr[0] = item;
    self.size += 1;
}
```

## insert(index, item)
```rust
pub fn insert(&mut self, index: usize, item: i32) {
    if self.size == self.capacity {
        println!("vector is full.");
        return;
    }

    if index == self.size as usize {
        self.push(item);
        return;
    }

    if index == 0 {
        self.prepend(item);
        return;
    }

    let mut i = self.size as usize;
    while i > index {
        self.arr[i] = self.arr[(i-1) as usize];
        i -= 1;
    }

    self.arr[index] = item;
    self.size += 1;
}
```

## pop()

```rust
pub fn pop(&mut self) -> i32 {
    if self.size == 0 { 
        println!("vector is empty.");
        return -1; 
    }

    self.size -= 1;
    self.arr[self.size as usize]
}
```

## delete(index)

```rust 
pub fn delete(&mut self, index: usize) {
    if self.size == 0 { 
        println!("vector is empty.");
        return; 
    }

    if index >= self.size as usize {
        println!("wrong index.");
        return;
    }

    for i in index..(self.size as usize) {
        self.arr[i as usize] = self.arr[(i+1) as usize];
    }

    self.size -= 1;
}
```

## remove(item)

```rust
pub fn remove(&mut self, item: i32) {
    let mut index = 0;
    while index != -1 {
        index = self.find(item);
        if index == -1 { break; }
        self.delete(index as usize);
    }
}
```

## find(item)

```rust
// linear search
pub fn find(&mut self, item: i32) -> i32 {
    let mut index = -1;

    for i in 0..self.size {
        if self.arr[i as usize] == item {
            index = i; 
            break;
        }
    }
    
    return index;
}
```