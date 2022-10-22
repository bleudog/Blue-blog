import Date from '@components/Date';
import Link from 'next/link';
import {
  PostContainer,
  PageTitle,
  PageSecondTitle,
  BackButton,
  Tag,
} from './custom-tw-components';
import { LanguageList, LanguageListWrapper } from './custom-tw-components';
import { useRouter } from 'next/router';
import utilStyles from '@styles/utils.module.scss';
import Head from 'next/head';

const Post = ({ post, tags, title, subtitle, date, updated, children }) => {
  const router = useRouter();
  return (
    <PostContainer className={utilStyles.loadDown}>
      <Head>
        <title>{title}</title>
      </Head>
      <PageTitle>{title}</PageTitle>
      <PageSecondTitle>{subtitle}</PageSecondTitle>
      {updated === null && (
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
      )}
      {tags && (
        <div className={'text-center'}>
          {tags.map((tag, idx) => (
            <Tag key={`${tag}-${idx}`}>#{tag}</Tag>
          ))}
        </div>
      )}
      {post && (
        <LanguageListWrapper>
          {post.availableLanguage.map((post) => (
            <LanguageList
              className='languageSelector'
              key={`${post.lang}-${post.slug}`}>
              <Link href={`/blog/${post.lang}/${post.slug}`}>
                <a>{post.langName}</a>
              </Link>
            </LanguageList>
          ))}
        </LanguageListWrapper>
      )}
      <hr />
      <BackButton onClick={() => router.back()}>
        {post.lang === 'ja' ? '← 戻る' : '← back'}
      </BackButton>
      {children}
    </PostContainer>
  );
};

export default Post;
