import Container from '@components/Container';
import { BaseContainer } from '@components/custom-tw-components';
import Footer from '@components/Footer';
import utilStyles from '@styles/utils.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import figure from '../public/images/aboutme.png';

export default function About() {
	return (
		<div className={utilStyles.aboutContainer}>
			<div>
				<p>
					Hi. I&apos;m <b>Rolemadelen</b> or <b>Madelen</b> for short.
				</p>
				<p>I&apos;m a Frontend Developer.</p>
			</div>
			<div className={utilStyles.aboutMenu}>
				<span>
					<Link
						key={'home'}
						href={'/'}
						passHref>
						{'home'}
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
		</div>
	);
}
