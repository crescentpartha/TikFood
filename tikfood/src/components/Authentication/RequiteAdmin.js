import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useFindAdmin from '../../hooks/useFindAdmin';
import auth from '../../firebase.init';
import Loading from '../Authentication/Loading';
import { signOut } from '@firebase/auth';

const RequiteAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useFindAdmin(user);
    const location = useLocation();

    // console.log(admin);

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || admin !== "admin") {
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequiteAdmin;