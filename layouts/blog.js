import Link from 'next/link';
import PostList from '@components/PostList';
import {
	PostListContainer,
	HeaderContainer,
} from '@components/custom-tw-components';
import utilStyles from '@styles/utils.module.scss';
import navlink from '@data/navlink';

const BlogLayout = ({ posts }) => {
	const {root, blog} = navlink;

    return (
		<div>
			<PostListContainer>
				<HeaderContainer>
					<div>
						<Link
							key={root.name}
							href={root.link}
							passHref>
							{root.name}
						</Link>
					</div>
					<div>
						<div className={'currentPage'}>
							<Link
								key={blog.name}
								href={blog.link}
								passHref>
								{blog.name}
							</Link>
						</div>
					</div>
				</HeaderContainer>
			</PostListContainer>

			<PostListContainer>
				<span className={utilStyles.note}>
					*글은 관련성에 따라 의도한 순서로 나열되어 있습니다. 작성 시간순이 아님을 유념해주세요.
					</span>
				<PostList posts={posts} />
			</PostListContainer>
		</div>
	);
};

export default BlogLayout;
