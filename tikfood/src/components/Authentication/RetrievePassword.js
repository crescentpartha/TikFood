import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const RetrievePassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='flex my-5 justify-center items-center'>
            <div className="card w-96 bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Retrieve Password</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Email */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^[a-z0-9+_.-]+@[a-z]+\.[a-z]{3}$/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                            </label>
                        </div>

                        {/* {signInError} */}
                        <input
                            className='btn w-full max-w-xs mt-3'
                            type="Submit"
                            value="Reset"
                            readOnly
                        />
                    </form>
                    <p className='text-center'><small>New to TikFood? <Link to="/register" className='text-green-500'>Create New Account</Link></small></p>
                    <p className='text-center'><small>Already have an account? <Link to="/login" className='text-green-500'>Please Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default RetrievePassword;