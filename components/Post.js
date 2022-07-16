import Date from "@components/Date";
import Link from "next/link";
import { PostContainer, PageTitle, BackButton, Tag } from "./custom-tw-components";
import { LanguageList, LanguageListWrapper } from "./custom-tw-components";
import { useRouter } from "next/router";
import utilStyles from "@styles/utils.module.scss";
import Head from "next/head";

const Post = ({ post, tags, title, date, children }) => {
  const router = useRouter();
  return (
    <PostContainer className={utilStyles.loadDown}>
      <Head>
        <title>Blue Log: {title}</title>
      </Head>
      <Date
        dateString={date}
        customClass={"text-sm break-normal inline-block"}
      />
      <PageTitle>{title}</PageTitle>
      {tags && (
        <div>
          {tags.map((tag, idx) => (
            <Tag key={`${tag}-${idx}`}>#{tag}</Tag>
          ))}
        </div>
      )}
      {post && (
        <LanguageListWrapper>
          {post.availableLanguage.map((post) => (
            <LanguageList className="languageSelector" key={`${post.lang}-${post.slug}`}>
              <Link href={`/blog/${post.lang}/${post.slug}`}>
                <a>{post.langName}</a>
              </Link>
            </LanguageList>
          ))}
        </LanguageListWrapper>
      )}
      <hr />
      <BackButton onClick={() => router.back()}>
        {(post.lang === 'ja') ? '← 戻る' : '← back'}
        </BackButton>
      {children}
    </PostContainer>
  );
};

export default Post;
