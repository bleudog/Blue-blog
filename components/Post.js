import Date from '@components/Date';
import Link from 'next/link';
import {
	PostContainer,
	PageTitle,
	PageSecondTitle,
	BackButton,
	Tag,
	HeaderContainer,
	MobileHeaderContainer,
} from './custom-tw-components';
import { useRouter } from 'next/router';
import utilStyles from '@styles/utils.module.scss';
import Head from 'next/head';

const Post = ({ post, tags, title, subtitle, date, updated, children }) => {
	const router = useRouter();

	return (
		<PostContainer>
			<Head>
				<title>{title}</title>
			</Head>
			<HeaderContainer>{title}</HeaderContainer>
			<div className={'flex px-4'}>
				<PageSecondTitle>{subtitle}</PageSecondTitle>
				<Date
					dateString={date}
					customClass={'mt-2 mb-2 text-sm break-normal inline-block text-right'}
				/>
			</div>
			<BackButton onClick={() => router.back()}>{'←'}</BackButton>
			{children}
		</PostContainer>
	);
};

export default Post;
