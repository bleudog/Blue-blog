---
title: "Ruby - Creating an infinite loop"
date: "2022-07-07 22:30:00"
tags:
  - ruby
lang: en
about: ruby
---

There are several ways to create an infinite loop in Ruby.

## loop
```ruby
loop do
    if gets.chomp == "finish"
        break
    end
end
```

## while
```ruby
while true
    if gets.chomp == "finish"
        break
    end
end
```

## until
```ruby
until false
    if gets.chomp == "finish"
        break
    end
end
```

## begin-end
```ruby
begin
    puts "Hello World!"
end while gets.chomp != "finish"
```

---

We can use an infinite loop to accumulate every values until the user enters `0`:

```rb
# sum.rb

sum = 0

loop do
    value = gets.to_i
    if value == 0 then break end
    sum += value
end

puts "Sum: #{sum}"
```

output: 
```text
> ruby sum.rb
1
2
3
4
5
6
7
8
9
10
0
Sum: 55
```

---

# Reference

- [https://launchschool.com/books/ruby/read/loops_iterators](https://launchschool.com/books/ruby/read/loops_iterators)
- [https://stackoverflow.com/questions/27139937/creating-an-infinite-loop](https://stackoverflow.com/questions/27139937/creating-an-infinite-loop)