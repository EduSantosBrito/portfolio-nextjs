import { WithTheme } from 'shared/withTheme';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
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
    font-size: ${({ theme }: HeroTextProps) => theme.fontSizes.extraLarge};
    color: ${({ theme }: HeroTextOrangeProps) => theme.colors.secondary};
`;
