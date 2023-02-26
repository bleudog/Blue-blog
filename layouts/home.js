import Image from 'next/image';
import utilStyles from '@styles/utils.module.scss';
import { BaseContainer } from '@components/custom-tw-components';
import profileImg1 from '../public/images/bprsstnt1.png';
import profileImg2 from '../public/images/bprsstnt2.png';
import profileImg3 from '../public/images/bprsstnt3.png';
import Link from 'next/link';
import navlink from '@data/navlink';

const HomeLayout = () => {
	const {blog, about} = navlink;
	const images = [profileImg1, profileImg2, profileImg3];
	const imageIndex = Math.floor((Math.random() * 10) % 3);

	const getProfileImage = (width, height) => {
		return (
			<Image
			priority
			width={width}
			height={height}
			src={images[imageIndex]}
			alt={`image${imageIndex}`}
			/>
		)
	}

	return (
		<BaseContainer>
			<div className={utilStyles.figure}>
				{getProfileImage(650, 650)}
			</div>
			<p className={utilStyles.homeTitle}>
				<Link key={blog.name} href={blog.link} passHref>
					bprssnt
				</Link>
			</p>
			<div className={`${utilStyles.menu}`}>
				<span>
					<Link key={about.name} href={about.link} passHref>
						{about.name}
					</Link>
				</span>
				<span>
					<Link key={blog.name} href={blog.link} passHref>
						{blog.name}
					</Link>
				</span>
			</div>
		</BaseContainer>
	);
};

export default HomeLayout;
