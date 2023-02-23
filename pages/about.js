import Image from 'next/image';
import utilStyles from '@styles/utils.module.scss';
import taikoGIF from '../public/images/about.gif';
import { AboutWrapper } from '@components/custom-tw-components';

export default function About() {
	return (
		<div className={utilStyles.aboutContainer}>
			<span className={utilStyles.bgtext}>Jii Eu</span>
			<span className={utilStyles.bgtext}>role:madelen</span>
			<AboutWrapper>
				<div>
					<Image
						priority
						width={350}
						height={390}
						src={taikoGIF}
						alt='taiko'
					/>
				</div>
				<div>
					<h2>태고・太鼓 하는 프론트엔드 개발자</h2>
					<table className={utilStyles.table}>
						<tbody>
							<tr>
								<td><strong>GitHub</strong></td>
								<td><a href="https://github.com/rolemadelen">https://github.com/rolemadelen</a></td>
							</tr>
							<tr>
								<td><strong>Blog</strong></td>
								<td><a href="https://www.rolemadelen.com/">https://www.rolemadelen.com/</a></td>
							</tr>
							<tr>
								<td><strong>Contact</strong></td>
								<td><a href="mailto:rolemadelen@pm.me">rolemadelen@pm.me</a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</AboutWrapper>
		</div>
	);
}
