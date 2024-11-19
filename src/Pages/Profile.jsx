import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Helmet } from 'react-helmet';

const Profile = () => {
    return (
        <div>
            <Helmet>
                <title>talent trail | my profile </title>
            </Helmet>
            <nav className='lg:w-9/12 mx-auto py-6'>
            <Navbar />
            </nav>
            <div className='lg:w-9/12 mx-auto'>
                <h1>imran ahmed</h1>
            </div>
        </div>
    );
};

export default Profile;