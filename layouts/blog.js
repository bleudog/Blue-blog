import PostList from '@components/PostList';
import utilStyles from '@styles/utils.module.scss';
import {
	PostListContainer,
	HeaderContainer,
} from '@components/custom-tw-components';
import Link from 'next/link';

const BlogLayout = ({ posts }) => {
    return (
		<div>
			<PostListContainer>
				<HeaderContainer>
					<div>
						<Link
							key={'home'}
							href={'/'}
							passHref>
							{'role:madelen'}
						</Link>
					</div>
					<div>
						<div className={'currentPage'}>
							<Link
								key={'blog'}
								href={'/blog'}
								passHref>
								{'pensieve'}
							</Link>
						</div>
					</div>
				</HeaderContainer>
			</PostListContainer>

			<PostListContainer>
				<span className={utilStyles.note}>
					*글은 작성 시간이 아닌 관련도에 따라 묶여 있으며 의도한 순서로 표시됩니다. 
					</span>
				<PostList posts={posts} />
			</PostListContainer>
		</div>
	);
};

export default BlogLayout;
