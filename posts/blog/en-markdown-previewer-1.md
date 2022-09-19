---
title: '💻 Toy Project :: Markdown Previewer Pt.1'
date: '2022-09-13 22:00:00'
tags:
  - toy-project
lang: en
about: log
---

I got an idea from the [FreeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer). I'm going to build a markdown previewer 😃

Since I'm learning React, I'll be using React to build this project.

The layout is pretty simple.
![layout](/images/posts/markdown-previewer/mdpreview-layout.jpeg)

I'm going to need the following:

- a field where I can type markdown => `<textarea>`
- a screen to preview the rendered markdown contents.
- should be able to render general formattings like
  - _italic_
  - **bold**
  - ~~strike~~
  - headers (`#`)
  - [link](#)
  - lists
  - tables
- also support syntax highlighting for a `codeblock` => Prism?

---

Here's a basic structure I made based on that layout.

# Header

```jsx
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <nav>
          <h1>Markdown Previewer</h1>
        </nav>
      </React.StrictMode>
    );
  }
}
```

# Footer

```jsx
import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <footer>
          <p>by rolemadelen</p>
        </footer>
      </React.StrictMode>
    );
  }
}
```

# Main

```jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { marked } from 'marked';
import './MarkdownPreviewer.css';

export default class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);

    this.handleContent = this.handleContent.bind(this);
  }

  handleContent(event) {
    document.querySelector('#preview').innerHTML = marked.parse(
      event.target.value
    );
  }

  render() {
    return (
      <React.StrictMode>
        <div id="wrapper">
          <Header />
          <div id="editor-wrapper">
            <textarea id="editor" onChange={this.handleContent} />
          </div>
          <div id="preview-wrapper">
            <div id="preview"></div>
          </div>
          <Footer />
        </div>
      </React.StrictMode>
    );
  }
}
```

I'm calling `handleContent()` everytime I type something into the `textarea`. And inside `handleContent()`, it renders the markdown using `marked.parse` and prints it to the view using `innerHTML`.

Is it good idea to change the HTML directly? I'm not 100% sure. I saw `dangerouslySetInnerHTML` that you can use on an element in React, but basically it's doing the same thing where it changes the `innerHTML`. And as its name suggests, it doesn't sound safe.

I'll try to modify that if If I find something better or safer.

---

I tried to separate the `editor` and `preview` into components, but I don't know how I should deal the `onChange` as a prop. Assuming they're in separate components, I should be able catch the event listener happening in `editor`, do the parsing, and pass it down to `preview`. That flow right there, I'm not sure at the moment....🥲 I'll think about it.

---

Current progress:

![mdpreview1](/images/posts/markdown-previewer/mdpreview-1.jpg)

The font I'm using is [Nunito](https://fonts.google.com/specimen/Nunito).
