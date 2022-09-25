---
title: '💻 Toy Project: Markdown Previewer pt.4'
posttitle: 'Markdown Previewer'
postsubtitle: '💻 Reflection Part 04'
date: '2022-09-19 15:00:00'
tags:
  - toy-project
lang: en
about: log
---

My main `render()` function was too long and complex, so I separated the `editor` and `preview` into a component.

This is what it looked like before I separated `editor` and `preview`:

```jsx
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
```

and now this 😃

```jsx
  render() {
    return (
      <React.StrictMode>
        <div id="wrapper">
          <Header />
          <Editor handleOnChange={this.handleContent} />
          <Preview markdown={this.state.markdown} />
          <Footer />
        </div>
      </React.StrictMode>
    );
  }
```

I wasn't sure how to pass the event listener for `onChange` in editor back to the parent, but it seems like I didn't even had to worry about that in the first place.

---

- [💻 Toy Project :: Markdown Previewer Pt.1](./markdown-previewer-1)
- [💻 Toy Project :: Markdown Previewer Pt.2](./markdown-previewer-2)
- [💻 Toy Project :: Markdown Previewer Pt.3](./markdown-previewer-3)
