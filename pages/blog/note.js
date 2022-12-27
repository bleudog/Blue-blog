import { getAllPosts } from '@lib/blog';
import PostList from '@components/PostList';
import {
	PostListContainer,
	Header,
	HeaderContainer,
	MobileHeaderContainer,
} from '@components/custom-tw-components';
import utilStyles from '@styles/utils.module.scss';
import Link from 'next/link';

export default function Blog({ posts }) {
	return (
		<div>
			<PostListContainer>
				{/* <HeaderContainer>
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
						href={'/blog'}
						passHref>
						{'note'}
					</Link>
				</HeaderContainer> */}
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
						<div className={'currentPage'}>
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
				<PostList posts={posts} />
			</PostListContainer>
		</div>
	);
}

export async function getStaticProps() {
	const posts = getAllPosts().filter((post) => post.about === 'note');
	return {
		props: {
			posts,
		},
	};
}
