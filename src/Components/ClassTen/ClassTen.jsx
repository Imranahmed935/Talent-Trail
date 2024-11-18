import React from 'react';
import student from '../../assets/after-10th.png'

const ClassTen = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center lg:py-32 py-10'>Why Career Counselling For class 10 Students ?</h1>
            <div className='lg:flex items-center px-2'>
                <div className='space-y-16'>
                    <div>
                        <h3 className='text-2xl'>CHOOSE THE RIGHT STREAM
                        </h3>
                        <h2 className='text-2xl font-bold'>Know about streams after 10th.
                        </h2>
                        <p>Compare your interest and aptitude in different streams</p>
                    </div>
                    <div>
                        <h3 className='text-2xl'>DON'T HAVE ANY CAREER ADVISORS</h3>
                        <h1>Class 10 is good time to get mentored. Discuss and plan your Career in more depth. Don’t let any question be left in your mind</h1>
                        
                    </div>
                    <div>
                        <h1 className='text-2xl'>EXPLORE CAREER OPTIONS</h1>
                        <h2>Know about 1000+ career options associated with each streams. Discuss and plan your career in more depth</h2>
                    </div>
                </div>
                <div className='w-7/12 ml-16'><img src={student} alt="" /></div>
                <div className='space-y-16 lg:ml-10'>
                    <div>
                        <h3 className='text-2xl'>KNOW NEW AGE CAREERS
                        </h3>
                        <h2 className='text-2xl font-bold'>Explore New Age Careers required for next few decade. Know about their expected work skills.
                        </h2>
                        <p>Compare your interest and aptitude in different streams</p>
                    </div>
                    <div>
                        <h3 className='text-2xl'>PLAN FOR ADMISSIONS</h3>
                        <h1>Learn about various colleges & institutions in India & abroad, their eligibility and admission criteria</h1>
                        
                    </div>
                    <div>
                        <h1 className='text-2xl'>BUILD AN IMPRESSIVE PROFILE</h1>
                        <h2>Build profile , resume and new age skills which will make you future ready</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassTen;