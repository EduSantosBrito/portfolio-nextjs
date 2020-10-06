import React from 'react';
import { HireMeContainer, HireMeTitle, HireMeEmail } from './style';

const HireMe = () => {
    return (
        <HireMeContainer id='hireMe'>
            <HireMeTitle>Let&apos;s talk</HireMeTitle>
            <HireMeEmail href='mailto:hi@brito.top'>hi@brito.top</HireMeEmail>
        </HireMeContainer>
    );
};

export default HireMe;
