import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { List, Title, RefUID } from './custom-tw-components';


const PostList = ({ posts }) => {
    PostList.propTypes = {
        posts: PropTypes.array
    };
    return (
        <div className='px-4'>
            {posts.map((post) => (
                <Link
                    key={`${post.slug}-$`}
                    href={`/blog/${post.slug}`}
                    passHref>
                    <List>
                        <RefUID>{post.uid}</RefUID>
                        <Title>{post.title}</Title>
                    </List>
                </Link>
            ))}
        </div>
    );
};

export default PostList;
