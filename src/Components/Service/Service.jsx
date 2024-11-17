import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {image, serviceName, id, rating, category, pricing, counselor} = service;
    return (
    <div className="card border border-black p-2 ">
  <figure>
    <img
      src={image} 
      className='w-full h-60'
      />
  </figure>
  <div className='space-y-2 mt-4'>
    <h2 className="card-title">
     {serviceName}
    </h2>
    <p>category:{category}</p>
    <p>counselor: {counselor}</p>
    <p>Price: {pricing}</p>
    <p>rating: {rating}</p>
    <Link to={`/details/${id}`} className=' bg-gray-300 px-4 rounded-lg'>Learn more</Link>
  </div>
   
</div>
    );
};

export default Service;