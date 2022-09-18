---
title: 'Stack?'
date: '2022-07-07 08:20:00'
tags:
  - stack
  - data structure
lang: en
about: ds
---

# Stack

A stack is a linear data structure that follows the principle of LIFO (Last-In, First-Out). This means the last element added to the stack will be removed first. In other words, the first element that was added to the stack will be removed last (FILO; First-In, Last-Out).

Here's a simple analogy of Stack data structure used in real life. Imagine the pile of plates on top of another.

![elements on stack are added on top and removed from top just like a pile of plate](https://cdn.programiz.com/sites/tutorial2program/files/stack-of-plates_0.png)

Suppose that we cannot lift more than one plate at a time, there are only two actions we can perform: 1) put another plate on top of the pile, or 2) remove a plate from the pile.

In programming, putting the item on top of the stack is called **push** and removing an item is called **pop**.

To get the bottom plate, first we'll need to perform many **pop** operations.

# Basic Operations of Stack

## push

Add an element to the top of a stack.

```rb
def push(data)
    @arr[@item] = data
    @item += 1
end
```

## pop

Remove an element from the top of a stack.

```rb
def pop
    @item -= 1
    data = @arr[@item]
end
```

## isEmpty

Check if the stack is empty.

```rb
def empty?
    @item == 0
end
```

## isFull

Check if the stack is full.

```rb
def full?
    @item == @SIZE
end
```

## peek

Get the value of the top element without removing it.

```rb
def peek
    @arr[@item-1]
end
```

# Time Complexity

All operations in stack take constant time. That is, O(1).

# Applications of Stack

## Reversing a word

Push each letter to the stack and pop them out. Due to LIFO order of stack, we'll get letters in reverse order.

## Converting expressions to prefix or postfix form

We can use a stack to convert the infix expression like `1 + 2 - 3 / 4 * 5` to prefix(`- + 1 2 * / 3 4 5`) or postfix(`1 2 + 3 4 / 5 * -`) form.

## Browsers: back button

Each time we visit a page in the browser, URLs are saved in a stack. Once we click the back button, the current URL is removed from the stack, and the previous URL is accessed.

---

See also:

- [What is a Queue?](./what-is-a-queue)
- [Stack: LinkedList-based Implementation](./stack-implementation-linkedlist)
- [Stack related problems from BOJ and Leetcode](https://github.com/rolemadelen/DataStructures-and-Algorithms/tree/main/03-stack)

Reference:

- [https://www.programiz.com/dsa/stack](https://www.programiz.com/dsa/stack)
- image: [https://cdn.programiz.com/sites/tutorial2program/files/stack-of-plates_0.png](https://cdn.programiz.com/sites/tutorial2program/files/stack-of-plates_0.png)
