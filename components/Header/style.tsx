import { Theme } from '@types';
import styled, { css } from 'styled-components';

interface MenuIconProps {
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
        background-color: ${({ theme }: { theme: Theme }) => theme.colors.white};
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
        background-color: ${({ theme }: { theme: Theme }) => theme.colors.white};
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

interface HeaderContainerProps {
    open: boolean;
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
    padding: 32px 16px;
    width: 100vw;
    height: 10vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: flex-start;

    ${({ open, theme }: { open: boolean; theme: Theme }) =>
        open &&
        css`
            position: fixed;
            height: 100vh;
            background-color: ${theme.colors.primary.main};
        `}
`;
