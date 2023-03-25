import { useEffect, useState } from 'react';

const useMenus = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('https://tikfood-server-crescentpartha.vercel.app/menu')
            .then(res => res.json())
            .then(data => setMenus(data));
    }, [menus]);

    return [menus, setMenus];
}

export default useMenus;