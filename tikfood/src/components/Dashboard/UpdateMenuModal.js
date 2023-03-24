import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const UpdateMenuModal = ({ menuItem, setMenuItem }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { name, img } = menuItem;

    const onSubmit = (data) => {
        // console.log(data);

        // Update a menu item in client-side and send to the server-side
        const url = `http://localhost:5000/menu/${menuItem._id}`;
        // console.log(url, id);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log('success', result);
                toast('Product updated successfully!!!');
                setMenuItem(null);
            });
    }

    return (
        <div>
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* The button to close modal */}
                    <label
                        htmlFor="update-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => setMenuItem(null)}
                    >✕</label>

                    <h3 className="font-bold text-lg mb-3 text-gray-500">Update <span className='text-red-500'>{name}</span> menu Item!</h3>
                    <form className='border rounded p-5' onSubmit={handleSubmit(onSubmit)}>
                        {/* Image */}
                        <div className='text-center'>
                            <div className="avatar">
                                <div className="mask mask-squircle w-20 h-20">
                                    <img src={img} alt={name} />
                                </div>
                            </div>
                        </div>

                        {/* Name */}
                        <div className='text-start mb-3'>
                            <label className='font-semibold pb-2 text-gray-500' htmlFor="">Name</label> <br />
                            <input
                                style={{ border: '1px solid #d6d6d6' }}
                                className='d-block w-full px-2 py-1 rounded'
                                placeholder='Name'
                                // value={name}
                                type="text"
                                {...register("name", {
                                    required: "Name is required",
                                    maxLength: 50,
                                    pattern: {
                                        value: /^[A-Z]+((\s)?([A-Za-z])+)*$/,
                                        message: 'Name is invalid'
                                    }
                                })}
                            />
                            <p className='text-red-400'>{errors?.name?.message}</p>
                        </div>

                        {/* Price */}
                        <div className='text-start mb-3'>
                            <label className='font-semibold pb-2 text-gray-500' htmlFor="">Price</label> <br />
                            <input
                                style={{ border: '1px solid #d6d6d6' }}
                                className='w-full px-2 py-1 rounded'
                                placeholder='Price'
                                // value={price}
                                type="number"
                                {...register("price", {
                                    required: "Price is required",
                                    maxLength: 8,
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Price is invalid'
                                    }
                                })}
                            />
                            <p className='text-red-400'>{errors?.price?.message}</p>
                        </div>

                        {/* Availability */}
                        <div className='text-start mb-3'>
                            <label className='font-semibold pb-2 text-gray-500' htmlFor="">Availability</label> <br />
                            <select {...register("availability")} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>

                        {/* Update Item */}
                        <div className='grid grid-cols-2 gap-2 justify-items-center align-items-center mt-4'>
                            <div className=''>
                                <input
                                    className='btn btn-sm btn-outline btn-success'
                                    type="submit"
                                    value="Update Menu"
                                />
                            </div>
                            <div className="modal-action m-0">
                                <label
                                    htmlFor="update-modal"
                                    className="btn btn-sm btn-outline btn-success"
                                    onClick={() => setMenuItem(null)}
                                >Cancel</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateMenuModal;