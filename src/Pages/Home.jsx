import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';

const Home = () => {
    return (
        <div>
           <nav className='lg:w-9/12 mx-auto py-6'>
             <Navbar/>
           </nav>
            <section className='lg:w-9/12 mx-auto'>
                <Banner/>
            </section>
        </div>
    );
};

export default Home;