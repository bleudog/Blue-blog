import Image from 'next/image';
import utilStyles from '@styles/utils.module.scss';
import { BaseContainer } from '@components/custom-tw-components';
import profileImg1 from '../public/images/rolemadelen1.png';
import profileImg2 from '../public/images/rolemadelen2.png';
import profileImg3 from '../public/images/rolemadelen3.png';
import Link from 'next/link';

const HomeLayout = () => {
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
				<Link
					key={'blog'}
					href={'/blog/'}
					passHref>
					role:madelen
				</Link>
			</p>
			<div className={`${utilStyles.aboutMenu}`}>
				<span>
					<Link
						key={'home'}
						href={'/about'}
						passHref>
						{'about'}
					</Link>
				</span>
				<span>
					<Link
						key={'blog'}
						href={'/blog/'}
						passHref>
						{'blog'}
					</Link>
				</span>
			</div>
		</BaseContainer>
	);
};

export default HomeLayout;
