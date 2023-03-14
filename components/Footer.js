import React from 'react';
import { FooterContainer } from './custom-tw-components';
import metadata from '@data/metadata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import utilStyles from '@styles/utils.module.scss';

const Footer = () => {
    const {email, url} = metadata;

    return (
        <FooterContainer>
            <div>
				© 2022{' '}
                <a href={metadata.url.repo}>
                    {metadata.author.id}
                </a>
				. Powered by&nbsp;<a href='https://vercel.com/'>Vercel</a>
            </div>
            <div className={utilStyles.footer}>
                <a role="button" href={url.twitter} className='btn btn-link btn-sm hover:btn-ghost'>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a role="button" href={url.github} className='btn btn-link btn-sm hover:btn-ghost'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a role="button" href={`mailto:${email}`} className='btn btn-link btn-sm hover:btn-ghost'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </FooterContainer>
    );
};

export default Footer;
