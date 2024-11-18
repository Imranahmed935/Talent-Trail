import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [Services, setServices] = useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center mt-32 px-2'>
                <h2 className='text-2xl font-semibold'>Our Services</h2>
                <h1 className='text-3xl font-bold'>Empower Your Career Journey for Greater Success</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 mt-16'>
                {
                    Services.map(service => <Service 
                        key={service.id}
                        service={service}
                        ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;