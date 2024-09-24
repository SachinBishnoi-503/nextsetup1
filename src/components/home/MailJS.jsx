"use client"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const MailJs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_38bfhnp', 'template_wsomz0m', form.current, {
                publicKey: 'fsaolUX62OMF3XjO6',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='flex flex-col '>
            <form className='flex-col flex justify-center items-center' ref={form} onSubmit={sendEmail}>
                <div className='flex gap-[12px]'>
                    <label className='text-red-700 font-extrabold text-base p-[16px_50px_] border-[2px] hover:text-white duration-300 ease-linear  hover:bg-red-700 rounded-xl border-red-600'>Name :</label>
                    <input className='border-2 p-[16px_50px] border-red-700 bg-transparent' type="text" name="user_name"/>
                </div>
                <div className='flex gap-[12px] mt-5'>
                    <label className='text-red-700 font-extrabold text-base p-[16px_50px_] border-[2px] rounded-xl hover:text-white duration-300 ease-linear  hover:bg-red-700 border-red-600'>Email</label>
                    <input className='border-2 p-[16px_50px] border-red-700 bg-transparent' type="email" name="user_email" />
                </div>
                <div className='flex gap-[12px] mt-5'>
                    <label className='text-red-700 font-extrabold text-base p-[16px_50px_] border-[2px] rounded-xl hover:text-white duration-300 ease-linear  hover:bg-red-700 border-red-600'>Password</label>
                    <input className='border-2 p-[16px_50px] border-red-700 bg-transparent hover:border-red-400' type="password" name="Your Password" />
                </div>

                <div className='flex gap-[12px] mt-5'>
                    <label className='text-red-700 font-extrabold text-base p-[16px_50px_] border-[2px] rounded-xl border-red-600  hover:text-white duration-300 ease-linear  hover:bg-red-700'>Message</label>
                    <textarea className='border-2 p-[16px_50px] border-red-700 bg-transparent' name="message" />
                </div>
                
                <input type="submit" value="Send" className='border-4 p-[16px_50px] border-blue-700 hover:text-white hover:bg-blue-700 duration-300 ease-linear rounded-md mt-[80px]'/>
            </form>
        </div>
    );
};
export default MailJs