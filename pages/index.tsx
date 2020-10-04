import React from 'react';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Header from '@components/Header';
import Languages from '@components/Languages';
import Experiences from '@components/Experiences';

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
                <Experiences />
            </main>
        </div>
    );
};

export default Home;
