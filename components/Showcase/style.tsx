import { WithTheme } from 'shared/withTheme';
import styled from 'styled-components';

export const ShowcaseContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

type ShowcaseLinkProps = WithTheme;

export const ShowcaseLink = styled.a<ShowcaseLinkProps>`
    position: absolute;
    right: 20px;
    bottom: 8px;
    color: ${({ theme }: ShowcaseLinkProps) => theme.colors.secondary.main};
    font-weight: 400;
    font-size: ${({ theme }: ShowcaseLinkProps) => theme.fontSizes.small};
    text-decoration: none;

    &::after {
        content: url('/right.svg');
        position: relative;
        right: -5px;
        bottom: -3px;
        transition: right 500ms;

        @media (min-width: ${({ theme }: ShowcaseLinkProps) => theme.breakpoints.md}) {
            bottom: -1px;
        }
    }

    &:hover {
        &::after {
            right: -10px;
        }
    }
`;
