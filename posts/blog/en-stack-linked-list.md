---
title: 'Stack: Linked List'
posttitle: 'Stack'
postsubtitle: 'Part 02: Linked List Implementation'
date: '2022-07-09 07:30:00'
updated: '2022-11-02 09:26:00'
tags:
  - stack
  - data structure
lang: en
about: ds
---

Stack is a linear data structure that follows a particular order (Last-In, Last-Out; LIFO) in which operations are performed.

## Pseudocode for Basic Operations

Click [here](https://github.com/rolemadelen/typescript-algorithms/tree/main/src/data-structures/stack-linked-list/StackList.ts) to view the entire implementation of linked list stack in TypeScript.

### push

```text
push(top, value) → void
    Pre: top is the top node of the stack
         value is the value we're going to push it to the stack
    Post: new data is pushed to the stack

    n      ← new Node(value)
    n.next ← top
    top    ← n
END
```

### pop

```text
pop(top) → Node | null
    Pre: top is the top node of the stack
    Post: removes the top node from the stack; returns ø if failed

    n   ← top

    IF (top && top.next)
        top ← top.next
    END IF

    return n
END
```

### peek

```text
peek(top) → Node | ø
    Pre: top is the top node on the stack;
    Post: returns the top node on the stack; returns ø if stack is empty;

    IF (top)
        return top.value
    ELSE
        return ø
    END
END
```

### empty

```text
empty(top) → boolean
    Pre: top is the top node on the stack;
    Post: returns true if stack is empty; otherwise false;

    return top == ø
END
```

## Time Complexity

|      | push | pop  | peek | empty |
| :--: | :--: | :--: | :--: | :---: |
| Time | O(1) | O(1) | O(1) | O(1)  |

## Problems

Stack related problems selected from [GeeksForGeeks](https://practice.geeksforgeeks.org/explore?page=1&category%5B%5D=Stack&curated%5B%5D=1&sortBy=submissions&curated_names%5B%5D=SDE%20Sheet).

| Problem                                        | Difficulty |
| :--------------------------------------------- | :--------: |
| [Parenthesis Checker][i1]                      |    Easy    |
| [Queue using two Stacks][i3]                   |    Easy    |
| [Implement two stack in an array][i5]          |    Easy    |
| [Sort a stack][i7]                             |    Easy    |
| [Reverse a string using Stack][i9]             |    Easy    |
| [Special Stack][i10]                           |    Easy    |
| [Evaluation of Postfix Expression][i11]        |    Easy    |
| [Reverse First K elements of Queue][i12]       |    Easy    |
| [Delete middle element of a stack][i13]        |    Easy    |
| [Queue using stack][i16]                       |    Easy    |
| [Clone a stack without using extra space][i17] |    Easy    |
| [Implement stack using array][i4]              |   Basic    |
| [Implement stack using linked list][i6]        |   Basic    |
| [Get minimum element from stack][i2]           |   Medium   |
| [Infix to Postfix][i14]                        |   Medium   |
| [Reverse each word in a given string][i15]     |   Medium   |
| [Longest valid Parentheses][i8]                |    Hard    |

[i1]: https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1?page=1&category%5B%5D=Stack&sortBy=submissions
[i2]: https://practice.geeksforgeeks.org/problems/get-minimum-element-from-stack/1?page=1&category%5B%5D=Stack&sortBy=submissions
[i3]: https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1?page=1&category%5B%5D=Stack&sortBy=submissions
[i4]: https://practice.geeksforgeeks.org/problems/implement-stack-using-array/1?page=1&category%5B%5D=Stack&sortBy=submissions
[i5]: https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1?page=1&category%5B%5D=Stack&sortBy=submissions
[i6]: https://practice.geeksforgeeks.org/problems/implement-stack-using-linked-list/1?page=1&category%5B%5D=Stack&sortBy=submissions
[i7]: https://practice.geeksforgeeks.org/problems/sort-a-stack/1?page=1&category%5B%5D=Stack&sortBy=submissions
[i8]: https://practice.geeksforgeeks.org/problems/longest-valid-parentheses5657/1?page=1&category%5B%5D=Stack&sortBy=submissions
[i9]: https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1?page=1&category%5B%5D=Stack&sortBy=submissions
[i10]: https://practice.geeksforgeeks.org/problems/special-stack/1?page=1&category%5B%5D=Stack&sortBy=submissions
[i11]: https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1?page=2&category%5B%5D=Stack&sortBy=submissions
[i12]: https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1?page=2&category%5B%5D=Stack&sortBy=submissions
[i13]: https://practice.geeksforgeeks.org/problems/delete-middle-element-of-a-stack/1?page=2&category%5B%5D=Stack&sortBy=submissions
[i14]: https://practice.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1?page=2&category%5B%5D=Stack&sortBy=submissions
[i15]: https://practice.geeksforgeeks.org/problems/reverse-each-word-in-a-given-string1001/1?page=2&category%5B%5D=Stack&sortBy=submissions
[i16]: https://practice.geeksforgeeks.org/problems/queue-using-stack/1?page=3&category%5B%5D=Stack&sortBy=submissions
[i17]: https://practice.geeksforgeeks.org/problems/clone-a-stack-without-usinig-extra-space/1?page=3&category%5B%5D=Stack&sortBy=submissions

## See also

- [Stack - Array](./stack-array)
