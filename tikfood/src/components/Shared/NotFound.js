import React from 'react';

const NotFound = () => {
    return (
        <div className='py-20'>
            <h1 className='font-bold text-9xl text-slate-700'>404</h1>
            <h3 className='font-bold text-4xl text-slate-600'>Not Found</h3> <br />
            <p className='font-semibold text-md'>The resource requested could not be found on this server!</p>
        </div>
    );
};

export default NotFound;