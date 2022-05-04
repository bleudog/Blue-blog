import Date from "@components/Date";
import Link from 'next/link'
import { PostContainer, PageTitle } from "./custom-tw-components";
import { LanguageList, LanguageListWrapper } from "./custom-tw-components";

const Post = ({ post, tags, title, date, children }) => {
    return (
        <PostContainer>
            <Date dateString={date} customClass={"text-sm break-normal inline-block"} />
            <PageTitle>{title}</PageTitle>
            {post && (
                <LanguageListWrapper>
                    {post.availableLanguage.map((post) => (
                        <LanguageList className="languageSelector" key={post.slug}>
                            <Link href={`/blog/${post.lang}/${post.slug}`}>
                                <a>
                                    {post.langName}
                                </a>
                            </Link>
                        </LanguageList>
                    ))}
                </LanguageListWrapper>
            )}
            <hr />
            {children}
        </PostContainer>
    )
}

export default Post;