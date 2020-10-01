import { Theme } from '@types';
import styled, { css } from 'styled-components';

interface LogoProps {
    dark: boolean;
}

export const Logo = styled.img<LogoProps>`
    width: 40vw;
    max-width: 100px;
    content: ${({ dark, theme }: { dark: boolean; theme: Theme }) => (dark ? css`url(${theme.logo.dark})` : css`url(${theme.logo.white})`)};
`;
