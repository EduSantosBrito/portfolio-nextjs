import { WithTheme } from 'shared/withTheme';
import styled from 'styled-components';

type HeroContainerProps = WithTheme;

export const HeaderContainer = styled.header<HeroContainerProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 64px;

    &::before {
        content: '';
        background: url('/dot.svg');
        background-repeat: repeat;
        display: block;
        width: 40vw;
        max-width: 300px;
        height: 70px;
        position: absolute;
        left: 0;
        bottom: -50px;
        @media (min-width: ${({ theme }: HeroContainerProps) => theme.breakpoints.sm}) {
            width: 150px;
            bottom: 24px;
        }

        @media (min-width: ${({ theme }: HeroContainerProps) => theme.breakpoints.lg}) {
            width: 100%;
            bottom: 0;
        }
    }

    @media (min-width: ${({ theme }: HeroContainerProps) => theme.breakpoints.sm}) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

type HeroTextContainerProps = WithTheme;

export const HeroTextContainer = styled.div<HeroTextContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: ${({ theme }: HeroTextContainerProps) => theme.breakpoints.sm}) {
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

type HeroTextProps = WithTheme;

export const HeroText = styled.h1<HeroTextProps>`
    font-weight: 600;
    font-size: ${({ theme }: HeroTextProps) => theme.fontSizes.extraLarge};
    color: ${({ theme }: HeroTextProps) => theme.colors.white};
`;

type HeroTextOrangeProps = WithTheme;

export const HeroTextOrange = styled.span<HeroTextOrangeProps>`
    font-weight: 600;
    font-size: ${({ theme }: HeroTextOrangeProps) => theme.fontSizes.extraLarge};
    color: ${({ theme }: HeroTextOrangeProps) => theme.colors.secondary.main};
`;

type HeroDrawProps = WithTheme;

export const HeroDraw = styled.img<HeroDrawProps>`
    content: url('/header-draw.svg');
    display: none;

    @media (min-width: ${({ theme }: HeroDrawProps) => theme.breakpoints.sm}) {
        display: block;
    }
`;
