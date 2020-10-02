import React, { Dispatch, SetStateAction } from 'react';
import { Logo } from 'shared/Logo';
import { ButtonLink, HeaderContainer, MenuIcon, NavList } from './style';

interface HeaderLayoutProps {
    open: boolean;
    onNavClick: Dispatch<SetStateAction<boolean>>;
}

const HeaderLayout = ({ open, onNavClick }: HeaderLayoutProps) => {
    return (
        <HeaderContainer id='header' open={open}>
            <Logo dark={!open} />
            <MenuIcon onClick={() => onNavClick(!open)} open={open} />
            <NavList open={open}>
                <a onClick={() => open && onNavClick(!open)} href='#header'>
                    Home
                </a>
                <a onClick={() => open && onNavClick(!open)} href='#whatIdo'>
                    What I do
                </a>
                <a onClick={() => open && onNavClick(!open)} href='#experiences'>
                    Experiences
                </a>
            </NavList>
            <ButtonLink onClick={() => open && onNavClick(!open)} href='#hireMe' dark={!open}>
                Hire me
            </ButtonLink>
        </HeaderContainer>
    );
};

export default HeaderLayout;
