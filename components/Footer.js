import Image from 'next/image';
import Link from 'next/link';
import { FooterContainer } from './custom-tw-components';
import metadata from '@data/metadata';

const Footer = () => {
	const sns = [
		{ name: 'github', link: metadata.url.github },
		{ name: 'twitter', link: metadata.url.twitter },
	];
	return (
		<FooterContainer>
			<div>
				© 2022{' '}
				<a href={metadata.url.repo}>
					{metadata.author.id}
				</a>
				. Powered by&nbsp;<a href='https://vercel.com/'>Vercel</a>
			</div>
			<div className='snsLinks flex items-center justify-center'>
				{sns.map((social) => (
					<Link
						href={social.link}
						key={social.link}
						passHref>
						<a className={'px-1'}>
							<Image
								priority
								src={`/images/social/${social.name}.svg`}
								height={20}
								width={20}
								alt={social.name}
							/>
						</a>
					</Link>
				))}
			</div>
		</FooterContainer>
	);
};

export default Footer;
