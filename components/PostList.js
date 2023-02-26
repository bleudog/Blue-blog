import Link from 'next/link';
import { List, Title, PostDate, RefUID } from './custom-tw-components';

const PostList = ({ posts }) => {
	return (
		<div className='px-4'>
			{posts.map((post) => (
				<Link
					key={`${post.slug}-$`}
					href={`/blog/${post.slug}`}
					passHref>
					<List>
						<RefUID>{post.uid}</RefUID>
						<Title>{post.title}</Title>
					</List>
				</Link>
			))}
		</div>
	);
};

export default PostList;
