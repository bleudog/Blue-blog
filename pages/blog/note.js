import { getAllPosts } from '@lib/blog';
import PostList from '@components/PostList';
import { PostListContainer, Header } from '@components/custom-tw-components';
import utilStyles from '@styles/utils.module.scss';
import Link from 'next/link';

export default function Blog({ posts }) {
	return (
		<div>
			<PostListContainer>
				<Header>
					<span>–––––––––––––––––––––––––– </span>
					<Link
						key={'home'}
						href={'/blog'}
						passHref>
						{'rm/note'}
					</Link>
				</Header>
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
