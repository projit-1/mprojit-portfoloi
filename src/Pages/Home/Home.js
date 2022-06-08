import React from 'react';
import Button from '../Shared/Button';
import Banner from './Banner';
import Portfolio from './Portfolio';
import Services from './Services';
import Testmonial from './Testmonial';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Portfolio></Portfolio>
            <Testmonial></Testmonial>
            <Services></Services>
            <Button>Contact us</Button>
        </div>
    );
};

export default Home;