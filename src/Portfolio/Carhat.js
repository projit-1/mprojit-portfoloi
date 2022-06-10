import React from 'react';
import img1 from '../images/carhat01.png'
import img2 from '../images/carhat02.png'
import img3 from '../images/carhat03.png'
const Carhat = () => {
    return (
        <div className='my-5 mx-10'>
            <h2 className='text-2xl text-center my-2'>NS Electronics Khulna</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <img className='cursor-pointer hover:scale-105 ease-in-out duration-300' src={img1} alt="" />
                <img className='cursor-pointer hover:scale-105 ease-in-out duration-300' src={img2} alt="" />
                <img className='cursor-pointer hover:scale-105 ease-in-out duration-300' src={img3} alt="" />
            </div>
            <div className="detail grid  grid-cols-1 lg:grid-cols-2 gap-5 my-5">
                <div className="description my-2">
                    <p className='my-2'>
                        • This site is designed for reviewers on using cars with star ratings.
                    </p>
                    <p className='my-2'>
                        • It is only frontend base site.
                    </p>
                    <p className='my-2'>
                        • Technology Used:
                        HTML, CSS, Bootstrap, React, React Router, and Vanilla JS.
                    </p>
                </div>
                <div className="my-2 text-center text-xl">
                    <p className='my-2 text-lg font-bold' >Links</p>
                    <a href="https://assignment-09-khulna-car-hat-product-review.netlify.app/home"><p className='my-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>LiveSiteLink </p></a>
                    <p className='my-2 cursor-pointer hover:scale-105 ease-in-out duration-300'> FrontendCode</p>
                </div>
            </div>
        </div>
    );
};

export default Carhat;