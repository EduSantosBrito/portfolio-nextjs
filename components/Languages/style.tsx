import { WithTheme } from 'shared/withTheme';
import styled from 'styled-components';

export const LanguagesContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CardsContainer = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 16px 1fr 16px;

    &::before {
        content: '';
    }
    &::after {
        content: '';
    }
`;

type HorizontalScrollContainerProps = WithTheme;

export const HorizontalScrollContainer = styled.div<HorizontalScrollContainerProps>`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: ${({ theme }: HorizontalScrollContainerProps) => theme.breakpoints.sm}) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
        gap: 1.5rem;
    }
`;

export const LanguageIcon = styled.img`
    width: 15%;
    position: absolute;
    right: 8px;
    bottom: 8px;
`;
