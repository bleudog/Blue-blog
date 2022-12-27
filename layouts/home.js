import Image from 'next/image';
import Footer from '@components/Footer';
import Container from '@components/Container';
import utilStyles from '@styles/utils.module.scss';
import { Banner, BaseContainer } from '@components/custom-tw-components';
import profileImg1 from '../public/images/rolemadelen1.png';
import profileImg2 from '../public/images/rolemadelen2.png';
import profileImg3 from '../public/images/rolemadelen3.png';
import Link from 'next/link';

const HomeLayout = () => {
	const figureType = Math.floor((Math.random() * 10) % 3);
	return (
		<BaseContainer>
			<div className={utilStyles.figure}>
				{figureType === 0 && (
					<Image
						priority
						width={300}
						height={600}
						src={profileImg1}
						alt='Rolemadelen'
					/>
				)}
				{figureType === 1 && (
					<Image
						priority
						width={260}
						height={600}
						src={profileImg2}
						alt='Rolemadelen'
					/>
				)}
				{figureType === 2 && (
					<Image
						priority
						width={300}
						height={600}
						src={profileImg3}
						alt='Rolemadelen'
					/>
				)}
			</div>
			<p className={utilStyles.banner}>
				<Link
					key={'blog'}
					href={'/blog/'}
					passHref>
					rolemadelen
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
