---
title: 'Regex: Detecting Foreign Characters'
posttitle: 'Regex: Detecting Foreign Characters'
date: '2022-12-19 17:00:00'
uid: 'H'
---

Depends on the language of the name (English or Japanese), I need to display names in different order: `<FIRST> <LAST>` (western convention) or `<LAST> <FIRST>` (eastern convention); _I apologize if this isn't necessarily western or eastern._

At first, I thought about grabbing the language of the page stored in our cache storage and use if-else clause to display names in one or the other order.

```js
// not necessarily a working code
const currentLanguage = cache.get('language');

if (currentLanguage === 'ja') {
    console.log(`${lastName} ${firstName}`);
} else {
    // default
    console.log(`${firstName} ${lastName}`);
}
```

But this wont solve the issue, because we can still have English or 日本語 names regardless of the set language of the page.

So I focused on the name itself and thought maybe I can use Regular Expressions or [Regex](https://en.wikipedia.org/wiki/Regular_expression).

I have two options:

1. create a regex to check for alphanumeric (numbers why not) for English names or,
2. create a regex to check for Japanese characters.

My first attempt was to do with alphanumeric because it seems much easier:

```js
const isalnum = /^[A-Za-z0-9]*$/;

let firstName = 'Madelen';
let lastName = 'Role';

if (isalnum.test(firstName) && isalnum.test(lastName)) {
    console.log(`${firstName} ${lastName}`);
} else {
    console.log(`${lastName} ${firstName}`);
}
```

Problem solved?

Well, I thought I solved the problem. But, I forgot how dynamic or complex western names can be.
It may include spaces or apostrophes.

Okay, so I can add those two to regex:

```js
const isalnum = /^[A-Za-z0-9' ]*$/;
```

What about latin characters like `À`, `Æ`, `Â`, `Ç`, `È`, `É`, `Ê`, `Ë`, `Ô`, `Õ`, `Ö`, `Ù` ,`Ú`, and so on.

Are those really used in names? Well I don't know. That's the issue.

I found [this](https://grad.ucla.edu/gasaa/etd/specialcharacters.pdf) list of approved special characters from UCLA to be displayed on their dissertation titles. I thought about using these ascii codes from 32 to 255 to make my life easier:

```js
const approvedCharaters = /^[ -ÿ]*$/;
```

but it contains too many garbage that I don't want to include.

So f!#$ it.

I'm gonna go for Japanese characters and here you go.

```js
const iskanakanji = /^[一-龠ぁ-ゔァ-ヴー々〆〤]*$/;
```

The idea is basically the same. I'm checking ranges of ascii code which only contains kana or kanji characters unlike alpha-latin-numerics. I did break it up into multiple ranges to avoid some unnecessary parts but it's still much shorter and cleaner than the other option (I think).

Now I can use `iskanakanji` regex to check if names are Japanese and if it is, display names in `<LAST> <FIRST>` format. Otherwise, display it in `<FIRST> <LAST>` format.

👍🏼
