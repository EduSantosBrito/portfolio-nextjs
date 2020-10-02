import { slideDown } from 'shared/keyframes';
import { WithTheme } from 'shared/withTheme';
import styled, { css } from 'styled-components';

interface MenuIconProps extends WithTheme {
    open: boolean;
}

export const MenuIcon = styled.button<MenuIconProps>`
    appearance: none;
    border: none;
    cursor: pointer;
    position: relative;
    outline: none;
    width: 25px;
    height: 20px;
    background-color: transparent;
    justify-self: flex-end;
    margin-right: 24px;

    &::before {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        background-color: ${({ theme }: MenuIconProps) => theme.colors.white};
        transition: transform 500ms;
        transform: rotate(0deg);
        ${({ open }: { open: boolean }) =>
            open &&
            css`
                transform: rotate(45deg);
            `}
    }
    &::after {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({ theme }: MenuIconProps) => theme.colors.white};
        transition: transform 500ms, bottom 500ms;
        transform: rotate(0deg);
        ${({ open }: { open: boolean }) =>
            open &&
            css`
                bottom: 8px;
                transform: rotate(-45deg);
            `}
    }
`;

interface HeaderContainerProps extends WithTheme {
    open: boolean;
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
    padding: 3rem 2.5rem;
    width: 100vw;
    height: 15vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;

    ${({ open, theme }: HeaderContainerProps) =>
        open &&
        css`
            position: fixed;
            grid-template-rows: 15vh 60vh 15vh;
            height: 100vh;
            background-color: ${theme.colors.primary.main};
        `}
`;

interface NavListProps extends WithTheme {
    open: boolean;
}

export const NavList = styled.div<NavListProps>`
    display: ${({ open }: NavListProps) => (open ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 40vh;

    a {
        animation: ${slideDown} 500ms;
        font-weight: 600;
        color: ${({ theme }: NavListProps) => theme.colors.white};
        font-size: ${({ theme }: NavListProps) => theme.fontSizes.large};
        text-decoration: none;
    }
`;

interface ButtonLinkProps extends WithTheme {
    dark: boolean;
}

export const ButtonLink = styled.a<ButtonLinkProps>`
    display: ${({ dark }: ButtonLinkProps) => (dark ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;
    grid-column: 1 / 3;
    grid-row: 3;
    height: 40px;
    background-color: ${({ dark, theme }: ButtonLinkProps) => (dark ? theme.colors.primary.main : theme.colors.secondary)};
    font-weight: 600;
    color: ${({ theme }: ButtonLinkProps) => theme.colors.white};
    font-size: ${({ theme }: ButtonLinkProps) => theme.fontSizes.default};
    padding: 16px 24px;
    border: none;
    border-radius: 8px;
    animation: ${slideDown} 500ms;
    justify-self: center;
    align-self: center;
    text-decoration: none;
`;
