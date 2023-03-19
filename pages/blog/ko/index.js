import React from 'react';
import PropTypes from 'prop-types';
import { getAllPosts } from '@lib/blog';
import BlogLayout from '@layouts/blog';

Blog.propTypes = {
    posts: PropTypes.array.isRequired,
};

export default function Blog({ posts }) {
    return <BlogLayout posts={posts} />;
}

export async function getStaticProps() {
    const posts = getAllPosts('ko');
    return {
        props: {
            posts,
        },
    };
}
