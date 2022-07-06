import Date from "@components/Date";
import Link from "next/link";
import { PostContainer, PageTitle, BackButton, Tag } from "./custom-tw-components";
import { LanguageList, LanguageListWrapper } from "./custom-tw-components";
import { useRouter } from "next/router";
import utilStyles from "@styles/utils.module.scss";

const Post = ({ post, tags, title, date, children }) => {
  const router = useRouter();
  return (
    <PostContainer className={utilStyles.loadDown}>
      <Date
        dateString={date}
        customClass={"text-sm break-normal inline-block"}
      />
      <PageTitle>{title}</PageTitle>
      {tags && (
        <div>
          {tags.map(a => (
            <Tag>#{a}</Tag>
          ))}
        </div>
      )}
      {post && (
        <LanguageListWrapper>
          {post.availableLanguage.map((post) => (
            <LanguageList className="languageSelector" key={post.slug}>
              <Link href={`/blog/${post.lang}/${post.slug}`}>
                <a>{post.langName}</a>
              </Link>
            </LanguageList>
          ))}
        </LanguageListWrapper>
      )}
      <hr />
      <BackButton onClick={() => router.back()}>{'< back'}</BackButton>
      {children}
    </PostContainer>
  );
};

export default Post;
