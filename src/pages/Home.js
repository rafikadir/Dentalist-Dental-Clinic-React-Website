import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../sections/Banner/Banner';
import Emergency from '../sections/Emergency/Emergency';
import Features from '../sections/Features/Features';
import Services from '../sections/Services/Services';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Services />
            <Emergency />
            <Features />
        </>
    );
};

export default Home;