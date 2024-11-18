import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import Services from '../Components/Services/Services';
import ClassTen from '../Components/ClassTen/ClassTen';
import About from '../Components/About/About';

const Home = () => {
    return (
        <div>
           <nav className='lg:w-9/12 mx-auto py-6'>
             <Navbar/>
           </nav>
            <section className='lg:w-9/12 mx-auto'>
                <Banner/>
            </section>
            <main className='lg:w-9/12 mx-auto'>
                <Services/>
                <ClassTen/>
                <About/>
            </main>

        </div>
    );
};

export default Home;