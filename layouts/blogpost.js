import ReactMarkdown from "react-markdown";
import Post from "@components/Post";
import Footer from "@components/Footer";
import Comments from "@components/Comments";
import Container from "@components/Container";
import Codeblock from "@lib/codeblock.js";
import { Article, BackButton } from "@components/custom-tw-components";
import { useRouter } from "next/router";
import utilStyles from "@styles/utils.module.scss";

const BlogPostLayout = ({ post }) => {
  const router = useRouter();

  return (
    <Container page={"blog"}>
      <Post post={post} title={post.title} tags={post.tags} date={post.date} />
      <Article className={utilStyles.loadUp}>
        <BackButton onClick={() => router.back()}>Back</BackButton>
        <ReactMarkdown components={Codeblock}>{post.markdown}</ReactMarkdown>
      </Article>
      <Comments />
      <Footer />
    </Container>
  );
};

export default BlogPostLayout;
