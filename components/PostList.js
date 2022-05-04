import Date from "@components/Date";
import Link from "next/link";
import { List, Title, Subtitle } from "./custom-tw-components";

const PostList = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <List key={`${post.lang}-${post.slug}`}>
                    <Date dateString={post.date} customClass={"text-sm break-normal inline-block"} />
                    <Link href={`/blog/${post.lang}/${post.slug}`} passHref>
                        <Title>
                            &nbsp; &nbsp;
                            {post.lang == "ko" && (
                                <span>🇰🇷</span>
                            )}
                            {post.lang == "ja" && (
                                <span>🇯🇵</span>
                            )}
                            {post.lang == "en" && (
                                <span>🇺🇸</span>
                            )}
                            &nbsp; &nbsp;
                            {post.title}
                        </Title>
                    </Link>
                    {/* <Subtitle>
                        {post.subtitle} &nbsp;
                    </Subtitle> */}
                </List>
            ))}
        </>
    )
}

export default PostList;