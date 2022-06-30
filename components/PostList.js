import Date from "@components/Date";
import Link from "next/link";
import { List, Title } from "./custom-tw-components";

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
          <Link href={`/blog/${post.lang}/${post.slug}`} passHref>
        <List key={`${post.lang}-${post.slug}`}>
            <Title>
            <Date
            dateString={post.date}
          />&nbsp;&nbsp;
            {post.title}
            </Title>
        </List>
          </Link>
      ))}
    </>
  );
};

export default PostList;
