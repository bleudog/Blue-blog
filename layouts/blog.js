import PostList from '@components/PostList';
import {
	PostListContainer,
	Header,
	CategoryList,
	Category,
	BlogHeaderContainer,
	HeaderContainer,
	MobileHeaderContainer,
} from '@components/custom-tw-components';
import utilStyles from '@styles/utils.module.scss';
import Link from 'next/link';

const BlogLayout = ({ posts }) => {
	return (
		<div>
			<PostListContainer>
				<HeaderContainer>
					<span>–––––––––––</span>
					<Link
						key={'post'}
						href={'/blog'}
						passHref>
						{'•'}
					</Link>
					<span>–</span>
					<Link
						key={'post'}
						href={'/blog/note'}
						passHref>
						{'•'}
					</Link>
					<span>–––––––––––– </span>
					<Link
						key={'home'}
						href={'/'}
						passHref>
						{'rolemadelen'}
					</Link>
				</HeaderContainer>
				<MobileHeaderContainer>
					<div>
						<Link
							key={'home'}
							href={'/'}
							passHref>
							{'rolemadelen'}
						</Link>
					</div>
					<div>
						<div>
							<Link
								key={'blog'}
								href={'/blog'}
								passHref>
								{'blog'}
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
				</MobileHeaderContainer>
			</PostListContainer>

			<PostListContainer>
				{console.dir(posts)}
				<PostList posts={posts} />
			</PostListContainer>
		</div>
	);
};

export default BlogLayout;
