---
title: 'Algorithm: Linear Search'
posttitle: 'Search Algorithm'
postsubtitle: 'Linear Search'
date: '2022-10-23 12:00:00'
tags:
  - algorithm
  - search
  - linear
lang: en
about: dev
---

## Linear Search

Linear search algorithm looks for the value in the list by checking every element one by one. The order of the data does not affect the performance of the algorithm.

## Complexity

| Time | Space |
| :--: | :---: |
| O(N) | O(1)  |

## Pseudocode

```text
LinearSearch(T[] arr, int len, T value) → number
    Pre: arr is the array of type T
         len is the total size
         value is the value we'll look for from the list
    Post: we know the exact position of the value in the list; -1 if not in the list.

    i ← 0
    WHILE (i < len)
        IF (arr[i] == value)
            return i
        END IF

        i ← i + 1
    END WHILE

    return -1
END LinearSearch
```

## Implementation

```ts
/**
 * Linear search implementation.
 * Return the index of the target if exists in the list. Else, return -1.
 *
 * @param {<T>[]} array
 * @param {T} target
 * @return {number}
 */

export default function linearSearch(arr: number[], target: number): number {
	const length = arr.length;

	for (let i = 0; i < length; ++i) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
}
```
