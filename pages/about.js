import Image from 'next/image';
import utilStyles from '@styles/utils.module.scss';
import { AboutWrapper } from '@components/custom-tw-components';
import metadata from '@data/metadata';
import taikoGIF from '../public/images/about.gif';

export default function About() {
	const {author, email, url} = metadata;

	return (
		<div className={utilStyles.aboutContainer}>
			<span className={utilStyles.bgtext}>{author.name}</span>
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
					<h2>태고・太鼓 하는 프론트엔드 개발자</h2>
					<table className={utilStyles.table}>
						<tbody>
							<tr>
								<td><strong>GitHub</strong></td>
								<td><a href={url.github}>{url.github}</a></td>
							</tr>
							<tr>
								<td><strong>Blog</strong></td>
								<td><a href={url.blog}>{url.blog}</a></td>
							</tr>
							<tr>
								<td><strong>LinkedIn</strong></td>
								<td><a href={url.linkedin}>{url.linkedin}</a></td>
							</tr>
							<tr>
								<td><strong>Contact</strong></td>
								<td><a href={`mailto:${email}`}>{email}</a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</AboutWrapper>
		</div>
	);
}
