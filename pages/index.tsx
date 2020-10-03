import React from 'react';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Header from '@components/Header';
import Languages from '@components/Languages';

const Home: React.FC = () => {
    return (
        <div className='container'>
            <Head>
                <title>Brito Portfolio</title>
            </Head>

            <main>
                <Navbar />
                <Header />
                <Languages />
            </main>
        </div>
    );
};

export default Home;
