import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import useCreateUserToken from '../../hooks/useCreateUserToken';
import auth from '../../firebase.init';
import Loading from './Loading';

const SocialLogin = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [userInfo, setUserInfo] = useState(null);
    const [token] = useCreateUserToken([gUser, userInfo]);
    const navigate = useNavigate();

    let signInError;
    if (gError) {
        signInError = <p className='text-red-500'><small>{gError?.message}</small></p>
    }

    if (gLoading) {
        return <Loading></Loading>
    }

    if (gUser) {
        // console.log(gUser);
        navigate('/');
    }

    const handleSignInWithGoogle = () => {
        setUserInfo({ role: "user" });
        signInWithGoogle();
    }

    return (
        <div>
            <button
                onClick={() => handleSignInWithGoogle()}
                className="btn btn-sm w-full"
            >Continue with Google</button>
            {signInError}
            <div className="divider text-gray-400 mt-4 mb-1">OR</div>
        </div>
    );
};

export default SocialLogin;