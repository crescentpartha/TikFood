import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='flex my-5 justify-center items-center'>
            <div className="card w-96 bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign In</h2>

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

                        {/* Password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Must be 8 characters or longer'
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: 'Less than or equal to 30 characters'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                {errors.password?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                            </label>
                        </div>

                        {/* {signInError} */}
                        <input
                            className='btn w-full max-w-xs mt-3'
                            type="Submit"
                            value="Sign In"
                            readOnly
                        />
                    </form>
                    <p className='text-center'><small>New to TikFood? <Link to="/register" className='text-green-500'>Create New Account</Link></small></p>
                    <p className='text-center'><small>Forget your password? <Link to="/retrieve-password" className='text-green-500'>Reset Password</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;