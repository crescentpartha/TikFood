import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import restaurent_book from '../../images/reservation/restaurant_book.jpg';
import photo1 from '../../images/reservation/1.jpg';
import photo2 from '../../images/reservation/2.jpg';
import photo3 from '../../images/reservation/3.jpg';
import photo4 from '../../images/reservation/4.jpg';
import PageTitle from '../Shared/PageTitle';

const Reservation = () => {
    return (
        <div className='mt-10 px-5 md:px-20'>
            <PageTitle title="Reservation"></PageTitle>

            <h2 className='text-5xl mt-5 mb-8 text-center'>Reservation</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center justify-center bg-base-200 py-10 my-2 rounded">
                <img src={restaurent_book} alt='Reserve your seat' className="w-full p-2 rounded-lg shadow-2xl" />
                <div className='px-5 md:mt-5'>
                    <h1 className="text-4xl font-semibold text-red-500">Welcome</h1>
                    <p className="py-6 font-semibold text-2xl xl:text-4xl">A Place of Tasty Food with Sylheti Styles</p>
                    <Link to='tel:+8801723242526'><FontAwesomeIcon icon={faPhone} className='text-xl lg:text-3xl text-gray-300 p-3 lg:p-4 rounded-full bg-green-600' /></Link>
                    <p className="py-6 font-semibold text-2xl xl:text-4xl">Book a table at Our Restaurant simply Call us on <span className='text-blue-500'><Link to='tel:+8801723242526'>+8801723242526</Link></span></p>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-5 justify-items-center'>
                <img className='w-max-96 h-60 h-min-60 rounded' src={photo1} alt="Restaurant" />
                <img className='w-max-96 h-60 h-min-60 rounded' src={photo2} alt="Restaurant" />
                <img className='w-max-96 h-60 h-min-60 rounded' src={photo3} alt="Restaurant" />
                <img className='w-max-96 h-60 h-min-60 rounded' src={photo4} alt="Restaurant" />
            </div>
        </div>
    );
};

export default Reservation;