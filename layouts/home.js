import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import utilStyles from '@styles/utils.module.scss';
import { BaseContainer } from '@components/custom-tw-components';
import profileImg1 from '../public/images/bprsstnt1.png';
import profileImg2 from '../public/images/bprsstnt2.png';
import Link from 'next/link';
import navlink from '@data/navlink';

const HomeLayout = () => {
    const {blog, about} = navlink;
    const images = [profileImg1, profileImg2];
    const [imageIndex, setImageIndex] = useState(0);
	
    useEffect(() => {
        setImageIndex(Math.floor((Math.random() * 10) % 2));
    }, []);
	
    const getProfileImage = (width, height) => {
        return (
            <Image
                priority
                width={width}
                height={height}
                src={images[imageIndex]}
                alt="profile image"
            />
        );
    };

    return (
        <BaseContainer>
            <div className={utilStyles.figure}>
                {getProfileImage(650, 650)}
            </div>
            <p className={utilStyles.homeTitle}>
                <Link key={blog.name} href={blog.link} passHref>
					bprssnt
                </Link>
            </p>
            <div className={`${utilStyles.menu}`}>
                <span>
                    <a href={about.link} className={'link'}>{about.name}</a>
                </span>
                <span>
                    <a href={blog.link} className={'link'}>{blog.name}</a>
                </span>
            </div>
        </BaseContainer>
    );
};

export default HomeLayout;
