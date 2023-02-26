---
title: 'Stack: Array Implementation'
posttitle: 'Stack: Array Implementation'
date: '2022-07-07 08:20:00'
updated: '2022-10-31 18:00:00'
uid: 'F'
---

Stack is a linear data structure that follows a particular order (Last-In, Last-Out; LIFO) in which operations are performed.

Here's a simple analogy of Stack used in real life. Imagine the pile of plates on top of another.

[![elements on stack are added on top and removed from top just like a pile of plate](https://cdn.programiz.com/sites/tutorial2program/files/stack-of-plates_0.png)](https://www.programiz.com/dsa/stack)

Suppose that we cannot lift more than one plate at a time, there are only two actions we can perform: 1) put another plate on top of the pile, or 2) remove a plate from the pile.

In programming, putting the item on top of the stack is called **push** and removing an item is called **pop**.

To get the bottom plate, first we'll need to perform many **pop** operations.

## Pseudocode for Basic Operations

Click [here](https://github.com/bprsstnt/typescript-algorithms/tree/main/src/data-structures/stack-array) to view the entire implementation of array stack in TypeScript.

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

    return top == 0
END
```

## Time Complexity

|      | push | pop  | peek | empty |
| :--: | :--: | :--: | :--: | :---: |
| Time | O(1) | O(1) | O(1) | O(1)  |

## Applications of Stack

-   Reversing a word
-   Converting expressions to prefix or postfix form
-   Browsers: back button

## Problems

Stack related problems selected from [Leetcode](https://leetcode.com/tag/stack/).

|       #       | Problem                                              | Difficulty |
| :-----------: | :--------------------------------------------------- | :--------- |
|   [20][i20]   | Valid Parentheses                                    | Easy       |
|  [232][i232]  | Implement Queue using Stacks                         | Easy       |
|  [234][i234]  | Palindrome Linked List                               | Easy       |
| [1021][i1021] | Remove Outermost Parentheses                         | Easy       |
| [1047][i1047] | Remove All Adjacent Duplicates In String             | Easy       |
| [1614][i1614] | Maximum Nesting Depth of the Parentheses             | Easy       |
|  [173][i173]  | Binary Search Tree Iterator                          | Medium     |
|  [654][i654]  | Maximum Binary Tree                                  | Medium     |
|  [946][i946]  | Validate Stack Sequences                             | Medium     |
| [1008][i1008] | Construct Binary Search Tree from Preorder Traversal | Medium     |
| [1381][i1381] | Design a Stack With Increment Operation              | Medium     |
| [1441][i1441] | Build an Array With Stack Operations                 | Medium     |
| [1472][i1472] | Design Browser History                               | Medium     |
| [2130][i2130] | Maximum Twin Sum of a Linked List                    | Medium     |
|  [726][i726]  | Number of Atoms                                      | Hard       |
|  [736][i736]  | Parse Lisp Expression                                | Hard       |
|  [895][i895]  | Maximum Frequency Stack                              | Hard       |
| [1944][i1944] | Number of Visible People in a Queue                  | Hard       |

[i20]: https://leetcode.com/problems/valid-parentheses/
[i232]: https://leetcode.com/problems/implement-queue-using-stacks/
[i234]: https://leetcode.com/problems/palindrome-linked-list/
[i1021]: https://leetcode.com/problems/remove-outermost-parentheses/
[i1047]: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
[i1614]: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
[i173]: https://leetcode.com/problems/binary-search-tree-iterator/
[i654]: https://leetcode.com/problems/maximum-binary-tree/
[i946]: https://leetcode.com/problems/validate-stack-sequences/
[i1008]: https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
[i1381]: https://leetcode.com/problems/design-a-stack-with-increment-operation/
[i1441]: https://leetcode.com/problems/build-an-array-with-stack-operations/
[i1472]: https://leetcode.com/problems/design-browser-history/
[i2130]: https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
[i726]: https://leetcode.com/problems/number-of-atoms/
[i736]: https://leetcode.com/problems/parse-lisp-expression/
[i895]: https://leetcode.com/problems/maximum-frequency-stack/
[i1944]: https://leetcode.com/problems/number-of-visible-people-in-a-queue/

## See also

-   [Stack - Linked List](./stack-linked-list)
