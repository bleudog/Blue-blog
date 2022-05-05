---
title: "Dynamic Array"
date: "2022-05-04 19:40:00"
tags: 
  - data structure
  - array
  - dynamic array
lang: en
---

## TL;DR
- array sizes are determined at the compile time not runtime
- static array prohibits altering the container size during the runtime
- dynamic arrays can be resized
- appending a new element to a dynamic array is often constant but can take linear time
- some space is wasted because we're resizing by factor of 2 meaning half of the array is not used time to time.

---

## Static Arrays
An issue with a static array is that they're *static*.

```c
int arr[100];
arr = arr[200]; // NOT POSSIBLE
```

The size in a static array is determined during the complie time and we cannot alter it during the runtime.

### Semi-solution
A semi-solution to this is to use a *dynamically-allocated array*.

```c
int size;
scanf("%d", &size);

// allocate memory
int *arr = (int *)malloc(sizeof(int) * size);

// deallocate memory
free(arr);
```

We read the size of an array from the user and allocated memory to create an array during the runtime -- the `free()` function is to deallocate the memory before program terminates otherwise it will cause a memory leak.

This is only a semi-solution because we still don't know the maximum input size. Lets say a user inputted a `100` for the size but what if our data exceeds 100 elements? We can check for the size everytime new data is inserted and prompt a user to enter a new size when the array is full... really though? 

What we need is a *dynamic array* or in other words, we need an array that can be resizable.

## Dynamic Array
The idea is to store a pointer to a dynamically allocated array.

![Dynamic array figure 1](/images/posts/dynamic-array/darray-m.png)

 And replace it with a newly-allocated array as needed.

![Dynamic array figure 2](/images/posts/dynamic-array/darray-mid.png)

### Dynamic Array Operations
- `get(i)`: returns element at location `i`
- `set(i, data)`: sets element `i` to `data`
- `pushback(data)`: adds `data` to the end
- `remove(i)`: removes element at location `i`
- `size()`: returns the number of elements in the array

### Pseudocode: `pushback(data)`

```rb
def pushback(data)
    if size == capacity
        # newy-allocated array will be twice bigger
        allocate new_arr[2 * capacity]

        # copy over existing data
        for i from 0 to size - 1:
            new_arr[i] = arr[i]
        end

        # deallocate exisiting array
        free arr

        # update the pointer
        arr = new_arr;
        capacity = 2 * capacity;
    end

    # insert the data
    arr[size] = data
    size = size + 1
end
```

### Pseudocode: `remove(i)`

```rb
def remove(i)
    if i < 0 or i >= size
        ERROR: index out of range
    end

    for j from i to size-2
        arr[j] = arr[j+1]
    end

    size = size - 1
end
```

Rest of functions (`get`, `set`, `size`) are trivial.

## Runtimes
- `get(i)`: O(1)
- `set(i, data)`: O(1)
- `pushback(data)`: O(1) but can be O(n)
- `remove(i)`: O(n)
- `size()`: O(1)

Appending a new data to a dynamic array is often constant but can take up linear time.

## Reference
- [https://www.coursera.org/lecture/data-structures/dynamic-arrays-EwbnV](https://www.coursera.org/lecture/data-structures/dynamic-arrays-EwbnV)