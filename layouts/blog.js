import PostList from '@components/PostList';
import {
	PostListContainer,
	HeaderContainer,
} from '@components/custom-tw-components';
import utilStyles from '@styles/utils.module.scss';
import Link from 'next/link';

const BlogLayout = ({ posts }) => {
	return (
		<div>
			<PostListContainer>
				<HeaderContainer>
					<div>
						<Link
							key={'home'}
							href={'/'}
							passHref>
							{'rolemadelen'}
						</Link>
					</div>
					<div>
						<div className={'currentPage'}>
							<Link
								key={'blog'}
								href={'/blog'}
								passHref>
								{'dev'}
							</Link>
						</div>
						<div>
							<Link
								key={'note'}
								href={'/blog/note'}
								passHref>
								{'note'}
							</Link>
						</div>
					</div>
				</HeaderContainer>
			</PostListContainer>

			<PostListContainer>
				<PostList posts={posts} />
			</PostListContainer>
		</div>
	);
};

export default BlogLayout;
