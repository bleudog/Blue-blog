---
title: 'JavaScript30 Challenge [1/30] - Drum Kit'
posttitle: 'JavaScript Drum Kit'
date: '2023-02-02 13:00:00'
tags:
    - javascript
    - programming
lang: en
about: dev
---

[JavaScript30](https://github.com/wesbos/JavaScript30) is mini project challenge designed by Wes Bos.

First challenge was to create a JavaScript Drum Kit. Here's a [demo](https://rolemadelen.github.io/js30/01-drum-kit/index.html).

![demo image](/images/posts/dev/js30/drumkit/demo.jpg)

---

I've added two changes to the program.

1. Added a click event listener
2. added media queries

## Clickable event

This code below is the original code from the project which listens to your keypress and plays the corresponding sound.

```js
window.addEventListener("keydown", playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
```

I added `click` event listener to each key so that you can also click on it.

```js
window.addEventListener("keydown", playSound);
keys.forEach(key => key.addEventListener('click', playSound));

function playSound(e) {
    let keycode = e.keyCode;

    if(!e.keyCode) { // get keyCode from a click
        keycode = e.currentTarget.dataset.key;
    }

    const audio = document.querySelector(`audio[data-key="${keycode}"]`);
    const key = document.querySelector(`.key[data-key="${keycode}"]`);
    if(!audio) return;

    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add('playing');
}
```

## Media Query

Nothing too fancy but added these media queries to rearrange keys on a smaller screen.

```css
@media all and (max-width: 768px) {
  .keys {
    display: grid;
    grid-template-columns: 33% 33% 33%;
  }
}

@media all and (max-width: 420px) {
  .keys {
    display: grid;
    grid-template-columns: 40% 40%;
  }
}

@media all and (max-width: 320px) {
  .keys {
    display: grid;
    grid-template-columns: auto;
  }
}
```

![media query](/images/posts/dev/js30/drumkit/media-query.gif)