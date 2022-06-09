import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <div className='flex justify-center'>
                <NavLink to='/contact'> <Button>Contact us</Button></NavLink>
            </div>
        </div>
    );
};

export default Home;