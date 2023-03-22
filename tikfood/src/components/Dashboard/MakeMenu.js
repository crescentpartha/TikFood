import React from 'react';
import { useForm } from 'react-hook-form';

const MakeMenu = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-gray-500 mb-2 text-left'>Make a new menu item!</h2>
            <form className='border rounded p-5' onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className='text-start mb-3'>
                    <label className='font-semibold pb-2 text-gray-500' htmlFor="">Name</label> <br />
                    <input
                        style={{ border: '1px solid #d6d6d6' }}
                        className='d-block w-full px-2 py-1 rounded'
                        placeholder='Name'
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
                    <select {...register("specialty")} className='d-block w-full px-2 py-1 rounded'>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                
                {/* Image */}
                <div className="text-start mb-3">
                    <label className='font-semibold pb-2 text-gray-500' htmlFor="">Photo</label> <br />
                    <input
                        type="file"
                        className='w-full px-2  rounded'
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image?.message}</span>}
                    </label>
                </div>

                {/* Add Item */}
                <div>
                    <input
                        className='btn btn-sm btn-outline btn-success'
                        type="submit"
                        value="Add Menu"
                    />
                </div>
            </form>
        </div>
    );
};

export default MakeMenu;