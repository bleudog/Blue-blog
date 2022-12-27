import Link from 'next/link';
import { List, Title, PostDate } from './custom-tw-components';

const PostList = ({ posts }) => {
	return (
		<div className='px-4'>
			{posts.map((post) => (
				<Link
					key={`${post.lang}-${post.slug}-$`}
					href={`/blog/${post.lang}/${post.slug}`}
					passHref>
					<List>
						<PostDate>{post.date && post.date.split(' ')[0]}</PostDate>
						<Title>{post.title}</Title>
					</List>
				</Link>
			))}
		</div>
	);
};

export default PostList;
