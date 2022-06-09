import React from 'react';

const Resume = () => {
    return (
        <div className='mx-10'>
            <h2 className='text-center my-5'>Resume</h2>
            <div className="grid grid-cols-2 justify-items-center my-2 ">
                <div>
                    <h2 className='text-2xl'>PROJIT MONDOL</h2>
                    <h4 className='text-xl'>Junior Web Developer</h4>
                </div>
                <div>
                    <p>+8801400960620</p>
                    <p>GitHub | LinkedIn</p>
                    <p>projitmondol@gmail.com</p>
                    <p>Satkhira, Bangladesh</p>
                </div>
            </div>
            <div className="about my-2">
                <h2 className='text-xl underline'>About Me</h2>
                <p className='text-justify'>
                    This is Projit Mondol junior web developer with the ability to learn and collaborate in rapidly changing environments and compositions. I have been learning for more than 6 months including 3+ successful projects under Web Development Course with Jhankar Mahbub. I am always eager to tackle web development challenges to achieve lasting impacts on user experience.
                </p>
            </div>
            <div className="skills my-2">
                <h2 className='text-xl underline'>Skill Highlights</h2>
                <div className='flex my-1mx-1'> <p className='mx-1'> Expertise:</p>
                    <p>  HTML5, CSS3, Bootstrap5, Tailwind CSS, DaisyUI, JavaScript, React, React Hook
                        Form, and Context API.</p>
                </div>
                <div className='flex my-1mx-1'>
                    <p className='mx-1'>Comfortable:</p>
                    <p> Node.js, MongoDB, Firebase, JWT, and Express.js.</p>
                </div>
                <div className='flex my-1mx-1'>
                    <p className='mx-1'>Familiar:</p>
                    <p> React Native, Next.JS, Redux.</p>
                </div>
                <div className='flex my-1mx-1'>
                    <p className='mx-1'>Tools:</p>
                    <p>GitHub, VS code, Chrome Dev Tools, Heroku, Netlify, and Figma.</p>
                </div>
            </div>
            <div className="projects my-2">
                <h2 className='text-xl underline'>Projects</h2>
                <div className='my-3'>
                    <div className='flex'>
                        <h2 className='text underline mx-3'>1. NS Motors Bangladesh Ltd.</h2>
                        <h2> ||  LiveSiteLink || </h2>
                        <h2>FrontendCode || </h2>
                        <h2>BackendCode</h2>
                    </div>
                    <p>•	This manufacturing website where users can create orders and Admin can add a user as an admin to add/remove products, can manage all orders. </p>
                    <p>•	Login and sign up to ensure authorized users can order products on this site.  </p>
                    <div className='flex'>
                        <h2 className='text underline mr-2'>•	Technology Used: </h2>
                        <h2> HTML, CSS, tailwind, daisyUI, React.js, React Router, Firebase. Express, MongoDB, JWT. </h2>
                    </div>
                </div>
                <div className='my-3'>
                    <div className='flex'>
                        <h2 className='text underline mx-3'>2. NS Electronics Khulna || </h2>
                        <h2>  LiveSiteLink || </h2>
                        <h2>FrontendCode || </h2>
                        <h2>BackendCode</h2>
                    </div>
                    <p>•	A complete inventory management website with Google login and email password login feature. Login and sign up to ensure authorized users can order products on this site.  </p>
                    <p>•	There is a managed inventory route where users can add, remove and manage any product. </p>
                    <div className='flex'>
                        <h2 className='text underline mr-2'>•	Technology Used: </h2>
                        <h2> HTML, CSS, React Bootstrap, React.js, React Router, Firebase. Express, Mongo, JWT. </h2>
                    </div>
                </div>
                <div className='my-3'>
                    <div className='flex'>
                        <h2 className='text underline mx-3'>3. Khulna Car Hut </h2>
                        <h2> ||  LiveSiteLink || </h2>
                        <h2>FrontendCode </h2>

                    </div>
                    <p>•	This site is designed for reviewers on using cars with star ratings. </p>
                    <p>•	It is only frontend base site.   </p>
                    <div className='flex'>
                        <h2 className='text underline mr-2'>•	Technology Used: </h2>
                        <h2> HTML, CSS, Bootstrap, React, React Router, and Vanilla JS.  </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;