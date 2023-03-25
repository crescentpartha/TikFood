import { useEffect, useState } from 'react';

const useFindAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        // console.log(user);
        const email = user?.email;
        if (email) {
            fetch(`https://tikfood-server-crescentpartha.vercel.app/user/admin?email=${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAdmin(data.role);
                setAdminLoading(false);
            })
        }
    }, [user]);

    return [admin, adminLoading];
}

export default useFindAdmin;