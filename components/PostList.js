import Link from 'next/link';
import { List, Title } from './custom-tw-components';

const PostList = ({ posts }) => {
  const m3 = new Date(); // new
  const m7 = new Date(); // updated
  m3.setDate(m3.getDate() - 3);
  m7.setDate(m7.getDate() - 5);

  const ymd3 =
    m3.getUTCFullYear() +
    '-' +
    (m3.getUTCMonth() + 1) +
    '-' +
    (m3.getUTCDate() <= '9' ? '0' : '') +
    m3.getUTCDate();
  const ymd7 =
    m7.getUTCFullYear() +
    '-' +
    (m7.getUTCMonth() + 1) +
    '-' +
    (m7.getUTCDate() <= '9' ? '0' : '') +
    m7.getUTCDate();

  return (
    <>
      {posts.map((post) => (
        <Link
          key={`${post.lang}-${post.slug}-$`}
          href={`/blog/${post.lang}/${post.slug}`}
          passHref>
          <List>
            <Title>
              {post.title}
              {post.date && post.date.split(' ')[0] >= ymd3 && (
                <span className='newPost'>NEW</span>
              )}
              {post.updated && post.updated.split(' ')[0] >= ymd7 && (
                <span className='updated'>updated</span>
              )}
            </Title>
          </List>
        </Link>
      ))}
    </>
  );
};

export default PostList;
