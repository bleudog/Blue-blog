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
import { LanguageList, LanguageListWrapper } from './custom-tw-components';
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
				<span>–––––––––––––––––––––––––– </span>
				<span>{title}</span>
			</HeaderContainer>
			<PageSecondTitle>{subtitle}</PageSecondTitle>

			{/* {updated === null && (
				<Date
					dateString={date}
					customClass={'mt-2 mb-2 text-sm break-normal inline-block'}
				/>
			)}
			{updated !== null && (
				<Date
					updated={true}
					dateString={updated}
					customClass={'mt-2 mb-2 text-sm break-normal inline-block'}
				/>
			)} */}
			{/* {tags && (
				<div>
					{tags.map((tag, idx) => (
						<Tag key={`${tag}-${idx}`}>#{tag}</Tag>
					))}
				</div>
			)} */}

			<BackButton onClick={() => router.back()}>{'back'}</BackButton>
			{children}
		</PostContainer>
	);
};

export default Post;
