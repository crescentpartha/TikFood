import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const MakeMenu = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imageStorageAPIKey = 'd0f9b89e42ed8d95bb102c26dd41f8b3';

    const onSubmit = (data) => {
        // console.log(data);

        /* Upload image to imgbb server and get image url */
        const image = data.image[0];
        // console.log(image);
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageAPIKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log('imgbb', result);
                if (result.success) {
                    const img = result.data.url;
                    const menu = {
                        name: data.name,
                        price: data.price,
                        availability: data.availability,
                        img: img
                    }
                    /* Send to my database | Save new Menu Info in the database through server */

                    // POST a new Menu item from client-side to server-side
                    const serverURL = `https://tikfood-server-crescentpartha.vercel.app/menu`;
                    fetch(serverURL, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(menu)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log(inserted);
                            if (inserted.insertedId) {
                                toast('Successfully added a new menu item!');
                                navigate('/dashboard');
                            }
                            else {
                                toast.error('Failed to create a new menu item!');
                            }
                        })
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-gray-500 mb-4 text-left'>Make a new menu item!</h2>
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
                    <select {...register("availability")} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
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