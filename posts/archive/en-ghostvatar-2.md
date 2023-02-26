---
title: '👻 Toy Project: Ghostvatar pt.2'
posttitle: 'Ghostvatar'
postsubtitle: '👻 Reflection Part 02'
date: '2022-07-17 22:00:00'
tags:
    - side-project
lang: en
about: log
---

**Ghostvatar** is a simple avatar maker for your profile picture.

Zero work on UI for now, but this is generally what the whole project is about: decorate and save.

![Ghostvatar Demo](/images/posts/ghostvatar/ghostvatar-demo.gif)

---

## Changing parts

For each parts (eyes, mouth, hands, etc...), I used my iPad to draw each one of them and saved it locally.
There must be better ways to store images but I'll update it later.
![Ghostvatar Demo](/images/posts/ghostvatar/assets.jpg)

As you can see, all images share same file names except for the numerical value at the end.
I simply incremented or decremented that value as the user presses `Next` or `Prev` button, and re-assigned the `src` in the image tag.

```js
let eye = 1;
const EYE_MAX = 6;

function switchPrevEye() {
    const eyeImg = document.querySelector('.ghost-eye__img');
    eye -= 1;
    if (eye <= 0) eye = EYE_MAX;
    eyeImg.src = `./assets/eyes/ghost-eye${eye}.png`;
}

function switchNextEye() {
    const eyeImg = document.querySelector('.ghost-eye__img');
    eye += 1;
    if (eye > EYE_MAX) eye = 1;
    eyeImg.src = `./assets/eyes/ghost-eye${eye}.png`;
}
```

_“Wait, does re-assigning cause the web to re-fetch the image even though it's cached? 🤔 It shouldn't.. it's cached so .. no right? As I'm writing this post, I'm thinking that maybe it's better just to load all the images first and just toggle `display: none` instead of re-assigning the image source... hmm anyway. I'll think about it after I finish writing this post.“_

## Save it

I wasn't sure how to save my ghosts.

Thanks to stackoverflow, I learned about this library [html2canvas](https://html2canvas.hertzen.com/).

```js
function saveImage() {
    html2canvas(document.querySelector('.preview'), { scale: 4 }).then(
        (canvas) => {
            let canvasUrl = canvas.toDataURL();
            // Create an anchor, and set the href value to our data URL
            const createEl = document.createElement('a');
            createEl.href = canvasUrl;

            // This is the name of our downloaded file
            createEl.download = 'ghostvatar';

            // Click the download button, causing a download, and then remove it
            createEl.click();
            createEl.remove();
        }
    );
}
```

One issue though. Downloaded image using `html2canvas` was a bit blurry.

![Ghostvatar Demo](/images/posts/ghostvatar/blurry-ghost.png)

I had to set `scale` to get better quality.

```js
  html2canvas(document.querySelector(".preview"),{scale:4}).then(...);
```

![Ghostvatar Demo](/images/posts/ghostvatar/clear-ghost.png)

---

see also:

-   [👻 Toy Project::Ghostvatar pt.1](./ghostvatar-1)
-   [👻 Toy Project::Ghostvatar pt.3](./ghostvatar-3)

Link:

-   [Ghostvatar repository](https://github.com/bprsstnt/ghost-vatar)
