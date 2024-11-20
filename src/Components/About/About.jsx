import React from 'react';
import { FaUserGraduate } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";


const About = () => {
    return (
       <>
        <div className='lg:border'>
           <h1 className='text-4xl font-bold text-center py-10 underline'>Who are we ?</h1>
           <div className='lg:w-8/12 mx-auto'>
            <p className='text-2xl text-center'>We are focused on providing career counselling and guidance services to students of classes 9th, 10th, 11th, 12th apart from providing 360 degree guidance to undergraduates and college students. We also help Private Schools, Non-Profits, Governments and CSRs in improving education by imparting the following services.</p>
           </div>
           <h1 className='text-4xl font-bold text-center py-10 underline'>Why Choose Us</h1>

           <div className='lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2'>
            <div className='space-y-2 bg-stone-200 p-4 rounded'>
                <p className='text-4xl'><FaUserGraduate/></p>
                <p className='font-bold'>80000+</p>
                <p className='text-2xl'>Career Counselling</p>
            </div>
            <div className='space-y-2 bg-stone-200 p-4 rounded'>
                <p className='text-4xl'><IoIosCheckmarkCircle /></p>
                <p className='font-bold'>1800+</p>
                <p className='text-2xl'>Career Counselors</p>
            </div>
            <div className='space-y-2 bg-stone-200 p-4 rounded'>
                <p className='text-4xl'><IoLocationSharp/></p>
                <p className='font-bold'>Across Bangladesh</p>
                <p className='text-2xl'>12+ Cities</p>
            </div>
           
           </div>
           <p className='text-2xl lg:w-8/12 mx-auto text-center py-6'>Our mission is, to have more than 10,000+ professionally trained career counsellors in across bangladesh by 2025.</p>
        </div>
       </>
    );
};

export default About;