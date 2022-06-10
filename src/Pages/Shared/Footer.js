import React from 'react';
import footerimg from '../../images/projitfooter.png'
import { FaLinkedin, FaGithub, FaTwitter, FaPhone } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer class="footer p-10 bg-slate-300 text-base-content">
            <div>
                <div class="avatar online">
                    <div class="w-16 rounded-full">
                        <img src={footerimg} alt='' />
                    </div>
                </div>
                <p>I am ready...</p>
            </div>
            <div className=''>
                <span className="footer-title">Join me</span>
                <div className='flex'>
                    <>
                        <FaLinkedin
                            className='cursor-pointer rounded-full w-8 h-8 mx-1  px-1  hover:bg-base-100 ease-in-out duration-300' />
                    </>
                    <>
                        <FaGithub className='cursor-pointer rounded-full w-8 h-8 mx-1 hover:bg-base-100 ease-in-out duration-300  px-1' />
                    </>
                    <>
                        <FaTwitter className='cursor-pointer  rounded-full w-8 h-8 mx-1 hover:bg-base-100 ease-in-out duration-300  px-1' />
                    </>
                    <>
                        <FaPhone className='cursor-pointer  rounded-full w-8 h-8 hover:bg-base-100 ease-in-out duration-300 mx-1 px-1' />
                    </>
                </div>
            </div>
        </footer>
    );
};

export default Footer;