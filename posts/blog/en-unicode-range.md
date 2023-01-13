---
title: 'unicode-range: Different Language, Different Font Style'
posttitle: 'Different Language, Different Font Style'
postsubtitle: 'unicode-range'
date: '2023-01-13 05:00:00'
tags:
  - programming
lang: en
about: dev
---

I'm trying to set different font-styles for English and Japanese. One solution I found was to use the `:lang` pseudo-class.

```css
body {
	font-family: 'your font', sans-serif;
}
:lang(ja) {
	font-family: 'Klee-Medium', 'Noto Sans JP';
}
```

`:lang()` will target tags with a language attribute set to Japanese and change the font-family accordingly.

I didn't like this method though. Because this means I need to set the language attribute to every tags in a page which is nonsense. Also this wouldn't work for a sentence where both English and Japanese co-exists.

I mean I can put bunch of `<span lang="ja"></spean>` in between texts but again, I cannot do this for every texts on a page.

---

Another solution I found was `unicode-range`. Here's a description from the [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range).

> "The unicode-range CSS descriptor sets the specific range of characters to be used from a font defined by @font-face and made available for use on the current page. If the page doesn't use any character in this range, the font is not downloaded; if it uses at least one, the whole font is downloaded."

I got my ranges for Japanese (Hiragana, Katakana, and Kanji) from [Unicode Character Ranges](https://jrgraphix.net/r/Unicode/).

```text
3040 — 309F  	Hiragana
30A0 — 30FF  	Katakana
4E00 — 9FFF  	CJK Unified Ideographs
```

I can set these ranges when loading a font using `@font-face` in CSS.

```css
h1 {
	font-family: 'Klee-Medium', sans-serif;
}

// for Japanese
@font-face {
	font-family: 'Klee-Medium';
	src: local('Klee-Medium');
	unicode-range: U+3040-309F, U+30A0-30FF, U+4E00-9FFF;
}
```

If `h1` tag contains those unicode-range characters, it will render the font `Klee-Medium`.

```html
<h1>This is a paragraph in English.</h1>
<h1>これは日本語のパラグラフです。</h1>
<h1>Hello おはよう</h1>
```

![unicode-range example](/images/posts/dev/unicode-range/unicode-range.jpg)

You can inspect texts and see which fonts are rendered.

In the first `h1` tag, there are only english letters; thus, `Klee-medium` is not loaded.

![english rendered only](/images/posts/dev/unicode-range/en.jpg)

The third `h1` tag, however, contains both English and Japanese characters. So, it rendered two different fonts.

![english and japanese rendered](/images/posts/dev/unicode-range/en-ja.jpg)

---

By the way, here's a list of pre-installed Japanese fonts on macOS Sierra - https://wakufactory.jp/densho/font/osx_sierra.html
