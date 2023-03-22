import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import banner from '../../images/banner.jpg';
import restaurant from '../../images/restaurant.jpg';

const Home = () => {
    return (
        <div className=''>
            {/* Banner Section */}
            <div className="hero min-h-screen w-fit xl:w-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-screen">
                        <h1 className="text-4xl font-normal bg-gray-800 bg-opacity-60 text-yellow-300 uppercase px-20 py-2 rounded">Taste the heritage and touch the senses</h1>
                    </div>
                </div>
            </div>

            {/* Welcome Section */}
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 px-10 items-center justify-center bg-base-200 py-20 my-2 rounded">
                <img src={restaurant} alt='Restaurant' className="w-full p-2 rounded-lg shadow-2xl" />
                <div className='px-5 md:mt-5'>
                    <h1 className="text-4xl font-normal text-red-600">Welcome</h1>
                    <p className="py-6 font-bold text-5xl uppercase">Our Story</p>
                    <p className="pt-2 mb-4 font-normal text-lg">KitFood is the best restaurant in Sylhet for Indian Cuisines! We are a complete relaxation restaurant within, with a huge variation in Indian cuisines, and a great environment for a family visit. We look forward to provide the best hospitality.</p>
                    <Link to='tel:+8801723242526'><FontAwesomeIcon icon={faPhone} className='text-xl lg:text-3xl text-gray-300 p-3 rounded-full bg-green-600' /></Link>
                    <p className="py-6 font-bold text-3xl capitalize">Book your table <br /><span className='text-blue-500'><Link to='tel:+8801723242526'>+8801723242526</Link></span></p>
                </div>
            </div>

            {/* Opening Hours */}
            <div className='px-10 py-24'>
                <h2 className='text-5xl mb-10 text-center uppercase font-semibold'>Opening hours</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 align-items-center justify-center'>
                    <div className='flex flex-col justify-center gap-4'>
                        <div className='bg-gray-200 py-8 rounded'>
                            <h2 className='text-2xl font-bold'>SAT</h2>
                            <p>12:00PM-11:00PM</p>
                        </div>
                        <div className='bg-gray-200 py-8 rounded'>
                            <h2 className='text-2xl font-bold'>SUN</h2>
                            <p>12:00PM-11:00PM</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center gap-4'>
                        <div className='bg-gray-200 py-8 rounded'>
                            <h2 className='text-2xl font-bold'>MON</h2>
                            <p>12:00PM-11:00PM</p>
                        </div>
                        <div className='bg-gray-200 py-8 rounded'>
                            <h2 className='text-2xl font-bold'>TUE</h2>
                            <p>12:00PM-11:00PM</p>
                        </div>
                        <div className='bg-gray-200 py-8 rounded'>
                            <h2 className='text-2xl font-bold'>WED</h2>
                            <p>12:00PM-11:00PM</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center gap-4'>
                        <div className='bg-gray-200 py-8 rounded'>
                            <h2 className='text-2xl font-bold'>THU</h2>
                            <p>12:00PM-11:00PM</p>
                        </div>
                        <div className='bg-gray-200 py-8 rounded'>
                            <h2 className='text-2xl font-bold'>FRI</h2>
                            <p>02:00PM-11:00PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;