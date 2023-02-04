---
title: 'JavaScript30 Challenge [2/30] - Clock'
posttitle: 'CSS and JavaScript Clock'
date: '2023-02-04 13:00:00'
tags:
    - javascript
    - programming
lang: en
about: dev
---

[JavaScript30](https://github.com/wesbos/JavaScript30) - second challenge is to create a clock using CSS and JavaScript.

Here's a [demo](https://rolemadelen.github.io/js30/02-clock/index.html).

![demo image](/images/posts/dev/js30/clock/clock.jpg)

---

## TIL
- `transform-origin`

By default `transform-origin` is set to `50%`. So if you rotate a tag using `transform: rotate()`, it will rotate from 50% width of your selected tag. 

For example, take a look at this gif.

![transform-origin](/images/posts/dev/js30/clock/transform-origin1.gif)

This is what it looks like when you didn't set `transform-origin`. Because default is `50%`, it rotates with center being the pivot.

Now if you set `transform-origin: 100%`, it moves the pivot to the right-end and it rotates as you expected.

![transform-origin](/images/posts/dev/js30/clock/transform-origin2.gif)

## Changes
I've made small changes on calculation of degrees for each hands.

This is the original code.

```js
const secondsDegrees = ((seconds / 60) * 360) + 90;
const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
```

I just simplified those expressions to get rid of parentheses.

```js
const secondsDegrees = seconds * 6 + 90;
const minutesDegrees = minutes * 6 + seconds / 10 + 90;
const hoursDegrees = hours * 30 + minutes / 2 + 90;
```

---

Also added below code to `setDate` to avoid `secondHands` going all the way back to 12-hour mark due to the `transition` CSS.

Once it hits 12-hour mark (`90deg`), I removed `transition` and set it back afterwards.

```js
if(secondsDegrees === 90) {
  secondHand.style.transition = "none";
} else {
  secondHand.style.transition = "all 0.5s cubic-bezier(0.1, 2.7, 0.58, 1)";
}
```

![transform-origin](/images/posts/dev/js30/clock/transition.gif)
