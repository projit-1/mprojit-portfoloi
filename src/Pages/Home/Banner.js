import React from 'react';
import banner01 from '../../images/banner01.jpg'
import banner02 from '../../images/banner02.jpg'
import banner03 from '../../images/banner03.jpg'
import banner04 from '../../images/banner04.jpg'
import banner05 from '../../images/banner05.jpg'

const Banner = () => {
    return (
        <div class="carousel ">
            <div class="carousel-item">
                <img src={banner01} alt="banner01" />
            </div>

            <div class="carousel-item">
                <img src={banner02} alt="banner02" />
            </div>

            <div class="carousel-item">
                <img src={banner03} alt="banner03" />
            </div>

            <div class="carousel-item">
                <img src={banner04} alt="banner04" />
            </div>

            <div class="carousel-item">
                <img src={banner05} alt="banner05" />
            </div>


        </div>
    );
};

export default Banner;