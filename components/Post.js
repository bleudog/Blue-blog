import Date from '@components/Date';
import Link from 'next/link';
import {
	PostContainer,
	PageTitle,
	PageSecondTitle,
	BackButton,
	Tag,
	HeaderContainer,
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
				<span>–––––––––––</span>
				<span className={'top'}>•</span>

				<span> {title}</span>
			</HeaderContainer>
			<div className={'flex'}>
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
