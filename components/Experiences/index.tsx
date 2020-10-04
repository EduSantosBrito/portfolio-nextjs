import { Experience } from '@types';
import React from 'react';
import ExperiencesLayout from './layout';

const Experiences = () => {
    const experiences: Experience[] = [
        { company: 'FDTE', jobTitle: 'Senior front-end developer', startDate: 'Oct/20', techs: [{ title: 'React.js' }] },
        {
            company: 'Lukin',
            jobTitle: 'Front-end developer',
            startDate: 'Jun/20',
            endDate: 'Sep/20',
            description: 'Development in React.js, Node.js, Firebase Functions, Gatsby and React Native.',
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
                'Development in React.js in Front-end, Typescript or AdonisJS in Back-end, using GraphQL and MongoDB.  Structuring of tasks/sprint, team leadership and project architecture. Responsibility on deploy in staging and production using Docker.',
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
        {
            company: 'HANDCOM',
            jobTitle: 'Front-end developer',
            startDate: 'Mar/19',
            endDate: 'Jun/19',
            description: 'Software development in React.js and maintenance of legacy systems.',
            techs: [{ title: 'React.js' }],
        },
    ];
    return <ExperiencesLayout experiences={experiences} />;
};

export default Experiences;
