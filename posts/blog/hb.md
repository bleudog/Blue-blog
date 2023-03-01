---
title: '<li> 태그 ::marker와 counter'
posttitle: '<li> 태그 ::marker와 counter'
date: '2023-01-12 07:00:00'
uid: '57'
---

리스트 아이템(`list-item`)들은 모두 내부적으로 `::marker` pseudo-element를 가진다. 리스트라 하면 `li` 태그을 의미하는 것은 아니고 `display`가 `list-item`으로 설정된 모든 태그를 의미한다.

예를들면 `h1` 태그도 리스트로 만들수있다.

```html
<style>
    h1 {
        display: list-item;
    }
    h1::marker {
        content: '👋🏼 ';
    }
</style>

<h1>Hello</h1>
<h1>World</h1>
<h1>::marker</h1>
```

![h1 marker](/images/hb/h1-marker.jpg)

`list-item`은 `::marker`를 지니는 것 외에 한 가지 더 하는 일이 있다. 바로 리스트 아이템의 _counter_ 를 증가시키는 것이다.

아래 `ul`과 `ol`로 이루어진 리스트가 있다. _counter_ 를 알아서 증가시키기 때문에 `ol` 리스트에서 리스트 아이템이 1, 2, 3, ... 순차적으로 화면에 표시된다.

```html
<div class="example">
    <ul>
        <li>item One</li>
        <li>item Two</li>
        <li>item Three</li>
    </ul>
    <ol>
        <li>item One</li>
        <li>item Two</li>
        <li>item Three</li>
    </ol>
</div>
```

![ul and ol list](/images/hb/ul-ol.jpg)

그렇다면 카운터는 `ol` 리스트인 경우에만 존재하는 것일까?

`ul` 리스트의 `list-style-type`을 `number`로 바꿔보자. `ol`과 똑같아지는 걸 확인할 수 있다.

---

`::marker`와 `counter`를 사용해서 리스트 아이템을 원하는 포맷으로 출력할 수 있다.

예를들면 `ul`의 리스트 아이템들의 카운터를 괄호로 감싸줄수 있다.

```html
<style>
    li::marker {
        content: '(' counter(list-item) ')  ';
    }
</style>

<ol>
    <li>item One</li>
    <li>item Two</li>
    <li>item Three</li>
    <li>item Four</li>
</ol>
```

![parenthesis around list-item](/images/hb/format1.jpg)

또는 리스트 블럭마다 marker의 색상을 다르게하거나, 각기다른 포맷을 설정할수도 있다.

```html
<style>
    ul > li::marker {
        color: green;
        content: 'Note ' counter(list-item) ':  ';
    }

    ul > ol > li::marker {
        color: blue;
        content: counter(list-item, katakana) '   ';
    }
</style>

<ul>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
    <ol>
        <li>Nested Item 1</li>
        <li>Nested Item 2</li>
        <li>Nested Item 3</li>
    </ol>
    <li>List item Four</li>
</ul>
```

![different format per list](/images/hb/format2.jpg)

---

`counter()`는 스콥(scope)이 블럭(block)이기 때문에, 지정된 리스트 외에는 `counter()`로 설정한 포맷이 적용되지 않는다. 즉, 부모나 중첩된 리스트에는 적용이 되지 않는다.

위 예제에서 중첩된 리스트 `ul > ol li::marker`에 지정한 포맷을 지우면, 부모 리스트에서 지정한 `Note x`가 아닌 기본설정 1, 2, 3이 marker로 출력된다.

![singular - counter()](/images/hb/format3.jpg)

블럭이 아닌 트리 전체의 marker를 설정하고 싶다면 `counter()`의 복수형, `counters()`를 사용하면 된다.

```html
<style>
    ol li::marker {
        content: counters(list-item, '.') ': ';
    }
</style>

<ol>
    <li>Item One</li>
    <li>Item Two</li>
    <ol>
        <li>Nested 1</li>
        <li>Nested 2</li>
        <li>Nested 3</li>
        <ol>
            <li>Nested Nested A</li>
            <li>Nested Nested B</li>
            <li>Nested Nested C</li>
        </ol>
    </ol>
</ol>
```

![plural - counters()](/images/hb/format4.jpg)

---

### Source

-   https://www.w3.org/TR/css-lists-3/#declaring-a-list-item
