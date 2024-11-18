import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useRef, useState } from 'react';

const Details = () => {
  const [comments, setComments] = useState([]); 
  const commentRef = useRef();
  const data = useLoaderData();
  const { id } = useParams();
  const IdNumber = parseInt(id);
  const dataValue = data.find(item => item.id === IdNumber);
  const { image, serviceName, duration, counselor, description, category, rating, pricing } = dataValue;

  const handleComment = () => {
    const newComment = commentRef.current.value.trim();
    if (newComment) {
      setComments([...comments, newComment]); 
      commentRef.current.value = '';
    }
  };

  return (
    <div>
      <nav className='lg:w-9/12 mx-auto py-6'>
        <Navbar />
      </nav>
      <div className="card p-2 lg:w-9/12 mx-auto">
        <figure>
          <img src={image} className='lg:w-1/2 w-full h-60' alt="Service" />
        </figure>
        <div className='space-y-2 lg:w-1/2 w-full mt-4 lg:ml-[356px]'>
          <p className="text-2xl font-bold">{serviceName}</p>
          <p><strong>Category</strong>: {category}</p>
          <p><strong>Description</strong>: {description}</p>
          <p><strong>Duration</strong>: {duration}</p>
          <p><strong>Counselor</strong>: {counselor}</p>
          <p><strong>Price</strong>: {pricing}</p>
          <p><strong>Rating</strong>: {rating}</p>
          <hr />
        </div>
      </div>
      <div className='lg:w-1/2 mx-auto lg:py-24'>
        <h1 className='text-center text-3xl font-bold'>How was your experience?</h1>
        <div className='py-6 ml-32'>
          <input 
            ref={commentRef} 
            className='bg-gray-200 border border-black outline-none p-2 w-3/4' 
            type="text" 
            placeholder='Share your experience...' 
          />
          <button 
            onClick={handleComment} 
            className='btn btn-neutral rounded-none'>
            Comment
          </button>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-bold'>User Comments:</h2>
          <ul className='list-disc ml-12'>
            {comments.map((comment, index) => (
              <li key={index} className='mt-2'>{comment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
