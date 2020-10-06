import { CardsContainer, HorizontalScrollContainer } from '@components/Languages/style';
import { ShowcaseItem } from '@types';
import React from 'react';
import { Card, CardDescription, CardTitle } from 'shared/Card';
import { SectionTitle } from 'shared/SectionTitle';
import { ShowcaseContainer, ShowcaseLink } from './style';

interface ShowcaseLayoutProps {
    items: ShowcaseItem[];
}

const ShowcaseLayout = ({ items }: ShowcaseLayoutProps) => {
    return (
        <ShowcaseContainer id='showcase'>
            <SectionTitle>Showcase</SectionTitle>
            <CardsContainer>
                <HorizontalScrollContainer>
                    {items.map(item => (
                        <Card key={item.title}>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                            <ShowcaseLink href={item.url} rel='noopener' target='_blank'>
                                Project link
                            </ShowcaseLink>
                        </Card>
                    ))}
                </HorizontalScrollContainer>
            </CardsContainer>
        </ShowcaseContainer>
    );
};

export default ShowcaseLayout;
