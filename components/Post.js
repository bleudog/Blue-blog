import React from 'react';
import PropTypes from 'prop-types';
import Date from '@components/Date';
import {
    PostContainer,
    BackButton,
    HeaderContainer,
} from './custom-tw-components';
import { useRouter } from 'next/router';
import Head from 'next/head';
import metadata from '@data/metadata';


const Post = ({ post, children }) => {
    Post.propTypes = {
        post: PropTypes.object.isRequired,
        children: PropTypes.node.isRequired,
    };
    const router = useRouter();
    router.basePath = '/blog';

    return (
        <PostContainer>
            <Head>
                <title>{post.title}</title>
            </Head>
            <HeaderContainer>{post.posttitle}</HeaderContainer>
            <div className={'flex'}>
                <div className={'font-["AmazonEmberDisplay"] text-lg my-1 w-full text-primary'}>{`by ${metadata.author.id}`}</div>
                <Date
                    updated={post.updated}
                    dateString={post.updated ? post.updated : post.date}
                    customClass={'mt-2 mb-2 text-md break-normal inline-block text-right'}
                />
            </div>
            <BackButton onClick={() => router.push('/blog')}>{'←'}</BackButton>
            {children}
        </PostContainer>
    );
};

export default Post;
