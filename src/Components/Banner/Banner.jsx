import React from 'react';
import pic1 from '../../assets/pic-01.webp';
import pic2 from '../../assets/pic-02.png';
import pic3 from '../../assets/pic-03.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <div className='lg:flex justify-center items-center'>
    <div className='lg:w-1/2 px-2 space-y-2'>
        <h2 className='text-2xl font-semibold'>Future Career Plan! </h2>
        <h1 className='lg:text-6xl text-3xl font-bold'>Get Right Career Options With Scientific Career Counselling. </h1>
        <hr className='border border-gray-500' />
        <p className='text-xl'>Discover Your Talent and Passion Scientifically.</p>
        <button className='btn btn-neutral rounded-none'>Get Started</button>
    </div>
    <div className='lg:w-1/2 px-2'>
    <img
      src={pic1}
      className="w-full border border-black rounded-full" />
    </div>
    </div>
    <div className="absolute lg:left-2/4 bottom-0 flex gap-4">
      <a href="#slide4" className="btn btn-circle border border-black">❮</a>
      <a href="#slide2" className="btn btn-circle border border-black">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <div className='lg:flex justify-center items-center'>
    <div className='lg:w-1/2 px-2 space-y-2'>
        <h2 className='text-2xl font-semibold'>Future Career Plan! </h2>
        <h1 className='lg:text-6xl text-3xl font-bold'>Discover Your Career Potential with Precision and Care. </h1>
        <hr className='border border-gray-500' />
        <p className='text-xl'>Discover, Decide, and Dominate Your Career Journey.</p>
        <button className='btn btn-neutral rounded-none'>Get Started</button>
    </div>
    <div className='lg:w-1/2 px-2'>
    <img
      src={pic2}
      className="w-full border border-black rounded-full" />
    </div>
    </div>
    <div className="absolute lg:left-2/4 bottom-0 flex gap-4">
      <a href="#slide1" className="btn btn-circle border border-black">❮</a>
      <a href="#slide3" className="btn btn-circle border border-black">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <div className='lg:flex justify-center items-center'>
    <div className='lg:w-1/2 px-2 space-y-2'>
        <h2 className='text-2xl font-semibold'>Future Career Plan! </h2>
        <h1 className='lg:text-6xl text-3xl font-bold'>Navigate Your Career Path with Confidence and Science. </h1>
        <hr className='border border-gray-500' />
        <p className='text-xl'>Uncover Your True Potential and Pathway to Success.</p>
        <button className='btn btn-neutral rounded-none'>Get Started</button>
    </div>
    <div className='lg:w-1/2 px-2'>
    <img
      src={pic3}
      className="w-full border border-black rounded-full" />
    </div>
    </div>
    <div className="absolute lg:left-2/4 bottom-0 flex gap-4">
      <a href="#slide2" className="btn btn-circle border border-black">❮</a>
      <a href="#slide4" className="btn btn-circle border border-black">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;