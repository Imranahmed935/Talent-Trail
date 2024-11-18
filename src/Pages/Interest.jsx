import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

const Interest = () => {
    return (
        <div>
            <nav className='lg:w-9/12 mx-auto py-6'>
             <Navbar/>
           </nav>
           <div className='lg:w-9/12 mx-auto px-2'> 
            <h1 className='text-5xl text-center py-10'>Interest Test</h1>
            <div className='lg:w-8/12 mx-auto space-y-4 '>
            <p className='text-2xl'>The interest-aptitude test is an ability test that measures specific competencies in multiple aspects. It contrasts the multiple skill sets and preferences present in a person. This gives an occupational profile to understand the varying facets and individual strengths and areas that need to be developed.</p>
            <p className='text-2xl'>
            Several people opt for the interest-aptitude test to understand and develop their professional path with suitable channelisation of their resources and are able to move towards pursuing happy and fulfilling careers. This in turn helps one to balance personal and social responsibilities as well.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                <div className='border border-black p-2 rounded'>
                    <h1 className='text-2xl font-bold'>Class 9 & 10 Student</h1>
                    <p className='text-2xl'>Interest test & Career guidance during your 9th & 10th class will help you discover the right career option.</p>
                </div>
                <div className='border border-black p-2 rounded'>
                    <h1 className='text-2xl font-bold'>Class 11 & 12 Student</h1>
                    <p className='text-2xl'>Interest test will help you make groundbreaking decisions in class 11th & 12th, discover your career.</p>
                </div>
                <div className='border border-black p-2 rounded'>
                    <h1 className='text-2xl font-bold'>Undergrads Students</h1>
                    <p className='text-2xl'>With the help of our Interest test be in a position of full control of your career dreams.?</p>
                </div>
            </div>
             <div>
                <div className='text-center py-6'>
                <h1 className='text-3xl font-bold'>WHY SHOULD ONE TAKE THE INTEREST-APTITUDE TEST?</h1>
                <p className='text-2xl'>The Interest-Aptitude Test has various advantages</p>
                </div>
                    <div className='space-y-2'>
                    <li>The interest-aptitude test will be able to highlight the areas of strengths and the possible developmental opportunities.</li>
                    <li>The multi-dimensional approach taps into all the aspects and helps in analysis of professional opportunities and areas that need to be developed.</li>
                    <li>The indicated developmental ability of the child also highlights aspects like logic, comprehension and reasoning.</li>
               
                    </div>
             </div>
            </div>
            
           </div>
        </div>
    );
};

export default Interest;