import React from 'react';
import img1 from '../images/manufac1.png'
import img2 from '../images/manufac2 .png'
import img3 from '../images/manufac3 .png'


const Manufacture = () => {
    return (
        <div className='my-5 mx-10'>
            <h2 className='text-2xl text-center my-2'>NS Motors Bangladesh Ltd.</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <img className='cursor-pointer hover:scale-105 ease-in-out duration-300' src={img1} alt="" />
                <img className='cursor-pointer hover:scale-105 ease-in-out duration-300' src={img2} alt="" />
                <img className='cursor-pointer hover:scale-105 ease-in-out duration-300' src={img3} alt="" />

            </div>
        </div>


    );
};

export default Manufacture;