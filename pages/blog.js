import { getAllPosts } from '@lib/blog';
import BlogLayout from '@layouts/blog';

export default function Blog({ posts }) {
	return <BlogLayout posts={posts} />;
}

export async function getStaticProps() {
	// const posts = getAllPosts();
	const posts = getAllPosts().filter((post) => post.about === 'dev');
	return {
		props: {
			posts,
		},
	};
}
