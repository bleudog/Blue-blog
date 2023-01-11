---
title: 'addEventListener event on parent but targets children'
posttitle: 'addEventListener event on parent but targets children'
postsubtitle: 'target vs. currentTarget'
date: '2023-01-11 22:00:00'
tags:
  - programming
lang: en
about: dev
---

Take a look at this simple structure of code:

```html
<div class="faq">
	<div class="faq-q">
		<div class="faq-icon">
			<span>Q</span>
		</div>
		<div class="faq-text">
			<p>動作環境について教えてください。</p>
			<span class="plus">
				<span class="vertical"></span>
				<span class="horizontal"></span>
			</span>
		</div>
	</div>
</div>
```

With some styling, above code produces the below:

![FAQ Q part](/images/posts/dev/addeventlistener-event-on-parent-but-targets-children/faq-q.jpg)

Let say you want to toggle `unfold` class whenever you click `div.faq-q` tag. So you did the following:

```js
const faqQ = document.querySelector('.faq-q');

faqQ.addEventListener('click', (e) => {
	e.target.classList.toggle('unfold');
});
```

Unfortunately, this wont work. Try `console.log(e.target)` and you'll see that it targets different element depends on where you click.

![console.log(e.target)](/images/posts/dev/addeventlistener-event-on-parent-but-targets-children/e-target.jpg)

This is because `e.target` targets the actual element you're interecting with. It doesn't matter where the actual `addEventListener` event is hooked in to.

Well then. Is there any way we can target the element where `addEventListener` is attached to? We can use `e.currentTarget`.

```js
const faqQ = document.querySelector('.faq-q');

faqQ.addEventListener('click', (e) => {
	console.log(e.currentTarget);
});
```

`e.currentTarget` targets the element where the event is actually hooked in to and you'll always get that specific target wherever you click.

![console.log(e.currentTarget)](/images/posts/dev/addeventlistener-event-on-parent-but-targets-children/e-current-target.jpg)

Below code will work as you expected.

```js
const faqQ = document.querySelector('.faq-q');

faqQ.addEventListener('click', (e) => {
	e.currentTarget.classList.toggle('unfold');
});
```

![toggle class 'unfold'](/images/posts/dev/addeventlistener-event-on-parent-but-targets-children/unfold.gif)

---

ref: https://stackoverflow.com/questions/42644069/addeventlistener-event-on-parent-target-child
