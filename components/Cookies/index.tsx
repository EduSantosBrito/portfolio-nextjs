import React, { useCallback, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { get, set } from 'idb-keyval';
import { Button, CookiesContainer, CookiesLink, CookiesMessage, MessageContainer, OptionsContainer } from './style';

const BRITO_COOKIES_ACCEPTANCE = 'BRITO_COOKIES_ACCEPTANCE';

const Cookies = () => {
    const [userAcceptance, setUserAcceptance] = useState<boolean>(null);
    const getUserAcceptance = useCallback(async (): Promise<boolean> => {
        const hasUserAccepted: boolean = await get(BRITO_COOKIES_ACCEPTANCE);
        setUserAcceptance(hasUserAccepted);
        return hasUserAccepted;
    }, []);
    const handleAcceptCookies = useCallback(async () => {
        await set(BRITO_COOKIES_ACCEPTANCE, true);
        setUserAcceptance(true);
    }, []);
    const handleRejectCookies = useCallback(async () => {
        await set(BRITO_COOKIES_ACCEPTANCE, false);
        setUserAcceptance(false);
    }, []);

    useEffect(() => {
        getUserAcceptance()
            .then(hasUserAccepted => {
                if (hasUserAccepted !== undefined && hasUserAccepted) {
                    ReactGA.initialize('UA-179714982-1');
                    ReactGA.pageview(`${document.location.pathname}${document.location.hash || ''}`);
                }
            })
            // eslint-disable-next-line no-console
            .catch(err => console.error('Something went wrong', err));
    }, [getUserAcceptance, userAcceptance]);

    if (userAcceptance !== undefined) {
        return null;
    }

    return (
        <CookiesContainer>
            <MessageContainer>
                <CookiesMessage>This website uses cookies that store browsing data for analytical purposes only.</CookiesMessage>
                <CookiesLink href='https://www.cookiesandyou.com' rel='noopener' target='_blank'>
                    Learn more about cookies
                </CookiesLink>
            </MessageContainer>
            <OptionsContainer>
                <CookiesLink onClick={handleRejectCookies} href='#'>
                    No, I don&apos;t want it
                </CookiesLink>
                <Button onClick={handleAcceptCookies} dark={false}>
                    Got it!
                </Button>
            </OptionsContainer>
        </CookiesContainer>
    );
};

export default Cookies;
