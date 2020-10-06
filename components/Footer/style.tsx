import { WithTheme } from 'shared/withTheme';
import styled from 'styled-components';

export const FooterContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

type FooterTitleProps = WithTheme;

export const FooterTitle = styled.h2<FooterTitleProps>`
    font-weight: 600;
    width: 60%;
    font-size: ${({ theme }: FooterTitleProps) => theme.fontSizes.large};
    color: ${({ theme }: FooterTitleProps) => theme.colors.white};
    text-align: center;
`;

export const SocialMediaContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 16px 8px;
    margin-bottom: 32px;
    column-gap: 32px;
    row-gap: 16px;
    cursor: pointer;
`;
