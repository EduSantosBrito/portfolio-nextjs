import { Language } from '@types';
import React from 'react';
import LanguagesLayout from './layout';

const Languages = () => {
    const thisYear = new Date().getFullYear();
    const items: Language[] = [
        { title: 'React', years: thisYear - 2018, iconUrl: '/react.svg' },
        { title: 'JavaScript', years: thisYear - 2016, iconUrl: '/javascript.svg' },
        { title: 'HTML', years: thisYear - 2014, iconUrl: '/html.svg' },
        { title: 'CSS', years: thisYear - 2014, iconUrl: '/css.svg' },
        { title: 'GraphQL', years: thisYear - 2018, iconUrl: '/graphql.svg' },
    ];
    return <LanguagesLayout items={items} />;
};

export default Languages;
