import Date from '@components/Date';
import {
	PostContainer,
	PageTitle,
	PageSecondTitle,
	BackButton,
	Tag,
	HeaderContainer,
	MobileHeaderContainer,
	Hero,
} from './custom-tw-components';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Post = ({ post, tags, title, subtitle, date, updated, children }) => {
	const router = useRouter();
	router.basePath = '/blog';

	return (
		<PostContainer>
			<Head>
				<title>{title}</title>
			</Head>
			<HeaderContainer>{title}</HeaderContainer>
			<div className={'flex px-4'}>
				<PageSecondTitle>{'by rolemadelen'}</PageSecondTitle>
				<Date
					updated={updated}
					dateString={updated ? updated : date}
					customClass={'mt-2 mb-2 text-md break-normal inline-block text-right'}
				/>
			</div>
			{/* <BackButton onClick={() => router.back()}>{'←'}</BackButton> */}
			<BackButton onClick={() => router.push('/blog')}>{'←'}</BackButton>
			{children}
		</PostContainer>
	);
};

export default Post;
