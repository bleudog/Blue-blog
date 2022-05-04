---
title: "What is an Array?"
date: "2022-05-04 15:00:00"
tags: 
  - data structure
  - array
lang: en
---

## TL;DR
- Array - contiguous area of memory consisting of equal-size elements indexed by contiguous integers.
- constant-time access to any element.
- constant time to add or remove at the end.
- linear time to add or remove at an arbitrary location.

## Arrays
An array is a contiguous area of memory consisting of **equal-size** elements indexed by contiguous integers.

```c
int arr[] = {1, 2, 3, 4, 5};
```

![one-indexing](/images/posts/what-is-an-array/one-indexing.png)

We can access elements in an array directly using the index.

```c
int arr[] = {1, 2, 3, 4, 5};
printf("%d\n", arr[0]); // 1
printf("%d\n", arr[4]); // 5
```

First element is located at index 0 not 1. This is due to *zero-based indexing* which means the index goes from `0, 1, 2, ...` and up to `size - 1`

### Pointer Arithemetic
Name of the array is a pointer which points to the first element in the array.

```c
int arr[] = {1, 2, 3, 4, 5};

printf("%d\n", arr[0]); // 1
printf("%d\n", *arr); // 1
```

`arr[0]` is equivalent to `*(arr + 0)` which is same as `*arr`

```c
int arr[] = {1, 2, 3, 4, 5};

printf("%d    %d\n", arr[0], *(arr + 0)); // 1 1
printf("%d    %d\n", arr[1], *(arr + 1)); // 2 2
printf("%d    %d\n", arr[2], *(arr + 2)); // 3 3
printf("%d    %d\n", arr[3], *(arr + 3)); // 4 4
printf("%d    %d\n", arr[4], *(arr + 4)); // 5 5
```

When we add a value to the pointer (`arr`), we're not adding a number 0, 1, etc...

We're actually adding proper number of bytes. In this case, we're adding 4 bytes because our `arr` is an integer array and integers are normally 4 bytes -- **it's actually adding `sizeof(int)` bytes**.

Lets take a look at addresses and see if this statement is sound.
```c
#include <stdio.h>

int main(void) {
	int arr[] = {1, 2, 3, 4, 5};

	printf("%p\n", arr + 0);
	printf("%p\n", arr + 1);
	printf("%p\n", arr + 2);
	printf("%p\n", arr + 3);
	printf("%p\n", arr + 4);

	return 0;
}
```

It's highly unlikely that our addresses will be same so don't worry about that. But focus on how many bytes are increasing as you add 1 to the `arr`.

![pointer-arithemetic1](/images/posts/what-is-an-array/pointer-arithemetic1.png)

Indeed integers are 4 bytes in my machine, so 4 bytes are increased everytime you add 1 to the pointer of the integer array.

## 2-Dimensional Arrays

We used a single pair of bracket to create a linear array. We can attach another set to create a 2-D array.

```c
int arr[][5] = { {1,2,3,4,5}, 
                 {6,7,8,9,0} };
```

The first bracket is for *rows* and 2nd bracket for *columns*: `arr[ROW][COL]`

Just like 1-D array, we can use indexes to access elements in 2-D array.

![2-D Array](/images/posts/what-is-an-array/2darray.png)

We can get the first element in row 0 and column 0 by `arr[0][0]`.

## 2-D Array in memory

We represented 2-D array using rows and columns but in memory, everything is 1-dimensional.

![2D Array in 1D](/images/posts/what-is-an-array/2darray-in-1d.png)

Try displaying the address of each value in 2-D array. You can see that everything is contiguous.

![2darray-address](/images/posts/what-is-an-array/2darray-address.png)

Imagine we're representing a 2-D array using a 1-D array. 
Then, we can use `i = y * COLUMN + x` where `y = row` and `x = column`, to get the correct index. 

For example, the index for `arr[1][3]` is going to be `i = 1 * 5 + 3` which is `8` (9th element).

### Pointer Arithemetic in 2-D Array

We're going to use the same formulae `i = y * COLUMN + x` and add this to our array. Since it's a 2-D array, we need to dereference it twice.
```c
#include <stdio.h>

int main(void) {
	const int COL = 5;
	int arr[][COL] = { {1,2,3,4,5}, {6,7,8,9,0}};

	printf("%d    %d\n", arr[0][0], **arr); // 1 1
	printf("%d    %d\n", arr[0][0], *(*arr + (0*COL + 0))); // 1 1
	printf("%d    %d\n", arr[0][1], *(*arr + (0*COL + 1))); // 2 2
	printf("%d    %d\n", arr[0][2], *(*arr + (0*COL + 2))); // 3 3 
	printf("%d    %d\n", arr[0][3], *(*arr + (0*COL + 3))); // 4 4
	printf("%d    %d\n", arr[0][4], *(*arr + (0*COL + 4))); // 5 5

	printf("%d    %d\n", arr[1][0], *(*arr + (1*COL + 0))); // 6 6 
	printf("%d    %d\n", arr[1][1], *(*arr + (1*COL + 1))); // 7 7 
	printf("%d    %d\n", arr[1][2], *(*arr + (1*COL + 2))); // 8 8 
	printf("%d    %d\n", arr[1][3], *(*arr + (1*COL + 3))); // 9 9
	printf("%d    %d\n", arr[1][4], *(*arr + (1*COL + 4))); // 0 0 
	return 0;
}
```



## Times for Common Operations
Adding and removing a data:
- Beginning: O(N) / O(N) - *requires shifting*
- End: O(1) / O(1)
- Middle: O(N) / O(N) - *requires shifting*

Arrays are great for adding or removing at the end but not so much for beginning nor middle.

## Leetcode: Array problems
- [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- [896. Monotonic Array](https://leetcode.com/problems/monotonic-array/)
- [977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

## Reference
- [https://www.coursera.org/lecture/data-structures/arrays-OsBSF](https://www.coursera.org/lecture/data-structures/arrays-OsBSF)