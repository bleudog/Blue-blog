import ReactMarkdown from 'react-markdown';
import Post from '@components/Post';
import Footer from '@components/Footer';
import Comments from '@components/Comments';
import Container from '@components/Container';
import Codeblock from '@lib/codeblock.js';
import { Article } from '@components/custom-tw-components';
import utilStyles from '@styles/utils.module.scss';

const BlogPostLayout = ({ post }) => {
  return (
    <Container page={'blog'}>
      <Post
        post={post}
        title={post.posttitle}
        subtitle={post.postsubtitle}
        tags={post.tags}
        date={post.date}
        updated={post.updated ? post.updated : null}
      />
      <Article className={utilStyles.loadUp}>
        <ReactMarkdown components={Codeblock}>{post.markdown}</ReactMarkdown>
      </Article>
      <Comments />
      <Footer />
    </Container>
  );
};

export default BlogPostLayout;
