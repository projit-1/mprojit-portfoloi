import React from 'react';
import img1 from '../images/warhouse11.png'
import img2 from '../images/warhouse12 .png'
import img3 from '../images/warhouse13 .png'
const Warehouse = () => {
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
                    <p className='my-2 text-lg text-center font-bold'>
                        Projects Details
                    </p>
                    <p className='my-2'>
                        • A complete inventory management website with Google login and email password login feature. Login and sign up to ensure authorized users can order products on this site.
                    </p>
                    <p className='my-2'>
                        • There is a managed inventory route where users can add, remove and manage any product.
                    </p>
                    <p className='my-2'>
                        • Technology Used:
                        HTML, CSS, React Bootstrap, React.js, React Router, Firebase. Express, Mongo, JWT.
                    </p>
                </div>

                <div className="my-2 text-center text-xl">
                    <p className='my-2 text-lg font-bold'>Links</p>
                    <a href="  https://ns-electronics-khulna.web.app/">  <p className='my-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>LiveSiteLink </p></a>
                    <a href="https://github.com/projit-1/projects-warhouse-client"><p className='my-2 cursor-pointer hover:scale-105 ease-in-out duration-300'> FrontendCode</p></a>
                    <a href="https://github.com/projit-1/projects-warhouse-server"> <p className='my-2 cursor-pointer hover:scale-105 ease-in-out duration-300'> BackendCode</p></a>

                </div>
            </div>
        </div>
    );
};

export default Warehouse;