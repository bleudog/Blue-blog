import Image from 'next/image';
import utilStyles from '@styles/utils.module.scss';
import { AboutWrapper } from '@components/custom-tw-components';
import metadata from '@data/metadata';
import taikoGIF from '../public/images/about.gif';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function About() {
	const {author, email, url} = metadata;

	return (
		<div className={utilStyles.aboutContainer}>
			<span className={utilStyles.bgtext}>{author.id}</span>
			<AboutWrapper>
				<div>
					<Image
						priority
						width={350}
						height={390}
						src={taikoGIF}
						alt='GIF is loading.'
					/>
				</div>
				<div>
					<h1 className={utilStyles.title}>Jii Eu</h1>
					<h2 className={utilStyles.subtitle}>태고・太鼓 하는 프론트엔드 개발자</h2>
					<p>
						・ 조용히 눈에 띄는 걸 좋아합니다. <br />
						・ 새로운 경험을 좋아합니다. <br />
						・ 기록을 좋아합니다. <br />
					</p>
					<div className={utilStyles.contactLinks}>
						<a href={url.twitter}>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href={url.github}>
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a href={url.instagram}>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a href={url.linkedin}>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a href={`mailto:${email}`}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
						</a>
					</div>
				</div>
			</AboutWrapper>
		</div>
	);
}
