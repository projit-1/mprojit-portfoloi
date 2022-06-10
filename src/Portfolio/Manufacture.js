import React from 'react';
import img1 from '../images/manufac1.png'
import img2 from '../images/manufac2.png'
import img3 from '../images/manufac3.png'


const Manufacture = () => {
    return (
        <div className='my-5 mx-10'>
            <h2 className='text-2xl text-center my-2'>NS Motors Bangladesh Ltd.</h2>
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
                        • This manufacturing website where users can create orders and Admin can add a user as an admin to add/remove products, can manage all orders.
                    </p>
                    <p className='my-2'>
                        • Login and sign up to ensure authorized users can order products on this site.
                    </p>
                    <p className='my-2'>
                        • Technology Used:
                        HTML, CSS, tailwind, daisyUI, React.js, React Router, Firebase. Express, MongoDB, JWT.
                    </p>
                </div>

                <div className="my-2 text-center text-xl">
                    <p className='my-2 text-lg font-bold'>Links</p>
                    <a href="  https://ns-motors-bangladesh-ltd.web.app/"><p className='my-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>LiveSiteLink </p></a>
                    <a href="https://github.com/projit-1/projects-manufacturer-client"> <p className='my-2 cursor-pointer hover:scale-105 ease-in-out duration-300'> FrontendCode</p></a>
                    <a href="https://github.com/projit-1/projects-manufacturer-server"> <p className='my-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>BackendCode</p></a>

                </div>
            </div>
        </div>


    );
};

export default Manufacture;