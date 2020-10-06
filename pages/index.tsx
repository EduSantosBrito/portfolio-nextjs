import React from 'react';
import Navbar from '@components/Navbar';
import Header from '@components/Header';
import Languages from '@components/Languages';
import Experiences from '@components/Experiences';
import Showcase from '@components/Showcase';
import HireMe from '@components/HireMe';
import Footer from '@components/Footer';
import Cookies from '@components/Cookies';

const Home: React.FC = () => {
    return (
        <div className='container'>
            <main>
                <Navbar />
                <Header />
                <Languages />
                <Experiences />
                <Showcase />
                <HireMe />
                <Footer />
            </main>
            <Cookies />
        </div>
    );
};

export default Home;
