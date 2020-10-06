import { slideUp } from 'shared/keyframes';
import { WithTheme } from 'shared/withTheme';
import styled from 'styled-components';

type CookiesContainerProps = WithTheme;

export const CookiesContainer = styled.section<CookiesContainerProps>`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 150px;
    background-color: ${({ theme }: CookiesContainerProps) => theme.colors.primary.main};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 2;
    animation: ${slideUp} 1000ms;

    @media (min-width: ${({ theme }: CookiesContainerProps) => theme.breakpoints.sm}) {
        flex-direction: row;
        height: 100px;
    }
`;

type OptionsContainerProps = WithTheme;

export const OptionsContainer = styled.div<OptionsContainerProps>`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    align-items: center;
    gap: 8px;

    @media (min-width: ${({ theme }: OptionsContainerProps) => theme.breakpoints.sm}) {
        flex-direction: row;
        gap: 16px;
    }
`;

type MessageContainerProps = WithTheme;

export const MessageContainer = styled.div<MessageContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 8px;

    @media (min-width: ${({ theme }: MessageContainerProps) => theme.breakpoints.sm}) {
        flex-direction: row;
    }
`;

type CookiesMessageProps = WithTheme;

export const CookiesMessage = styled.p<CookiesMessageProps>`
    font-weight: 600;
    font-size: ${({ theme }: CookiesMessageProps) => theme.fontSizes.small};
    color: ${({ theme }: CookiesMessageProps) => theme.colors.primary.darker};
    text-align: center;
`;

type CookiesLinkProps = WithTheme;

export const CookiesLink = styled.a<CookiesLinkProps>`
    font-weight: 600;
    font-size: ${({ theme }: CookiesLinkProps) => theme.fontSizes.small};
    color: ${({ theme }: CookiesLinkProps) => theme.colors.primary.darker};
`;

interface ButtonProps extends WithTheme {
    dark: boolean;
}

export const Button = styled.a<ButtonProps>`
    cursor: pointer;
    display: ${({ dark }: ButtonProps) => (dark ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;
    grid-column: 1 / 3;
    grid-row: 3;
    height: 40px;
    background-color: ${({ dark, theme }: ButtonProps) => (dark ? theme.colors.primary.main : theme.colors.secondary.main)};
    font-weight: 600;
    color: ${({ theme }: ButtonProps) => theme.colors.white};
    font-size: ${({ theme }: ButtonProps) => theme.fontSizes.default};
    padding: 16px 24px;
    border: none;
    border-radius: 8px;
    justify-self: center;
    align-self: center;
    text-decoration: none;
    transition: background-color 500ms;

    &:hover {
        background-color: ${({ dark, theme }: ButtonProps) => (dark ? theme.colors.primary.dark : theme.colors.secondary.dark)};
    }

    @media (min-width: ${({ theme }: ButtonProps) => theme.breakpoints.md}) {
        font-size: ${({ theme }: ButtonProps) => theme.fontSizes.small};
    }
`;
