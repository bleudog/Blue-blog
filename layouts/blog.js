import PostList from "@components/PostList";
import { PostListContainer, Header } from "@components/custom-tw-components";
import utilStyles from '@styles/utils.module.scss';
import Link from "next/link";

const BlogLayout = ({ posts }) => {
    return (
        <div>
            <PostListContainer>
                <Header>rolemadelen</Header>
                <Link
                    key={'home'}
                    href={'/'}
                    passHref>
                    {'home'}
                </Link>
            </PostListContainer>

            <PostListContainer>
                <PostList posts={posts} />
            </PostListContainer>
        </div>
    );
};

export default BlogLayout;
