---
title: 'JavaScript30 Challenge [3/30] - CSS Variables'
posttitle: 'Update CSS Variables with JavaScript'
date: '2023-02-07 13:00:00'
tags:
    - javascript
    - programming
lang: en
about: dev
---

[JavaScript30](https://github.com/wesbos/JavaScript30) - third challenge is more about understanding CSS variables.

![demo image](/images/posts/dev/js30/css-variables/example.jpg)

Here's a [demo](https://rolemadelen.github.io/js30/03-css-variables/index.html).

---

## CSS Variables

You can declare variables using `--name` format under `:root` selector.

```css
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 0px;
}
```

You can retrieve these values using `var()` function. 

The format of the function is `var(--name, value)`.

- `--name` _(Required)_ - your declared variable
- `value` _(Optional)_ - the fallback value.

```css
img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}
```

## Update CSS Variables using JS

How do you update CSS variables using JS?

You can use `setProperty(--name, value)`.

```js
document.documentElement.style.setProperty('--blur', '10px')
```
