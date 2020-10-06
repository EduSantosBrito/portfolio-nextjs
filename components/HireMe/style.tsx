import { WithTheme } from 'shared/withTheme';
import styled from 'styled-components';

type HireMeContainerProps = WithTheme;

export const HireMeContainer = styled.section<HireMeContainerProps>`
    margin: 64px 0px;
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme }: HireMeContainerProps) => theme.colors.secondary.main};

    @media (min-width: ${({ theme }: HireMeContainerProps) => theme.breakpoints.sl}) {
        height: 250px;
        &::before {
            content: '';
            background-color: ${({ theme }: HireMeContainerProps) => theme.colors.secondary.main};
            height: 250px;
            position: absolute;
            width: 100%;
        }
    }
`;

type HireMeTitleProps = WithTheme;

export const HireMeTitle = styled.h2<HireMeTitleProps>`
    font-weight: 600;
    font-size: ${({ theme }: HireMeTitleProps) => theme.fontSizes.extraLarge};
    color: ${({ theme }: HireMeTitleProps) => theme.colors.background};
`;

type HireMeEmailProps = WithTheme;

export const HireMeEmail = styled.a<HireMeEmailProps>`
    position: relative;
    font-weight: 600;
    font-size: ${({ theme }: HireMeEmailProps) => theme.fontSizes.extraLarge};
    color: ${({ theme }: HireMeEmailProps) => theme.colors.white};
    text-decoration: none;

    &::after {
        content: '';
        width: 0;
        height: 3px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 8px;
        background-color: ${({ theme }: HireMeEmailProps) => theme.colors.background};
        transition: width 300ms ease-in-out;
    }

    &:hover {
        &::after {
            width: 100%;
        }
    }
`;

type HireMeTextContainerProps = WithTheme;

export const HireMeTextContainer = styled.div<HireMeTextContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

type HireMeDrawProps = WithTheme;

export const HireMeDraw = styled.img<HireMeDrawProps>`
    content: url('/hireMe-draw.svg');
    display: none;

    @media (min-width: ${({ theme }: HireMeDrawProps) => theme.breakpoints.sm}) {
        display: block;
    }
`;
