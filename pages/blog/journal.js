import { getAllPosts } from '@lib/blog';
import PostList from '@components/PostList';
import {
	PostListContainer,
	HeaderContainer,
} from '@components/custom-tw-components';
import utilStyles from '@styles/utils.module.scss';
import Link from 'next/link';

export default function Blog({ posts }) {
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
						<div>
							<Link
								key={'blog'}
								href={'/blog'}
								passHref>
								{'dev'}
							</Link>
						</div>
						<div className={'currentPage'}>
							<Link
								key={'journal'}
								href={'/blog/journal'}
								passHref>
								{'journal'}
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
}

export async function getStaticProps() {
	const posts = getAllPosts().filter((post) => post.about === 'journal');
	return {
		props: {
			posts,
		},
	};
}
