import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Details = () => {
  const data = useLoaderData()
  const {id} = useParams()
  const IdNumber = parseInt(id)
  const dataValue = data.find(item => item.id === IdNumber)
  const {image, serviceName, duration, counselor,description, category, rating, pricing } = dataValue;

  
    return (
        <div>
            <nav className='lg:w-9/12 mx-auto py-6'>
             <Navbar/>
           </nav>
<div className="card p-2 lg:w-9/12 mx-auto">
  <figure>
    <img
      src={image} 
      className='lg:w-1/2 w-full h-60'
      />
  </figure>
  <div className='space-y-2 lg:w-1/2 w-full mt-4 lg:ml-[356px]'>
    <p className="text-2xl font-bold">
     {serviceName}
    </p>
    <p><strong>category</strong>: {category}</p>
    <p><strong>description</strong>: {description}</p>
    <p><strong>duration</strong>: {duration}</p>
    <p><strong>counselor</strong>: {counselor}</p>
    <p><strong>Price</strong>: {pricing}</p>
    <p><strong>rating</strong>: {rating}</p>
    <hr />
  </div>
</div>
<div className='lg:w-1/2 mx-auto lg:py-24'>
    <h1 className='text-center text-3xl font-bold'>How was you Experience?</h1>
    <div className='flex flex-col w-full '>
      <input className='bg-slate-500' type="text" placeholder='Experience..' />
      <button>Comment</button>
    </div>
  </div>
 </div>
    );
};

export default Details;