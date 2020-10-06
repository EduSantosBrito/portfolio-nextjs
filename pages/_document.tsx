/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/*
    Apparently styled-components classes return any value in constructor, causing a bunch of 'no-unsafe' rules in eslint
    https://stackoverflow.com/questions/63315265/all-styled-components-return-any-types-styled-components
*/

import Document, { DocumentContext, Html, Main, NextScript, Head } from 'next/document';
import * as React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,800&display=swap'
                        rel='stylesheet'
                    />
                    <link rel='shortcut icon' href='/favicon.svg' />
                    <meta name='title' content='Brito - Web developer' />
                    <meta
                        name='description'
                        content="Hey, that's my website. Be free to come and see my experiences and open source projects. :)"
                    />

                    <meta property='og:type' content='website' />
                    <meta property='og:url' content='https://brito.top' />
                    <meta property='og:title' content='Brito - Web developer' />
                    <meta
                        property='og:description'
                        content="Hey, that's my website. Be free to come and see my experiences and open source projects. :)"
                    />
                    <meta property='og:image' content='/og-image.png' />

                    <meta property='twitter:card' content='summary_large_image' />
                    <meta property='twitter:url' content='https://brito.top/' />
                    <meta property='twitter:title' content='Brito - Web developer' />
                    <meta
                        property='twitter:description'
                        content="Hey, that's my website. Be free to come and see my experiences and open source projects. :)"
                    />
                    <meta property='twitter:image' content='/og-image.png' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
