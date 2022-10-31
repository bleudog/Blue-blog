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
    RETURN val
END
```

### peek

```text
peek(stack, top) → Type | undefined
    Pre: stack is the stack array
         top is an index or a position in stack
    Post: returns the top element in the stack

    RETURN stack[top - 1]
END
```

### empty

```text
empty(stack, top) → boolean
    Pre: stack is the stack array
         top is an index or a position in stack
    Post: returns true if stack is empty; otherwise false;

    RETURN top === 0
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

---

Click [here](https://github.com/rolemadelen/typescript-algorithms/tree/main/src/data-structures/stack-array) to view the entire implementation of array stack in TypeScript.
