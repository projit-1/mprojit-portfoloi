import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../Shared/Button';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e3rcv7l', 'template_jhrm1oo', form.current, '4vZ6bs3RR_RFIFfpV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className='mx-24 items-center '>
            <h2 className='text-2xl text-center my-5'>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div class="form-control ">
                    <label>Name</label>
                    <input className=' input ' type='text' name="name" placeholder='your name'></input>
                    <label>Email</label>
                    <input className=' input ' type='email' name="user_email" placeholder='type your email'></input>
                    <label>Message</label>
                    <textarea className=' input ' type='text' name="message" placeholder='type your message' id='' rows={6}></textarea>
                </div>
                <div className='flex justify-center my-3'>
                    <Button>Submit</Button>
                </div>
            </form>


        </div>
    );
};

export default Contact;
