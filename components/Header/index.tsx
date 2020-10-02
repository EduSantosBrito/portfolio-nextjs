import React from 'react';
import { HeaderContainer, HeroText, HeroTextOrange } from './style';

const Header = () => {
    return (
        <HeaderContainer id='header'>
            <HeroText>
                Hello I&apos;m <HeroTextOrange>Brito</HeroTextOrange>
            </HeroText>
            <HeroText>and I&apos;m a</HeroText>
            <HeroText>Web developer</HeroText>
        </HeaderContainer>
    );
};

export default Header;
