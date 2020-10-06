import React from 'react';
import { HireMeContainer, HireMeTitle, HireMeEmail, HireMeDraw, HireMeTextContainer } from './style';

const HireMe = () => {
    return (
        <HireMeContainer id='hireMe'>
            <HireMeDraw alt='Draw of a person sending email' />
            <HireMeTextContainer>
                <HireMeTitle>Let&apos;s talk</HireMeTitle>
                <HireMeEmail href='mailto:hi@brito.top'>hi@brito.top</HireMeEmail>
            </HireMeTextContainer>
        </HireMeContainer>
    );
};

export default HireMe;
