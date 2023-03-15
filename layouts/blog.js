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
    const {root, blog} = navlink;

    return (
        <div>
            <PostListContainer>
                <HeaderContainer>
                    <div className="flex-1">
                        <a role="button" className="btn btn-ghost normal-case text-xl" href={root.link}>{root.name}</a>
                    </div>
                    <div className="flex-none">
                        <a role="button" className="btn btn-sm normal-case" href={blog.link}>
                            {blog.name}
                        </a>
                    </div>
                </HeaderContainer>
            </PostListContainer>

            <PostListContainer>
                <span className={utilStyles.note}>
					*글은 관련성에 따라 의도한 순서로 나열되어 있습니다. 작성 시간순이 아님을 유념해주세요.
                </span>
                <PostList posts={posts} />
                <Footer />
            </PostListContainer>

        </div>
    );
};

export default BlogLayout;
