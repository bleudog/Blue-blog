---
title: '💻 Toy Project: Markdown Previewer pt.2'
posttitle: 'Markdown Previewer'
postsubtitle: '💻 Reflection Part 02'
date: '2022-09-14 22:00:00'
tags:
  - toy-project
lang: en
about: log
---

![sample](/images/posts/markdown-previewer/mdpreview-2.gif)

I added default contents in the markdown editor to be shown when we first launch the app.

I read a document that `componentWillMount()` is deprecated, so I set it in `componentDidMount()`.

````js
componentDidMount() {
  let content =
    '# Hello \n\n [rolemadelen blog](https://rolemadelen.com) \n\n `code` \n\n ```cpp\ncodeblock\n``` \n\n - list1 \n - list2 \n\n > quote \n\n **bold text**';

  document.querySelector('#editor').innerHTML = content;
  document.querySelector('#preview').innerHTML = DOMPurify.sanitize(
    marked.parse(content)
  );
}
````

This was my first approach, but later I realized that I can just use a backtick for multi-line strings.

```jsx
componentDidMount() {
    let content = `
# Hello

[rolemadelen blog](https://rolemadelen.com)

\`code\`

\`\`\`cpp
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
\`\`\`

- list1
- list2

**bold text**

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

  document.querySelector('#editor').innerHTML = content;
  document.querySelector('#preview').innerHTML = DOMPurify.sanitize(
    marked.parse(content)
  );
}
```

---

![sample](/images/posts/markdown-previewer/mdpreview-top.jpg)

I wanted to give the safari browser like look on the editor and the preview screen.

I created an extra component called `PageTopbar` which looks like this:

```jsx
import React from 'react';

export default class PageTopbar extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <div className="editor-top">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>
        <span>{this.props.title}</span>
      </React.StrictMode>
    );
  }
}
```

CSS for `PageTopbar`;

```css
.editor-top {
  width: 100%;
  height: 30px;
  background-color: #d4d4d4;
  position: relative;
}

.editor-top span::before {
  content: '';
  display: block;
  position: absolute;
  cursor: pointer;
  top: 30%;
  left: 10px;

  width: 11px;
  height: 11px;
  border-radius: 50%;
  box-shadow: 0 0 2px 1px #777;
}

span.red::before {
  background-color: #ff605c;
}

span.yellow::before {
  background-color: #ffbd44;
  left: 30px;
}

span.green::before {
  background-color: #00ca4e;
  left: 50px;
}
```

---

Syntax highlighting!! 🤯 I can't get it to work..

I thought this code below would do the magic but it didn't.

```jsx
import Prism from 'prismjs';

marked.setOptions({
  breaks: true,
  highlight: function () {
    return Prism.highlightAll();
  },
});
```

Am I supposed to add something more..? 🤔

---

- [💻 Toy Project :: Markdown Previewer Pt.1](./markdown-previewer-1)
- [💻 Toy Project :: Markdown Previewer Pt.3](./markdown-previewer-3)
- [💻 Toy Project :: Markdown Previewer Pt.4](./markdown-previewer-4)
