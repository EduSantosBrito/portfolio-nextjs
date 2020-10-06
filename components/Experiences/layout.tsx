import React from 'react';
import { Experience } from '@types';
import { SectionTitle } from 'shared/SectionTitle';
import {
    Chip,
    ChipsContainer,
    ExperienceDate,
    ExperienceDescription,
    ExperienceItem,
    ExperienceJobTitle,
    ExperiencesContainer,
    ExperienceTitle,
} from './style';

interface ExperiencesLayoutProps {
    experiences: Experience[];
}

const ExperiencesLayout = ({ experiences }: ExperiencesLayoutProps) => {
    return (
        <ExperiencesContainer id='experiences'>
            <SectionTitle>Experiences</SectionTitle>
            {experiences.map(experience => (
                <ExperienceItem key={experience.company}>
                    <ExperienceTitle>{experience.company}</ExperienceTitle>
                    <ExperienceDate>
                        {experience.startDate} until {experience.endDate || 'now'}
                    </ExperienceDate>
                    <ExperienceJobTitle>{experience.jobTitle}</ExperienceJobTitle>
                    <ExperienceDescription>{experience.description}</ExperienceDescription>
                    <ChipsContainer>
                        {experience.techs?.map(tech => (
                            <Chip key={tech.title}>{tech.title}</Chip>
                        ))}
                    </ChipsContainer>
                </ExperienceItem>
            ))}
        </ExperiencesContainer>
    );
};

export default ExperiencesLayout;
