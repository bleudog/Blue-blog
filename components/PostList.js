import Link from 'next/link';
import { List, Title, PostDate } from './custom-tw-components';

const PostList = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <Link
                    key={`${post.lang}-${post.slug}-$`}
                    href={`/blog/${post.lang}/${post.slug}`}
                    passHref>
                    <List>
                        <PostDate>
                            {post.date.split(' ')[0]}
                        </PostDate>
                        <Title>
                            {post.title}
                        </Title>
                    </List>
                </Link>
            ))}
        </>
    );
};

export default PostList;
