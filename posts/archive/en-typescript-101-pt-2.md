---
title: 'TypeScript: TS Basic pt.2'
posttitle: 'TypeScript 101'
postsubtitle: 'Data Types in TypeScript'
date: '2022-10-16 19:30:00'
tags:
  - typescript
  - note
lang: en
about: programming
---

## Built-in Types

JavaScript provide these built-in types:

- number
- string
- boolean
- null
- undefined
- object

TypeScript introduces couple more data types:

- any
- unknown
- never
- enum
- tuple

## The 'any' type

`any` represents any types of value.

```ts
let level; // any
level = 1;
level = 'a';

let value: any = 1;
value = true;
value = 'hello';
```

Below code throws an error.

```js
// (parameter) document: any
// Parameter 'document' implicitly has an 'any' type.ts(7006)
function render(document) {
  console.log(document);
}
```

We can turn this error off by setting `noImplicitAny` to `false` in `tsconfig.json`, but we don't recommend doing this because it defeats the purpose of using TS.

## Arrays

```ts
let numbers: number[] = [1, 2, '3']; // error
```

in below, `numbers` will have a type of an array of `any`.

```ts
let numbers = [];
numbers[0] = 1;
numbers[1] = true;
```

To make it store only the numbers, we can give `number[]` type.

```ts
let numbers: number[] = [];
numbers[0] = 1;
numbers[1] = true; // ERROR
```

## Tuples

```ts
let user: [number, string] = [1, 'Madelen'];
```

## Enums

```ts
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
enum Size {
  Small, // default 0
  Medium, // 1
  Large, // 2
}
```

if you declare `enum` with `const`, it will generate more optimized JS code.

Compiled code when `enum` was used:

```js
'use strict';
var Size;
(function (Size) {
  Size[(Size['Small'] = 0)] = 'Small';
  Size[(Size['Medium'] = 1)] = 'Medium';
  Size[(Size['Large'] = 2)] = 'Large';
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
```

Compiled JS code when `const enum` was used:

```js
'use strict';
let mySize = 1;
console.log(mySize);
```

## Functions

```ts
function calculateTax(income: number): number {
  return 0;
}
```

We recommend turning on the `"noUnusedParameters": true` to fire an error when passed paremeters aren't used.

Also `"noImplicitReturns": true` for not specifying the return statement at the end.

```ts
function calculateTax(income: number) {
  if (income < 50_000) {
    return income * 1.2;
  }
  // no implicit return
}
```

---

Here's a function with 2 parameters:

```ts
function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2022);
```

what if we want to skip the `taxYear` and just supply `calcuateTax(10_000)`?

1. use JS trick

```ts
if((taxYear || 2022) < 2022)
```

2. give the default value

```ts
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
```

We recommend using the default value.

## Objects

```ts
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Madelen',
  retire: (date: Date) => {
    console.log(date);
  },
};
```

This code can be polished using type aliases 👇🏼

---

## Type Aliases

Type alias allows you to create a custom type.

```ts
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: 'Madelen',
  retire: (date: Date) => {
    console.log(date);
  },
};
```

## Unions and Type Narrowing

We can use `|` symbol to allow a variable to accept more than one type.

```ts
function kgToLbs(weight: number | string): number {
  // narrowing - narrow down the type
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs('10kg');
```

## Intersection

Similarly, we can use `&` character to make sure a data is of both type `A` and `B`. Which sounds a bit weird.

```ts
let num: number & string;
```

How can `num` be a both number and string at the same time? We wouldn't normally use _Intersection_ with primitive types, but rather use it with custom types.

```ts
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
```

## 'never' type

```ts
let num: number & string;
```

Here `num` will have a type of `never`.

## Literal Type

```ts
type Quantity = 50 | 100;
type Metric = 'cm' | 'm';

let quantity: Quantity = 100;
let metric: Metric = 'cm';
```

## Nullable types

```ts
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log('Hola!');
}

greet('madelen');
greet(null);
greet(undefined);
```

## Optional Chaining - `.?`

```ts
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

// Optional property access operator
// if (customer !== null && customer !== undefined)
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if (customers !== null && customers !== undefined)
customers?.[0];

// Optional call
// let log: any = (message: string) => console.log(message);
// log('a');
let log: any = null;
log?.('a');
```

## Reference

- [https://youtu.be/d56mG7DezGs](https://youtu.be/d56mG7DezGs)
