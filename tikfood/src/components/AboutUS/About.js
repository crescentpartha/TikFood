import React from 'react';
import { Link } from 'react-router-dom';
import restaurant from '../../images/restaurant.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 px-5 py-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={restaurant} alt='Restaurant' className="max-w-xl rounded-lg shadow-2xl" />
                <div className='px-5'>
                    <h1 className="text-5xl font-bold">TikFood</h1>
                    <hr className='border-2 border-gray-300 w-60 mt-4 mx-auto' />
                    <p className="py-6">TikFood is the best restaurant in Sylhet for Indian Cuisines! We are a complete relaxation restaurant within, with a huge variation in Indian cuisines, and a great environment for a family visit. We look forward to provide the best hospitality.</p>
                    <address>
                        <p className='font-semibold uppercase'>Location</p>
                        <p>Subid Bazar, Sylhet 3100 Sylhet, Sylhet Division, Bangladesh</p>
                        <p>Call Us: <span className='text-blue-600'><Link to='tel:+8801723242526'>+8801723242526</Link></span></p>
                        <p>E-mail: <span className='text-blue-600'><Link to='mailto:tikfoodbd@gmail.com'>tikfoodbd@gmail.com</Link></span></p>
                    </address>
                </div>
            </div>
        </div>
    );
};

export default About;