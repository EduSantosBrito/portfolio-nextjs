import { WithTheme } from 'shared/withTheme';
import styled from 'styled-components';

export const ExperiencesContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

type ExperienceTitleProps = WithTheme;

export const ExperienceTitle = styled.h3<ExperienceTitleProps>`
    font-weight: 600;
    font-size: ${({ theme }: ExperienceTitleProps) => theme.fontSizes.large};
    color: ${({ theme }: ExperienceTitleProps) => theme.colors.white};
`;

type ExperienceDateProps = WithTheme;

export const ExperienceDate = styled.p<ExperienceDateProps>`
    font-weight: 400;
    font-size: ${({ theme }: ExperienceDateProps) => theme.fontSizes.small};
    color: ${({ theme }: ExperienceDateProps) => theme.colors.typography.main};
`;

type ExperienceJobTitleProps = WithTheme;

export const ExperienceJobTitle = styled.h4<ExperienceJobTitleProps>`
    font-weight: 600;
    font-size: ${({ theme }: ExperienceJobTitleProps) => theme.fontSizes.default};
    color: ${({ theme }: ExperienceJobTitleProps) => theme.colors.white};
`;

type ExperienceDescriptionProps = WithTheme;

export const ExperienceDescription = styled.p<ExperienceDescriptionProps>`
    font-weight: 400;
    font-size: ${({ theme }: ExperienceDescriptionProps) => theme.fontSizes.default};
    color: ${({ theme }: ExperienceDescriptionProps) => theme.colors.typography.main};
`;

export const ChipsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    margin: 8px 0px;
`;

type ChipProps = WithTheme;

export const Chip = styled.div<ChipProps>`
    height: 20px;
    background-color: ${({ theme }: ChipProps) => theme.colors.primary.main};
    font-weight: 600;
    color: ${({ theme }: ChipProps) => theme.colors.white};
    text-transform: uppercase;
    padding: 2px 12px;
    border-radius: 10px;
`;

export const ExperienceItem = styled.div`
    margin: 16px 0px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
`;
