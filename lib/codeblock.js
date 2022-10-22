import { normalizeRepeatedSlashes } from 'next/dist/shared/lib/utils';
import React from 'react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

class Preview extends React.Component {
  render() {
    return (
      <ReactMarkdown
        children={this.props.markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={duotoneLight}
                language={match[1]}
                showLineNumbers={false}
                PreTag='div'
                {...props}></SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    );
  }
}

export default Preview;
