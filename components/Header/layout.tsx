import React, { Dispatch, SetStateAction } from 'react';
import { Logo } from 'shared/Logo';
import { HeaderContainer, MenuIcon } from './style';

interface HeaderLayoutProps {
    open: boolean;
    onNavClick: Dispatch<SetStateAction<boolean>>;
}

const HeaderLayout = ({ open, onNavClick }: HeaderLayoutProps) => {
    return (
        <HeaderContainer open={open}>
            <Logo dark={!open} />
            <MenuIcon onClick={() => onNavClick(!open)} open={open} />
        </HeaderContainer>
    );
};

export default HeaderLayout;
