import React, { Dispatch, SetStateAction } from 'react';
import { Logo } from 'shared/Logo';
import { ButtonLink, NavbarContainer, MenuIcon, NavList } from './style';

interface NavbarLayoutProps {
    open: boolean;
    onNavClick: Dispatch<SetStateAction<boolean>>;
}

const NavbarLayout = ({ open, onNavClick }: NavbarLayoutProps) => {
    return (
        <NavbarContainer open={open}>
            <Logo dark={!open} alt="That's my logo, it's written brito.top" />
            <MenuIcon aria-label='Hamburger menu' onClick={() => onNavClick(!open)} open={open} />
            <NavList open={open}>
                <a onClick={() => open && onNavClick(!open)} href='#header'>
                    Home
                </a>
                <a onClick={() => open && onNavClick(!open)} href='#languages'>
                    What I do
                </a>
                <a onClick={() => open && onNavClick(!open)} href='#experiences'>
                    Experiences
                </a>
            </NavList>
            <ButtonLink onClick={() => open && onNavClick(!open)} href='#hireMe' dark={!open}>
                Hire me
            </ButtonLink>
        </NavbarContainer>
    );
};

export default NavbarLayout;
