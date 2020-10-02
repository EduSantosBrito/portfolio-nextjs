import React from 'react';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Header from '@components/Header';

const Home: React.FC = () => {
    return (
        <div className='container'>
            <Head>
                <title>Brito Portfolio</title>
            </Head>

            <main>
                <Navbar />
                <Header />
                <h1 id='title'>Soon</h1>
            </main>
        </div>
    );
};

export default Home;
