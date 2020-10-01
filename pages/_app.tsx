import React from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Theme } from '@types';

const theme: Theme = {
    colors: {
        primary: {
            main: '#6EA9EE',
            dark: '#42658F',
            darker: '#2C445F',
        },
        secondary: '#F89C5A',
        typography: {
            main: '#56595E',
            dark: '#323942',
            darker: '#1D2228',
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
                    }
                    html,
                    body,
                    div#__next {
                        padding: 0;
                        margin: 0;
                        width: 100%;
                        height: 100%;
                        font-family: 'Poppins', sans-serif;
                    }
                `}
            </style>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
