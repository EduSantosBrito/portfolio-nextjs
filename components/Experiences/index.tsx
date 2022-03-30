import { Experience } from '@types';
import React from 'react';
import ExperiencesLayout from './layout';

const Experiences = () => {
    const experiences: Experience[] = [
        {
            company: 'Spocket',
            jobTitle: 'Senior front-end developer',
            description:
                "I've been increasing app performance and migrating from class component to functional component. I`ve been creating new pages and making tests on them. I've been improving CI process",
            startDate: 'Jan/22',
            techs: [
                { title: 'React.js' },
                { title: 'Nextjs' },
                { title: 'Jest' },
                { title: 'Cypress' },
                { title: 'Redux' },
                { title: 'CircleCI' },
                { title: 'React-Query' },
            ],
        },
        {
            company: 'FDTE',
            jobTitle: 'Senior front-end developer',
            startDate: 'Oct/20',
            description:
                "I've been migrating a legacy JSF project to React.js at the same time adding new features to this new project following a high fidelity design. I've created a micro-frontend architecture using single-spa for a financial software used by 3 teams of developers. I've been maintaining an internal design system package using Typescript",
            techs: [
                { title: 'React.js' },
                { title: 'Typescript' },
                { title: 'Storybook' },
                { title: 'Redux' },
                { title: 'React-Router' },
                { title: 'Cucumber' },
                { title: 'React-Query' },
            ],
        },
        {
            company: 'Agência Digi',
            jobTitle: 'Senior full-stack developer',
            startDate: 'Mar/21',
            endDate: 'Aug/21',
            description:
                "I've been working together with the product team to migrate an Flutter app to PWA in React with Typescript. I've automated a big weekly process that used .xlsx files to update many databases.",
            techs: [{ title: 'React.js' }, { title: 'Typescript' }, { title: 'GraphQL' }, { title: 'Node.js' }, { title: 'MongoDB' }],
        },
        {
            company: 'Lukin',
            jobTitle: 'Front-end developer',
            startDate: 'Jun/20',
            endDate: 'Sep/20',
            description:
                "I've included new features to the Publiko app environment. I've created an open-source package named gatsby-plugin-gdpr that asks users to accept cookies using key-idb to store data",
            techs: [
                { title: 'React.js' },
                { title: 'Node.js' },
                { title: 'Gatsby' },
                { title: 'Firebase Functions' },
                { title: 'React Native' },
                { title: 'Typescript' },
                { title: 'GraphQL' },
            ],
        },
        {
            company: 'Viewup',
            jobTitle: 'Front-end developer',
            startDate: 'Jun/19',
            endDate: 'Jun/20',
            description:
                "I've created a social analytics platform that asks users to fill a form with several words and generate a social profile from result. I've created a job platform. I've created some open-source packages for the Adonis.js community: adonis-mongodb, adonis-graphql-server, adonis-dropbox and adonis-pagseguro",
            techs: [
                { title: 'React.js' },
                { title: 'Node.js' },
                { title: 'Gatsby' },
                { title: 'Firebase Functions' },
                { title: 'React Native' },
                { title: 'Typescript' },
                { title: 'AdonisJS' },
                { title: 'GraphQL' },
                { title: 'MongoDB' },
                { title: 'Docker' },
            ],
        },
    ];
    return <ExperiencesLayout experiences={experiences} />;
};

export default Experiences;
