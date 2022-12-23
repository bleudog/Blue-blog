import { getAllPosts } from '@lib/blog';
import PostList from '@components/PostList';
import {
	PostListContainer,
	Header,
	HeaderContainer,
} from '@components/custom-tw-components';
import utilStyles from '@styles/utils.module.scss';
import Link from 'next/link';

export default function Blog({ posts }) {
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
						href={'/blog'}
						passHref>
						{'note'}
					</Link>
				</HeaderContainer>
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
