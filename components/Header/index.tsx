import React from 'react';
import { HeaderContainer, HeroText, HeroTextOrange } from './style';

const Header = () => {
    return (
        <HeaderContainer>
            <HeroText>
                Hello I&apos;m <HeroTextOrange>Brito</HeroTextOrange>
            </HeroText>
            <HeroText>and I&apos;m a</HeroText>
            <HeroText>Web developer</HeroText>
        </HeaderContainer>
    );
};

export default Header;
