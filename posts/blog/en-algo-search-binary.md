---
title: 'Algorithm: Binary Search'
posttitle: 'Search Algorithm'
postsubtitle: 'Binary Search'
date: '2022-10-23 12:50:00'
tags:
  - algorithm
  - search
  - binary
lang: en
about: algo
---

## Binary Search

Binary search algorithm greatly reduces the number operations performed by halving the search range of the list in every iteration.

In order to perform binary search, the list must be sorted.

The algorithm compares the target with a middle element in the list. If mid-value is greater than the target, we ignore every element greater than the mid-value because it's guaranteed that the target is smaller than the middle value. And vice versa for the case of middle element being smaller than the target.

By repeating these steps, we can halve the search range in every iteration which makes it very efficient to look up the data in a large dataset. For example, it only takes 30 iterations to find a value in a list with 10 billion data.

## Complexity

|  Time   | Space |
| :-----: | :---: |
| O(logN) | O(1)  |

## Pseudocode

```textile
BinarySearch(arr, len, value) → number
    Pre: arr is a sorted array
         len is the total size
         value is the target to look for in the array
    Post: we know the index of the value in the list; -1 if DNE

    low  ← 0
    high ← n-1

    WHILE low <= high
        mid ← low + ((high - low) / 2)

        IF arr[mid] == value
            RETURN mid
        ELSIF arr[mid] < value
            low ← mid + 1
        ELSE
            high ← mid - 1
        END IF
    END WHILE

    RETURN -1
END BinarySearch
```

## Implementation

```ts
/**
 * Binary search implementation.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @return {number}
 */

export default function binarySearch(
  sortedList: number[],
  target: number
): number {
  let low = 0;
  let high = sortedList.length - 1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);

    if (sortedList[mid] === target) {
      return mid;
    } else if (sortedList[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
```
