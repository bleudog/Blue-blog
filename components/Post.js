import Date from '@components/Date';
import {
	PostContainer,
	PageSecondTitle,
	BackButton,
	HeaderContainer,
} from './custom-tw-components';
import { useRouter } from 'next/router';
import Head from 'next/head';
import metadata from '@data/metadata';

const Post = ({ post, children }) => {
	const router = useRouter();
	router.basePath = '/blog';

	return (
		<PostContainer>
			<Head>
				<title>{post.title}</title>
			</Head>
			<HeaderContainer>{post.posttitle}</HeaderContainer>
			<div className={'flex px-4'}>
				<PageSecondTitle>{`by ${metadata.author.id}`}</PageSecondTitle>
				<Date
					updated={post.updated}
					dateString={post.updated ? post.updated : post.date}
					customClass={'mt-2 mb-2 text-md break-normal inline-block text-right'}
				/>
			</div>
			<BackButton onClick={() => router.push('/blog')}>{'←'}</BackButton>
			{children}
		</PostContainer>
	);
};

export default Post;
