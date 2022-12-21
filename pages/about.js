import Container from '@components/Container';
import Footer from '@components/Footer';
import utilStyles from '@styles/utils.module.scss';
import Link from 'next/link';

export default function About() {
	return (
		<div className={`${utilStyles.hero} ${utilStyles.about}`}>
			<p className={`${utilStyles.h1}`}>
				Hi. I&apos;m <b>Rolemadelen</b> or <b>Madelen</b> for short.
			</p>
			<p className={`${utilStyles.h2}`}>I&apos;m a Frontend Developer.</p>
			<div className={`${utilStyles.aboutMenu}`}>
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
