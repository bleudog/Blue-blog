import React from 'react';
import Image from 'next/image';
import { AboutWrapper, ContactLinks, ContactIcon, BackButton } from '@components/custom-tw-components';
import metadata from '@data/metadata';
import { useRouter } from 'next/router';
import taikoGIF from '../public/images/about.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    const router = useRouter();
    router.basePath = '/blog';
    const {email, url} = metadata;


    return (
        <AboutWrapper>
            <div className={'mt-8'}>
                <p className={'text-2xl text-primary'}>
                    북치는 프론트엔드 개발자
                </p>
            </div>
            <div>
                <Image
                    priority
                    width={350}
                    height={390}
                    src={taikoGIF}
                    alt='GIF is loading.'
                    className={'rounded-xl'}
                />
            </div>
            <div className='text-primary'>
                <p>
				안녕하세요. Jii Eu(지이) 입니다. 태고(太鼓)치는 취미를 가지고 있지만 태고의 달인은 잘 못합니다. 켄터키주 조용한 곳에 파트너와 강아지 한 마리와 함께 살고 있습니다 👸🏻🐾 
                </p>
                <p>
				2020년에 일본으로 넘어가 1년간 초등학교에서 외국어 교사 (FLT; Foreign Language Teacher)로 일을 했습니다. 그 후 의료 분야 일본 스타트업에 입사해 2년 동안 프론트엔드 개발자로 일을 했습니다. 사내 애플리케이션의 UI 수정 및 유지보수, 그리고 버그를 고치는 작업을 주로 했고, 회사 서비스 소개 및 문의 페이지를 혼자서 처음부터 만들기도 했습니다. 외국어 능력을 살려 개발자들 사이의 영어-일본어 통역도 했었습니다.
                </p>
                <BackButton className={'mx-0'} onClick={() => router.push('/')}>{'←'}</BackButton>
                <ContactLinks>
                    <ContactIcon role="button" href={url.twitter}>
                        <FontAwesomeIcon icon={faTwitter} /> Twitter
                    </ContactIcon>
                    <ContactIcon href={url.github}>
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </ContactIcon>
                    <ContactIcon href={url.instagram}>
                        <FontAwesomeIcon icon={faInstagram} /> Instagram
                    </ContactIcon>
                    <ContactIcon href={url.linkedin}>
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </ContactIcon>
                    <ContactIcon  href={`mailto:${email}`}>
                        <FontAwesomeIcon icon={faEnvelope} /> Email
                    </ContactIcon>
                </ContactLinks>
            </div>
        </AboutWrapper>
    );
}
