---
title: "Ruby - Basics"
date: "2022-07-19 22:00:00"
tags: ["ruby"]
lang: en
about: programming
---

# Display data

You can use `puts` to display values to the screen.

```rb
puts "Hello, World"
puts 1+2
```

output:
```text
Hello, World
3
```

*puts* stands for *put string*. 

`puts` method turns everything into a string before it displays it to the screen.

---

# Read data

There's also a *get string* or `gets` to read a value from the user.

```rb
puts gets
```

This waits for your input, and displays the same input to the screen.
```text
> Hello, World!
Hello, World!
```

`gets.chomp` is often used to remove the new-line character at the end of the input.

---

# Variable
Variable is a named storage to store any data you want. Since Ruby is not a typed language, we don't need to specify any types before initializing a variable.

```rb
data = gets.chomp
puts "Hello " + data + "."

data = 17
puts "My favorite number is " + data.to_s

data = [1, 3.14, "abc", [true, false]]
puts data[2] # "abc"
```

---

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

Booleans are used to control the flow of a program (check *Loops* section below).

## Logical Operators
There are four different logical operators in Ruby:
### OR
OR logical operator returns `true` if any of the expression is `true`.

```rb
T = true
F = false

puts T or T # true
puts T or F # true
puts F or T # true
puts F or F # false
```

### AND
AND operator returns `true` only if all expressions are `true`.
```rb
T = true
F = false

puts T or T # true
puts T or F # false
puts F or T # false
puts F or F # false
```

### NOT
NOT operator simply reverse the boolean value from `true` to `false` and `false` to `true`.
```rb
T = true
F = false

puts not(T) # false
puts not(F) # true
```

### XOR
XOR operator returns true only if two expressions have different boolean values.

```rb
T = true
F = false

puts T ^ T # false
puts T ^ F # true
puts F ^ T # true
puts F ^ F # false
```

---

# Loops
A loop is used to run certain tasks multiple times. We use a condition to control the flow.

The below is a simple `while` loop that prints `Hello, World!` until condition becomes `false`.

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

The while-loop is not the only loop in Ruby. We can re-write above code in many different ways.

```rb
5.times do
    puts "Hello, World!"
end

0.upto(4) do 
    puts "Hello, World!"
end

4.downto(0) do 
    puts "Hello, World!"
end

for i in (0..4)
    puts "Hello, World!"
end
```

We also have a `loop` loop.
```rb
n = 5
loop do
    if n==0 then break end
    
	puts "Hello, World!"
	n -= 1
end
```

---

See also:
- [Ruby - Flow Control](./ruby-basic-flow)

Reference:
- [https://pine.fm/LearnToProgram](https://pine.fm/LearnToProgram/chap_00.html)