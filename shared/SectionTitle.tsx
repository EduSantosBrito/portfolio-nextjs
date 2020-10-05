import styled from 'styled-components';
import { WithTheme } from './withTheme';

type SectionTitleProps = WithTheme;

export const SectionTitle = styled.h2<SectionTitleProps>`
    font-weight: 600;
    color: ${({ theme }: SectionTitleProps) => theme.colors.white};
    font-size: ${({ theme }: SectionTitleProps) => theme.fontSizes.large};
    text-align: center;
    display: inline-block;
    position: relative;
    z-index: 2;
    margin: 32px 0;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

    &::after {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 2px;
        background-color: ${({ theme }: SectionTitleProps) => theme.colors.secondary};
        transition: height 500ms;
        z-index: -1;
    }

    &:hover {
        &::after {
            height: 50%;
        }
    }
`;
