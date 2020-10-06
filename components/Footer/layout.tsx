import { SocialMediaItem } from '@types';
import React from 'react';
import { FooterContainer, FooterTitle, SocialMediaContainer } from './style';

interface FooterLayoutProps {
    items: SocialMediaItem[];
}

const FooterLayout = ({ items }: FooterLayoutProps) => {
    return (
        <FooterContainer id='footer'>
            <FooterTitle>Follow me on my social media</FooterTitle>
            <SocialMediaContainer>
                {items.map(item => (
                    <a key={item.url} href={item.url} rel='noopener'>
                        <img src={item.icon} alt='Social media icon' />
                    </a>
                ))}
            </SocialMediaContainer>
        </FooterContainer>
    );
};

export default FooterLayout;
