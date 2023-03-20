import React from 'react';
import PropTypes from 'prop-types';
import PostList from '@components/PostList';
import {
    PostListContainer,
    HeaderContainer,
} from '@components/custom-tw-components';
import utilStyles from '@styles/utils.module.scss';
import navlink from '@data/navlink';
import Footer from '@components/Footer';

const BlogLayout = ({ posts }) => {
    BlogLayout.propTypes = {
        posts: PropTypes.array.isRequired,
    };
    const {root, ko, en} = navlink;

    return (
        <div>
            <PostListContainer>
                <HeaderContainer>
                    <div className="flex-1">
                        <a role="button" className="btn btn-ghost normal-case text-xl" href={root.link}>{root.name}</a>
                    </div>
                    <div className="flex-none">
                        <a role="button" className="btn btn-sm btn-ghost normal-case" href={ko.link}>
                            {ko.name}
                        </a>
                        <a role="button" className="btn btn-sm normal-case" href={en.link}>
                            {en.name}
                        </a>
                    </div>
                </HeaderContainer>
            </PostListContainer>

            <PostListContainer>
                <span className={utilStyles.note}>
                    *Posts are ordered by relevance, not by time of writing.
                </span>
                <PostList posts={posts} />
                <Footer />
            </PostListContainer>

        </div>
    );
};

export default BlogLayout;
