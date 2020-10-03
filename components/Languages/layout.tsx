import { Language } from '@types';
import React from 'react';
import { Card, CardDescription, CardTitle } from 'shared/Card';
import { SectionTitle } from 'shared/SectionTitle';
import { CardsContainer, HorizontalScrollContainer, LanguageIcon, LanguagesContainer } from './style';

interface LanguagesLayoutProps {
    items: Language[];
}

const LanguagesLayout = ({ items }: LanguagesLayoutProps) => {
    return (
        <LanguagesContainer id='languages'>
            <SectionTitle>What I&apos;m able to do</SectionTitle>
            <CardsContainer>
                <HorizontalScrollContainer>
                    {items.map(item => (
                        <Card key={item.title}>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{`${item.years} years of experience`}</CardDescription>
                            <LanguageIcon src={item.iconUrl} alt={`Icon representing ${item.title} programming language`} />
                        </Card>
                    ))}
                </HorizontalScrollContainer>
            </CardsContainer>
        </LanguagesContainer>
    );
};

export default LanguagesLayout;
