import Container from '@components/Container'
import PostList from '@components/PostList'
import Footer from '@components/Footer'
import { getAllPosts } from '@lib/blog'
import metadata from '@data/metadata'
import { PostListContainer } from '@components/custom-tw-components'
import PageBanner from '@components/PageBanner'
import LanguageSelector from '@components/LanguageSelector'

export default function Blog({ posts }) {
    const customMeta = {
        title: `${metadata.title} - 블로그`
    }
    return (
        <Container page={"blog"} customMeta={customMeta}>
            <PageBanner title={"미도로그"} subtitle={'"수많은 소원 아래 매일 다른 꿈을 꾸던 아이는 그렇게 오랜 시간 겨우 내가 되려고 아팠던 걸까"'}/>
            <LanguageSelector />
            <PostListContainer>
                <PostList posts={posts}/>
            </PostListContainer>
            <Footer />
        </Container>
    )
}

export async function getStaticProps() {
    const posts = getAllPosts().filter(post => post.lang === "ko")
    return {
        props: {
            posts
        }
    }
}