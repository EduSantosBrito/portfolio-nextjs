import React from 'react';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Header from '@components/Header';
import Languages from '@components/Languages';
import Experiences from '@components/Experiences';
import Showcase from '@components/Showcase';
import HireMe from '@components/HireMe';

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
                <Showcase />
                <HireMe />
            </main>
        </div>
    );
};

export default Home;
