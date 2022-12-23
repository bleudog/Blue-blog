import PostList from '@components/PostList';
import {
	PostListContainer,
	Header,
	CategoryList,
	Category,
	BlogHeaderContainer,
} from '@components/custom-tw-components';
import utilStyles from '@styles/utils.module.scss';
import Link from 'next/link';

const BlogLayout = ({ posts }) => {
	return (
		<div>
			<PostListContainer>
				<Header>
					<span>––––––––––––––––––––––––––</span>
					<Link
						key={'home'}
						href={'/'}
						passHref>
						{'rolemadelen'}
					</Link>
				</Header>
			</PostListContainer>

			<PostListContainer>
				<PostList posts={posts} />
			</PostListContainer>
		</div>
	);
};

export default BlogLayout;
