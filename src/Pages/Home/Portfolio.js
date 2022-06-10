import React from 'react';
import Button from '../Shared/Button';
import image01 from '../../images/motorsmanufac.jpg'
import image02 from '../../images/warhose.jpg'
import image03 from '../../images/carhut.jpg'



import { NavLink } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <h2 className='text-3xl text-center my-2 text-blue-500'>My Projects</h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div class="bg-base-200 ">
                    <figure> <img src={image01} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">NS Motors Bangladesh Ltd.</h2>
                        <p>This manufacturing website where users can create orders and Admin can add a user as an admin to add/remove products, can manage all orders.</p>
                        <div className=" flex justify-center items-center">
                            <NavLink to='/manufacture'> <Button>Details</Button></NavLink>
                        </div>
                    </div>
                </div>
                <div class="bg-base-100 ">
                    <figure> <img src={image02} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">NS Electronics Khulna</h2>
                        <p>A complete inventory management website with Google login and email password login feature. Login and sign up to ensure authorized users can order products on this site.</p>
                        <div className=" flex justify-center items-center">
                            <NavLink to='/warhouse'> <Button>Details</Button></NavLink>
                        </div>
                    </div>
                </div>
                <div class="bg-base-100 ">
                    <figure> <img src={image03} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Khulna Car Hat</h2>
                        <p>This site is designed for reviewers on using cars with star ratings. It is only frontend base site. Technologies are, Bootstrap, React, React Router, and Vanilla JS.</p>
                        <div className=" flex justify-center items-center">
                            <NavLink to='/carhat'> <Button>Details</Button></NavLink>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Portfolio;