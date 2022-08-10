---
title: "Ruby - Iterate over characters in a string"
date: "2022-07-07 22:45:00"
tags:
  - ruby
lang: en
about: programming
---

Imagine you have a string `hello world` and you want to count number vowels in the string.

# Using indexes
We can iterate over characters using the index and check if a character is a vowel:
```rb
str = "hello world"
vowels = 0

i = 0
str.size.times do
    if vowel? (str[i])
        vowels += 1
    end
    i+=1
end

puts "Vowels: #{vowels}"

```

There's a simpler way to iterate over characters.

# Using `each_char`
```rb
str = "hello world"
vowels = 0

str.each_char do |c|
    if vowel? (c)
        vowels += 1
    end
end

puts "Vowels: #{vowels}"
```

If you need an index, you can attach `with_index` after `each_char`:

```rb
str = "hello world"
str.each_char.with_index do |char, idx|
    puts "char: #{char}    index: #{idx}"
end
```

output: 
```text
char: h    index: 0
char: e    index: 1
char: l    index: 2
char: l    index: 3
char: o    index: 4
char:      index: 5
char: w    index: 6
char: o    index: 7
char: r    index: 8
char: l    index: 9
char: d    index: 10
```

---

# Reference

- [https://code-maven.com/iterate-over-character-of-a-string-in-ruby](https://code-maven.com/iterate-over-character-of-a-string-in-ruby)