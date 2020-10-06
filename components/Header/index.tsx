import React from 'react';
import { HeaderContainer, HeroDraw, HeroText, HeroTextContainer, HeroTextOrange } from './style';

const Header = () => {
    return (
        <HeaderContainer id='header'>
            <HeroTextContainer>
                <HeroText>
                    Hello I&apos;m <HeroTextOrange>Brito</HeroTextOrange>
                </HeroText>
                <HeroText>and I&apos;m a</HeroText>
                <HeroText>Web developer</HeroText>
            </HeroTextContainer>
            <HeroDraw alt='Draw of a programmer using a computer' />
        </HeaderContainer>
    );
};

export default Header;
