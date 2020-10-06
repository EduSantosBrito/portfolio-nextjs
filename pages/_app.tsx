import React from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Theme } from '@types';
import Head from 'next/head';

const theme: Theme = {
    logo: {
        dark: '/logo-dark.svg',
        white: '/logo-white.svg',
    },
    colors: {
        primary: {
            main: '#6EA9EE',
            dark: '#42658F',
            darker: '#2C445F',
        },
        secondary: { main: '#F89C5A', dark: '#DF8C51' },
        typography: {
            main: '#959AA1',
            dark: '#56595E',
            darker: '#323942',
        },
        background: '#1D2228',
        white: '#FFFFFE',
    },
    breakpoints: {
        xs: '480px',
        sm: '600px',
        md: '801px',
        lg: '1025px',
        xl: '1281px',
        sl: '1441px',
    },
    fontSizes: {
        small: '1rem',
        default: '1.5rem',
        large: '2rem',
        extraLarge: '3rem',
    },
};

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <style global jsx>
                {`
                    * {
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                        z-index: 1;
                    }
                    html,
                    body,
                    div#__next {
                        padding: 0;
                        margin: 0;
                        width: 100%;
                        height: 100%;
                        font-family: 'Poppins', sans-serif;
                        background-color: ${theme.colors.background};
                    }
                    html {
                        max-width: 1440px;
                        margin: 0 auto;
                        font-size: 12px;
                        scroll-behavior: smooth;
                    }
                    @media (min-width: ${theme.breakpoints.md}) {
                        html {
                            font-size: 13px;
                        }
                    }
                    @media (min-width: ${theme.breakpoints.lg}) {
                        html {
                            font-size: 16px;
                        }
                    }
                `}
            </style>
            <Head>
                <title>Brito - Web developer</title>
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
