---
title: "Ruby - Loop"
date: "2022-08-10 20:00:00"
tags: ["ruby"]
lang: en
about: programming
---

There are several ways to create a loop in Ruby:
- while loop
- for-range loop
- .upto or .downto
- .times, .. and more

---

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

We can use other loops and have the exact same output.

`for-range` loop
```rb
for i in (0..4)
	puts "Hello, World!"
end
```

`.times` loop
```rb
5.times do
	puts "Hello, World!"
end
```

`.upto` loop
```rb
0.upto(4) do
	puts "Hello, World!"
end
```

`.downto` loop
```rb
4.downto(0) do
	puts "Hello, World!"
end
```

`loop` loop
```rb
n = 5
loop do
	if n==0 then break end
	puts "Hello, World!"
	n -= 1
end
```

---

Reference:
- [https://pine.fm/LearnToProgram](https://pine.fm/LearnToProgram/chap_06.html)