import styled from 'styled-components';
import { WithTheme } from './withTheme';

type CardProps = WithTheme;

export const Card = styled.div<CardProps>`
    width: auto;
    min-width: 100px;
    max-width: 100%;
    height: auto;
    min-height: 100px;
    max-height: 200px;
    margin: 0px 8px;

    @media (min-width: ${({ theme }: CardProps) => theme.breakpoints.md}) {
        height: 150px;
    }

    border-radius: 10px;
    padding: 16px;
    background-color: ${({ theme }: CardProps) => theme.colors.typography.dark};
    transition: background-color 500ms;
    position: relative;
    flex: 0 0 auto;
    &:hover {
        background-color: ${({ theme }: CardProps) => theme.colors.primary.darker};
    }
`;

type CardTitleProps = WithTheme;

export const CardTitle = styled.h3<CardTitleProps>`
    font-weight: 600;
    font-size: ${({ theme }: CardTitleProps) => theme.fontSizes.default};
    color: ${({ theme }: CardTitleProps) => theme.colors.white};
`;

type CardDescriptionProps = WithTheme;

export const CardDescription = styled.p<CardDescriptionProps>`
    margin-top: 4px;
    margin-bottom: 16px;
    font-weight: 500;
    font-size: ${({ theme }: CardDescriptionProps) => theme.fontSizes.small};
    color: ${({ theme }: CardDescriptionProps) => theme.colors.typography.main};
    max-width: 160px;
`;
