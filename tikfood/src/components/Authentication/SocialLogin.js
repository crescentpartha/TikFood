import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const SocialLogin = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let signInError;
    if (gError) {
        signInError = <p className='text-red-500'><small>{gError?.message}</small></p>
    }

    if (gLoading) {
        return <Loading></Loading>
    }

    if (gUser) {
        console.log(gUser);
        navigate('/');
    }

    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-sm w-full"
            >Continue with Google</button>
            {signInError}
            <div className="divider text-gray-400 mt-4 mb-1">OR</div>
        </div>
    );
};

export default SocialLogin;