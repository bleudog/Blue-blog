---
title: 'Rust: Vector Implementation'
posttitle: 'Data Structure'
postsubtitle: 'Vector Implementation'
date: '2022-08-17 07:00:00'
tags:
  - vector
  - data structure
  - rust
lang: en
about: ds
---

A vector is a linear data structure like an array but its size can grow or shrink automatically. It's a flexible container.

I tried implementing a vector with a fixed size array in Rust.

My vector contains following functions:

- `size() -> i32`
- `capacity() -> i32`
- `is_empty() -> bool`
- `at(index) -> i32`
- `push(item)`
- `insert(index, item)`
- `prepend(item)`
- `pop() -> i32`
- `delete(index)` - deletes an item at `index`
- `remove(item)` - remove all occurrences of `item`
- `find(item) -> i32`
- `resize(new_capacity)` (**not yet implemented**)
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

So lets define the vector.

## Vector Structure

```rust
struct Vector {
	size: i32,
	capacity: i32,
	arr: [i32; 16],
}
```

Here I defined my vector with three pieces of data: `size`, `capacity`, and `arr` which is the vector container itself.

I actually wanted the `arr` to be a pointer like in C where I can later dynamically allocate memory with an arbitrary size.

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

But I haven't figured this part out yet in Rust, so I just hard coded `16` which is going to be our default vector size for now.

Now that we have our vector struct, we can start implementing it. I added `new()` which is somewhat like a constructor or initializer in other languages.

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

For the last `at` function, the index of an array has to be `usize` but given type of the index is `i32`.
So I type casted using `as usize`.

## push(item)

This function inserts new item at the end of the array.

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

If current number of item (`self.size`) is equal to the capacity that our vector can hold (`self.capacity`), we cannot add anymore data. So we just return it.

If it's not full, we use our `size` as an index value and store the `item` at the end of the array.

- Time complexity: O(1)
- Space complexity: O(1)

## prepend(item)

This function inserts an item in front of the array.

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

We need to shift all elements to the right before we can add an element at index 0.

So I'm starting at `size` and assigning a previous value to current position: `arr[size] = arr[size-1]`.

- Time complexity: O(N), N = number of items
- Space complexity: O(1)

## insert(index, item)

This function inserts an item at a given index.

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

For inserting at the end and in the beginning, I used `push(item)` and `prepend(item)` respectively.

When we insert in the middle, we need to shift all elements to the right from `index` to `size`. And finally we can insert the item at `arr[index]`.

- Time complexity: O(2N) -> O(N), N = number of items
- Space complexity: O(1)

## pop()

This function removes an item at the end of the array.

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

We're not actually deleting anything here but just pretending by reducing the size.

- Time complexity: O(1)
- Space complexity: O(1)

## delete(index)

This function deletes an item at given `index`.

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

I'm shifting all elements to the left from `index` where we're trying to delete.
And then reduce the total size so that it looks like it's deleted from the array.

- Time complexity: O(N), N = number of items
- Space complexity: O(1)

## find(item)

I'm performing a linear search here to find an item from the array.

```rust
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

If `item` is found, it returns the index of that item. If not, return `-1`.

- Time complexity: O(N), N = number of items
- Space complexity: O(1)

## remove(item)

This function removes all occurrences of `item` from the vector.

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

I used `find(item)` to get the index of 1st occurrence of `item` in the vector and passed that index in `delete(index)` to delete it.

- Time complexity: O(2N) -> O(N), N = number of items
- Space complexity: O(1)
