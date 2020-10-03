import { Language } from '@types';
import React from 'react';
import LanguagesLayout from './layout';

const Languages = () => {
    const items: Language[] = [
        { title: 'React', years: 3, iconUrl: '/react.svg' },
        { title: 'JavaScript', years: 4, iconUrl: '/javascript.svg' },
        { title: 'HTML', years: 7, iconUrl: '/html.svg' },
        { title: 'CSS', years: 7, iconUrl: '/css.svg' },
        { title: 'GraphQL', years: 2, iconUrl: '/graphql.svg' },
    ];
    return <LanguagesLayout items={items} />;
};

export default Languages;
