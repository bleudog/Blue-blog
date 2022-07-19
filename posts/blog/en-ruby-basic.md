---
title: "Ruby Basics"
date: "2022-07-19 22:00:00"
tags: []
lang: en
about: ruby
---

# Displaying values
You can use `puts` to display values to the screen.

```rb
puts "Hello, World"
puts 1+2
```

output:
```rb
Hello, World
3
```

# Data Types
## Numbers

There are 2 types of numbers in Ruby: *integers* and *floating point numbers*.

```rb
puts 1+2        # 3
puts 1.0 + 2.0  # 3.0
```

**Integers** are numbers without decimal points (e.g. `1`, `100`, `123`, etc..).  Floating point numbers, or **floats**, are numbers with decimal points (e.g. `1.0`, `3.14`, `2.1234`, etc...).


### Simple Arithmetic
```rb
puts 16 + 1   # 17
puts 18 - 1   # 17
puts 8.5 * 2  # 17.0
puts 34 / 2   # 17
```

You can use parenthesis to add more complexity to the expression:
```rb
puts (2 * (12 + 5)) / 2  # 17
```

## Strings

Anything that goes between a single quote(`''`) or double quotes(`""`) are called letters or *strings* in programming. 

```rb
puts 'hello'
puts "hello"
```

They're merely the same but consider the following:
```rb
puts 'What's your name?'
```

This will cause an error because a computer can't distinguish whether that single quote is part of the string or a notation used to denote a string. 

A simple solution to this is to use the double quote:
```rb
puts "What's your name?"

# What's your name?
```

Or you can *escape* the character:
```rb
puts 'What\'s your name?'

# What's your name?
```

When we use `\'` , we're telling the computer that this character is part of the string. We can also escape a backslash by using `\\`.

### String Arithmetic

We can add strings just like a number:
```rb
puts "Hello " + "World!"
# Hello World!

puts "My favourite number is " + 17.to_s
# My favourite number is 17
```

`to_s` turns the object into a string.

---

We can also multiply strings:
```rb
puts "Hello " * 3
# Hello Hello Hello
```

Multiplication is simply an addition, that's why both operations work. However, we cannot subtract nor divide a string. 

## Booleans

Booleans are `true` or `false` value. These are different from strings `"true"` and `"false"`. 

```rb
puts 1 > 2 # false
puts 1 < 2 # true

puts 2 <= 2 # true
puts 2 >= 2 # true

puts 1 == 1 # true
puts 1 != 2 # false
```

Booleans are used to control the flow of a program (e.g., conditions).

In the program below, the `while` loop will print `Hello, World!` while the condition `n >= 0` is `true`.
```rb
n = 5
while n >= 0
	puts "Hello, World!"
	n -= 1
end
```

output:
```text
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
```

---

Reference:
- [https://pine.fm/LearnToProgram](https://pine.fm/LearnToProgram/chap_00.html)