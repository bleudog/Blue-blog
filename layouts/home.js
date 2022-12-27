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
			{/* <Link
				key={'blog'}
				href={'/about/'}
				passHref>
				<h1 className={`${utilStyles.homeHeader}`}>
					role
					<br />
					madelen
				</h1>
			</Link>
			<Link
				key={'blog'}
				href={'/blog/'}
				passHref>
				<h1 className={`${utilStyles.homeHeader2}`}>blog</h1>
			</Link> */}
			<div className={utilStyles.hero}>
				{figureType === 0 && (
					<Link
						key={'blog'}
						href={'/blog/'}
						passHref>
						<Image
							priority
							width={300}
							height={600}
							src={profileImg1}
							alt='Rolemadelen'
						/>
					</Link>
				)}
				{figureType === 1 && (
					<Link
						key={'blog'}
						href={'/blog/'}
						passHref>
						<Image
							priority
							width={260}
							height={600}
							src={profileImg2}
							alt='Rolemadelen'
						/>
					</Link>
				)}
				{figureType === 2 && (
					<Link
						key={'blog'}
						href={'/blog/'}
						passHref>
						<Image
							priority
							width={300}
							height={600}
							src={profileImg3}
							alt='Rolemadelen'
						/>
					</Link>
				)}
			</div>
		</BaseContainer>
	);
};

export default HomeLayout;
