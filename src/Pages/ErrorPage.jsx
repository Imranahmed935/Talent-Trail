import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-96'>
            <h1 className='text-4xl text-red-600'>Ops, Page Not Found.</h1>
            <h2 className='text-2xl font-bold'>404 Error</h2>
            <Link to={'/'}><button className='btn btn-neutral'>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;