---
title: 'Stack: Array'
posttitle: 'Stack'
postsubtitle: 'Part 01: Array Implementation'
date: '2022-07-07 08:20:00'
updated: '2022-10-31 18:00:00'
tags:
  - stack
  - data structure
lang: en
about: ds
---

Stack is a linear data structure that follows a particular order (Last-In, Last-Out; LIFO) in which operations are performed.

Here's a simple analogy of Stack used in real life. Imagine the pile of plates on top of another.

[![elements on stack are added on top and removed from top just like a pile of plate](https://cdn.programiz.com/sites/tutorial2program/files/stack-of-plates_0.png)](https://www.programiz.com/dsa/stack)

Suppose that we cannot lift more than one plate at a time, there are only two actions we can perform: 1) put another plate on top of the pile, or 2) remove a plate from the pile.

In programming, putting the item on top of the stack is called **push** and removing an item is called **pop**.

To get the bottom plate, first we'll need to perform many **pop** operations.

## Pseudocode for Basic Operations

Click [here](https://github.com/rolemadelen/typescript-algorithms/tree/main/src/data-structures/stack-array) to view the entire implementation of array stack in TypeScript.

### push

```text
push(stack, top, value) → void
    Pre: stack is the stack array
         top is an index or a position of a new value to be inserted in stack
         value is the value to be inserted
    Post: new element is added at the top of the stack

    stack[top++] ← val;
END
```

### pop

```text
pop(stack, top) → Type
    Pre: stack is the stack array
         top is an index or a position in stack
    Post: top element has been removed from the stack

    val ← stack[--top]
    return val
END
```

### peek

```text
peek(stack, top) → Type | undefined
    Pre: stack is the stack array
         top is an index or a position in stack
    Post: returns the top element in the stack

    return stack[top - 1]
END
```

### empty

```text
empty(stack, top) → boolean
    Pre: stack is the stack array
         top is an index or a position in stack
    Post: returns true if stack is empty; otherwise false;

    return top === 0
END
```

## Time Complexity

|      | push | pop  | peek | empty |
| :--: | :--: | :--: | :--: | :---: |
| Time | O(1) | O(1) | O(1) | O(1)  |

## Applications of Stack

- Reversing a word
- Converting expressions to prefix or postfix form
- Browsers: back button

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
