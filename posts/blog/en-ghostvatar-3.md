---
title: '👻 Toy Project: Ghostvatar (fin)'
posttitle: 'Ghostvatar'
postsubtitle: '👻 Reflection Part 03'
date: '2022-07-17 22:00:00'
tags:
  - side-project
lang: en
about: log
---

**Ghostvatar** is a simple avatar maker for your profile picture.

![Ghostvatar Demo](/images/posts/ghostvatar/after.gif)

Try it yourself [here](https://ghostvatar.netlify.app/).

---

Before I finalized my design, it was like this:
![Ghostvatar Before](/images/posts/ghostvatar/before.gif)

I had a default image displayed using the `img` tag and had the rest of images prefetched using the `link rel="prefetch"`.

```html
<div class="ghost-head">
  <img src="./assets/head/ghost-head1.png" class="ghost-head__img" />
  <link
    rel="prefetch prerender"
    href="./assets/head/ghost-head2.png"
  />
  <link
    rel="prefetch prerender"
    href="./assets/head/ghost-head3.png"
  />
  <link
    rel="prefetch prerender"
    href="./assets/head/ghost-head4.png"
  />
  <link
    rel="prefetch prerender"
    href="./assets/head/ghost-head5.png"
  />
  <link
    rel="prefetch prerender"
    href="./assets/head/ghost-head6.png"
  />
</div>
```

Looking at the network tab from the dev console, it looks like those images are prefetched, however, it was still slow when changing the parts.

So instead, I let it display all those parts on the side in advance. I'm not sure whether prefetching and actually displaying images on the site have any difference, but it seems
loading faster (someone please let me know 😢).

![closet](/images/posts/ghostvatar/closet.jpg)

Another benefit of this approach was that it made my javascript code much simpler.
Previously, I had 2 functions (prev and next) per parts like the below:

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

Now it looks like this:

```js
function changeEye(n) {
  const eyeImg = document.querySelector('.ghost-eye__img');
  eyeImg.src = `./assets/eyes/ghost-eye${n}.png`;
}

const closetEye = document.querySelector('.closet-eye');

for (let i = 0; i < closetEye.children.length; i += 1) {
  closetEye.children[i].addEventListener('click', () =>
    changeEye(i + 1)
  );
}
```

It was a fun project :)

---

See also:

- [👻 Toy Project::Ghostvatar pt.1](./ghostvatar-1)
- [👻 Toy Project::Ghostvatar pt.2](./ghostvatar-2)

Link:

- [Ghostvatar repository](https://github.com/rolemadelen/ghost-vatar)
