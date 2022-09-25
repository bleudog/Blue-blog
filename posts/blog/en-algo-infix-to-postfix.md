---
title: 'Algorithm: Convert infix to postfix form'
posttitle: 'Convert Infix to Postfix'
date: '2022-07-09 11:00:00'
tags:
  - infix
  - postfix
  - stack
lang: en
about: algo
---

We can use a stack to convert the infix expression like `A*B/C+D` to postfix(`AB*C/D+`) form.

![Infix to Postfix GIF](/images/posts/infix-to-postfix/infix-to-postfix.gif)

# Algorithm

1. Scan the infix expression from left to right.
2. If the scanned character is an operand, output it.
3. If the scanned character is `(`, push it to stack.
4. If the scanned character is `)`,
   - pop every operands in the stack until `(` is found.
   - pop `(` from the stack.
5. Else,
   - if precedence of the scanned character is less than or equal to the precedence of the operand on top of the stack, pop the operand from the stack and display it.
   - repeat until above condition is false.
   - then, push the scanned character to the stack.
6. Repeat above steps until infix expression is scanned.
7. Pop everything from the stack and display it.

# Implementation

`prec` is a method that returns the precedence of an operator.

```rb
def prec(c)
    if c == '*' or c == '/'
        return 2
    elsif c == '+' or c == '-'
        return 1
    else
        return -1
    end
end
```

We're only considering basic arithmetic operators: `+`, `-`, `/`, and `*`. You can add more operators like `^` for exponents and add an additional branch with a higher priority (e.g. `3`).

```rb
expr = "A*B/C+D"
stack = []
postfix = ""

# 1. Scan the infix expression from left to right.
expr.each_char { |c|
    # 2. If the scanned character is an operand, output it.
    if c>='A' and c<='Z'
        postfix += c
    # 3. If the scanned character is `(`, push it to stack.
    elsif c == '('
        stack.push(c)
    # 4. If the scanned character is `)`,
    elsif c == ')'
        # - pop every operands in the stack until `(` is found.
        while stack.last != '('
            postfix += stack.pop
        end
        # - pop `(` from the stack.
        stack.pop
    # 5. Else
    else
        # - if precedence of the scanned character is less than or equal to
        # the precedence of the operand on top of the stack,
        # pop the operand from the stack and display it.
        while !stack.empty? and (prec(c) <= prec(stack.last))
            postfix += stack.pop
        end
        # - then, push the scanned character to the stack.
        stack.push(c)
    end
}

# 7. Pop everything from the stack and display it.
while !stack.empty?
    postfix += stack.pop
end

puts postfix
```

---

Reference:

- [https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/](https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/)
