import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
    return (
        <div className='container'>
            <Head>
                <title>Brito Portfolio</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <h1 id='title'>Soon</h1>
            </main>
        </div>
    );
};

export default Home;
