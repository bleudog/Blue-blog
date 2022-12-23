import Post from '@components/Post';
import Footer from '@components/Footer';
import Comments from '@components/Comments';
import Container from '@components/Container';
import Preview from '@lib/codeblock.js';
import {
	Article,
	PostListContainer,
	Header,
} from '@components/custom-tw-components';
import utilStyles from '@styles/utils.module.scss';
import Link from 'next/link';

const BlogPostLayout = ({ post }) => {
	return (
		<PostListContainer>
			<Post
				post={post}
				title={post.posttitle}
				subtitle={post.postsubtitle}
				tags={post.tags}
				date={post.date}
				updated={post.updated ? post.updated : null}
			/>
			<Article>
				<Preview markdown={post.markdown} />
			</Article>
			{/* <Comments /> */}
			<Footer />
		</PostListContainer>
	);
};

export default BlogPostLayout;
