---
title: 'TypeScript: TS Basic pt.1'
posttitle: 'TypeScript 101'
postsubtitle: 'What is TypeScript?'
date: '2022-10-16 19:00:00'
tags:
  - typescript
  - note
lang: en
about: programming
---

# TypeScript

Technically speaking, TS is an extension to JS. Anything you can do with JavaScript, you can do it in TypeScript.

**Benefits**

- static typing
- code completion
- refactoring
- shorthand notations

==statically typed==

```cpp
// e.g.) C++, Java, etc...

int num = 10;
num = 'a'; // ERROR
```

==dynamically typed==

```js
// e.g.) JavaScript, Ruby, etc...

let num = 10;
num = 'a'; // somebody changed it to a string

Math.round(num); // ERROR
```

**TS => JS with Type Checking**

```ts
let x: number = 10;
x = 'a'; // TS compiler throws an error
```

**Drawbacks**

- Compilation (bc TS needs to be compiled)
- Discipline in coding

You don't have to use TS for every project. If your project is big, you maybe want to use TypeScript. Otherwise, use JavaScript.

## Setting Up

```sh
npm i -g typescript
```

check the version

```sh
tsc -v
```

## Configuring the TS Compiler

```shell
tsc --init
```

this generates `tsconfig.json`.

Now you can run `tsc` in the terminal without the `.ts` and it will compile your code to `.js` in the path you gave for `outDir`.

## Reference

- [https://youtu.be/d56mG7DezGs](https://youtu.be/d56mG7DezGs)
