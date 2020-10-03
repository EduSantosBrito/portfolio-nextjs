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

export const HorizontalScrollContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const LanguageIcon = styled.img`
    width: 20%;
    position: absolute;
    right: 8px;
    bottom: 8px;
`;
