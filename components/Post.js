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
	Hero,
} from './custom-tw-components';
import { useRouter } from 'next/router';
import utilStyles from '@styles/utils.module.scss';
import Head from 'next/head';
import Image from 'next/image';

const Post = ({ post, tags, title, subtitle, date, updated, children }) => {
	const router = useRouter();

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
			<BackButton onClick={() => router.back()}>{'←'}</BackButton>
			{children}
		</PostContainer>
	);
};

export default Post;
