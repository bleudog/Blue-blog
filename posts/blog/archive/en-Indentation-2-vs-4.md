---
title: 'Indentation - 2 vs 4'
posttitle: 'Code Style'
postsubtitle: 'Indentation - 2 or 4 spaces'
date: '2022-11-30 17:00:00'
tags:
  - programming
lang: en
about: pending
---

I use [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) in VS Code to format my code and my indents are set to 2 spaces.

![indents-prettier](/images/posts/blog/codestyle/indentation-2-vs-4.webp)

I believe it's a matter of taste whether one uses 2 or 4 spaces, but are their actually any practical or technical advantages for choosing one or the other?

## Tabs and Spaces

Just a quick note here about what I mean by 'tab'.

I convert all my tabs into spaces, because tab sizes can vary depends on the machine. Even if you indented nicely in your machine, it may look very off in others.

Spaces, however, consume 1 character space across all machine if I'm not wrong.

## Advantages of using one over the other?

I'd say "none".

I guess you can save some bytes when using 2-space indents but you can always minimize your code using other libraries or even extension, so it doesn't really matter whether you use 2 or 4 spaces here.

You can write more (2 characters more?) code in one-line but it's better to break down your code before it gets near 80 characters width so again, there's no advantage of using 2-space really.

One advantage I can think of using the 4-space indents is that you can differentiate the block a bit better than 2-space indents.

```ts
// 2-space indents

function foo() {
  if (...) {
    statement;
  } else {
    statement;
  }
}
```

```ts
// 4-space indents

function foo() {
    if (...) {
        statement;
    } else {
        statement;
    }
}
```

## Linux Kernel Coding Style

I found this [style guide for the linux kernel](https://www.kernel.org/doc/html/v4.10/process/coding-style.html) and it uses neither 2 or 4-space indents.

> Tabs are 8 characters, and thus indentations are also 8 characters. There are heretic movements that try to make indentations 4 (or even 2!) characters deep, and that is akin to trying to define the value of PI to be 3.

> Rationale: The whole idea behind indentation is to clearly define where a block of control starts and ends. Especially when you’ve been looking at your screen for 20 straight hours, you’ll find it a lot easier to see how the indentation works if you have large indentations.

> Now, some people will claim that having 8-character indentations makes the code move too far to the right, and makes it hard to read on a 80-character terminal screen. The answer to that is that if you need more than 3 levels of indentation, you’re screwed anyway, and should fix your program.

> In short, 8-char indents make things easier to read, and have the added benefit of warning you when you’re nesting your functions too deep. Heed that warning.

The benefit of using 8-spaces is that you can clearly distinguish each block and it hints you that your code is pretty complex (or just bad) if it has too many indents; 3 level, that's already 24 characters of empty spaces.

So, should you listen to Linus Torvalds and start using 8-space indents? Well depends.

> Coding style is very personal, and I won’t **force** my views on anybody, but this is what goes for anything that I have to be able to maintain, and I’d prefer it for most other things too.

I probably wont ever use 8-space indents but I get the point he's making. I might actually move up one and use 4-space indents instead of 2 spaces.
