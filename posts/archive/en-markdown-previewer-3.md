---
title: '💻 Toy Project: Markdown Previewer pt.3'
posttitle: 'Markdown Previewer'
postsubtitle: '💻 Reflection Part 03'
date: '2022-09-18 22:00:00'
tags:
  - toy-project
lang: en
about: log
---

Try it yourself [here](rolemadelen-mdpreview.vercel.app).

![sample](/images/posts/markdown-previewer/mdpreview-final.gif)

I changed my code a bit since last time.

First, I removed `marked` and decided to use [`react-markdown`](https://github.com/remarkjs/react-markdown) instead.

With a `react-markdown`, I can just use `ReactMarkdown` as a tag and pass the markdown as a props:

```jsx
<ReactMarkdown children={markdown} />
```

Since I'm passing the contents as a prop rather than directly shoving it into the `innerHTML`, I need that to be in the `state`.

```jsx
constructor(props) {
  super(props);

  this.state = {
    markdown: '',
  };

  componentDidMount() {
    let content = `...`;

    document.querySelector('#editor').innerHTML = content;
    this.setState({
      markdown: content,
    });
  }

  handleContent(event) {
    this.setState({
      markdown: event.target.value,
    });
  }
}
```

---

I added `react-syntax-highlighter` for syntax highlighting.

```jsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default class MarkdownPreview extends React.Component {
  // ...

  render() {
    return (
      <React.StrictMode>
        <div id="wrapper">
          <Header />
          <div id="editor-wrapper">
            <PageTopbar title={'editor'} />
            <textarea
              name="editor"
              id="editor"
              onChange={this.handleContent}
            />
          </div>
          <div id="preview-wrapper">
            <PageTopbar title={'preview'} />
            <ReactMarkdown
              children={this.state.markdown}
              remarkPlugins={[remarkGfm]}
              components={{
                code({
                  node,
                  inline,
                  className,
                  children,
                  ...props
                }) {
                  const match = /language-(\w+)/.exec(
                    className || ''
                  );
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={dracula}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </div>
          <Footer />
        </div>
      </React.StrictMode>
    );
  }
}
```

I lost the link to the original source where there was a sample of using `ReactMarkdown` with a `syntax highlighting`.

---

[Project Repository](https://github.com/rolemadelen/markdown-previewer)

---

- [💻 Toy Project :: Markdown Previewer Pt.1](./markdown-previewer-1)
- [💻 Toy Project :: Markdown Previewer Pt.2](./markdown-previewer-2)
- [💻 Toy Project :: Markdown Previewer Pt.4](./markdown-previewer-4)
