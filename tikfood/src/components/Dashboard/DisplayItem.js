import React from 'react';

const DisplayItem = ({ menu }) => {
    const { name, price, availability, img } = menu;

    return (
        <div className="card min-w-56 max-w-96 min-h-80 max-h-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title text-base"><p className='font-semibold'>Food Item: <span className='text-gray-500 italic font-normal'>{name}</span></p></h2>
                <div>
                    {
                        availability === "true"
                            ? <p className='font-semibold'>Availability: <span className='text-gray-500 italic font-normal'>Available</span></p>
                            : <p className='font-semibold'>Availability: <span className='text-red-500 italic font-normal'>Not Available</span></p>
                    }
                </div>
                <p className='font-semibold'>Price: <span className='text-gray-500 italic font-normal'>${price}</span></p>
            </div>
        </div>
    );
};

export default DisplayItem;