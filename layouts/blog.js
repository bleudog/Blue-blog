import PostList from '@components/PostList';
import Footer from '@components/Footer';
import {
	PostListContainer,
	Header,
	CategoryList,
	Category,
	BlogHeaderContainer,
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
								key={'log'}
								href={'/blog/log'}
								passHref>
								{'log'}
							</Link>
						</div>
					</div>
				</HeaderContainer>
			</PostListContainer>

			<PostListContainer>
				<PostList posts={posts} />
				<Footer />
			</PostListContainer>
		</div>
	);
};

export default BlogLayout;
