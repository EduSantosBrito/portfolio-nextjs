import { SocialMediaItem } from '@types';
import React from 'react';
import FooterLayout from './layout';

const Footer = () => {
    const items: SocialMediaItem[] = [
        {
            icon: '/twitter.svg',
            url: 'https://twitter.com/edusantosbrito',
        },
        {
            icon: '/twitch.svg',
            url: 'https://twitch.tv/britocoding',
        },
        {
            icon: '/github.svg',
            url: 'https://github.com/edusantosbrito',
        },
        {
            icon: '/dribbble.svg',
            url: 'https://dribbble.com/britocoding',
        },
    ];
    return <FooterLayout items={items} />;
};

export default Footer;
