import React from 'react';
import PropTypes from 'prop-types';
import { getAllPostIds, getPostData } from '@lib/blog';
import BlogPostLayout from '@layouts/blogpost';

Post.propTypes = {
    post: PropTypes.object.isRequired,
};

export default function Post({ post }) {
    return <BlogPostLayout post={post} />;
}

export async function getStaticPaths() {
    const paths = getAllPostIds('ko');
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = await getPostData(params.id, 'ko');
    return {
        props: {
            post,
        },
    };
}
