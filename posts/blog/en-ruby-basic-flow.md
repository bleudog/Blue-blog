---
title: 'Ruby: if-else And case'
posttitle: 'Ruby Basics'
postsubtitle: 'Flow Control: if-else and case'
date: '2022-07-24 15:00:00'
tags: ['ruby']
lang: en
about: programming
---

Imagine there's a calculator that performs only addition no matter what the actual operation is.

```rb
operandA, op, operandB = gets.chomp.split(' ')
puts operandA.to_i + operandB.to_i
```

We can't call this a calculator, can we? It's more like an accumulator of some sorts.

We want our calculator to function differently based on given operator. We can control the flow of a program using `if-else` or `case` statements.

# If-else statement

Below code will execute different lines of code based on its operator.

```rb
operandA, op, operandB = gets.chomp.split(' ')

if op == '+'
    puts operandA.to_i + operandB.to_i
elsif op == '-'
    puts operandA.to_i - operandB.to_i
elsif op == '*'
    puts operandA.to_i * operandB.to_i
elsif op == '/'
    puts operandA.to_f / operandB.to_f
else
    puts "We don't support '#{op}' operator!"
end
```

Starting from the first condition (`op == '+'`), it will check if this condition is `true`. If it is, it will execute lines of code in that block. If not, continues to the next condition and finally `else` will be executed if no condition was met.

---

Whenever we use an `if-else` statement in Ruby, we can consider using a `case` statement instead. A `case` statement is often known as a `switch` statement in other programming languages.

# Case statement

The syntax is as follows:

```rb
case <variable>
when <condition1>
when <condition2>
else # when nothing matches - default | optional
end
```

Example:

```rb
operandA, op, operandB = gets.chomp.split(' ')

case op
when '+'
	puts operandA.to_i + operandB.to_i
when '-'
	puts operandA.to_i - operandB.to_i
when '*'
	puts operandA.to_i * operandB.to_i
when '/'
    puts operandA.to_f / operandB.to_f
else
    puts "We don't support '#{op}' operator!"
end
```

## Ranges in case

Personally, a `case` is more useful when dealing with ranges in condition.

In order to check if a number falls between 0 and 100 using `if`, we need to do...

```rb
if num >= 0 and num <= 100
end
```

Not bad. But with a `case`, we use a range format and it becomes much simpler.

```rb
case num
when 0..100
end
```

Another example:

```rb
case capacity
when 0
	puts "you're running out of gas!"
when 1..50
	puts "you need to put some gas now!"
when 51..99
	puts "you're fine."
when 100
	puts "the tank is full!"
else
	puts "there must be something wrong with your tank!"
end
```

## How case works under the hood

Using the above code as an example, what's really happening in Ruby is this:

```rb
0        === capacity
(1..50)  === capacity
(51..99) === capacity
100      === capacity
```

The condition is reversed because ruby calls `===` on the object on its left.

`===` is just like another method that can be implemented in any other classes. You can check how `===` is implemented in `Range` class in [github](https://github.com/rubinius/rubinius/blob/master/core/range.rb#L178).

## Should I use a `case`?

When there's a 1:1 mapping, it is tempting to use a `case` statement.

```rb
case country;
when "europe"
	url = "https://eu.example.com"
when "america"
	url = "https://us.example.com"
end
```

But instead, I'd use a hash because we don't want to go through each condition. It's better to just access directly to the bucket we need and get the data we want.

```rb
SITES = {
	"europe"  => "https://eu.example.com",
	"america" => "https://us.example.com"
}

SITES[country]
```

---

See also:

- [Ruby: Basic Syntax](./ruby-basic)

Reference:

- [https://pine.fm/LearnToProgram](https://pine.fm/LearnToProgram/chap_00.html)
- [https://www.rubyguides.com/2015/10/ruby-case/](https://www.rubyguides.com/2015/10/ruby-case/)
