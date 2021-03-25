import { ShowcaseItem } from '@types';
import React from 'react';
import ShowcaseLayout from './layout';

const Showcase = () => {
    const items: ShowcaseItem[] = [
        {
            title: 'create-nrd-app',
            description: 'CLI that generates node-react-docker app',
            url: 'https://www.npmjs.com/package/create-nrd-app',
        },
        {
            title: 'adonis-mongodb',
            description: 'AdonisJS Provider to use Mongodb',
            url: 'https://www.npmjs.com/package/adonis-mongodb',
        },
        {
            title: 'adonis-graphql-server',
            description: 'AdonisJS Provider to use GraphQL',
            url: 'https://www.npmjs.com/package/adonis-mongodb',
        },
        {
            title: 'gatsby-plugin-gdpr',
            description: 'Gatsby plugin to add google tag manager GDPR form to your site using idb-keyval.',
            url: 'https://www.npmjs.com/package/gatsby-plugin-gdpr',
        },
        {
            title: 'merge-style-modules',
            description: 'A package that merge style modules',
            url: 'https://www.npmjs.com/package/merge-style-modules',
        },
        {
            title: 'open-portfolio-nextjs',
            description: 'An open-source code to use as your portfolio.',
            url: 'https://github.com/EduSantosBrito/open-portfolio-nextjs',
        },
    ];
    return <ShowcaseLayout items={items} />;
};

export default Showcase;
