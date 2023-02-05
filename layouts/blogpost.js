import Post from '@components/Post';
import Footer from '@components/Footer';
import Comments from '@components/Comments';
import Preview from '@lib/codeblock.js';
import {
	Article,
	PostListContainer,
} from '@components/custom-tw-components';

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
			<Comments />
			<Footer />
		</PostListContainer>
	);
};

export default BlogPostLayout;
