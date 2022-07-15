import Container from "@components/Container";
import PostList from "@components/PostList";
import Footer from "@components/Footer";
import { getAllPosts } from "@lib/blog";
import metadata from "@data/metadata";
import { PostListContainer } from "@components/custom-tw-components";
import PageBanner from "@components/PageBanner";
import LanguageSelector from "@components/LanguageSelector";

export default function Blog({ posts }) {
  const customMeta = {
    title: `${metadata.title} - Data Structures`,
  };
  return (
    <Container page={"blog"} customMeta={customMeta}>
      <PageBanner
        title={"Data Structures"}
        subtitle={"Notes about data structure concepts and implementations."}
      />
      <LanguageSelector />
      <PostListContainer>
        <PostList posts={posts} />
      </PostListContainer>
      <Footer />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts().filter((post) => post.about === "ds");
  return {
    props: {
      posts,
    },
  };
}
