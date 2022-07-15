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
    title: `${metadata.title} - Ruby`,
  };
  return (
    <Container page={"blog"} customMeta={customMeta}>
      <PageBanner
        title={"Ruby"}
        subtitle={"Anything related to the Ruby language!"}
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
  const posts = getAllPosts().filter((post) => post.about === "ruby");
  return {
    props: {
      posts,
    },
  };
}
