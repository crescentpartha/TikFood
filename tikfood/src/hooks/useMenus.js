import { useEffect, useState } from 'react';

const useMenus = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => setMenus(data));
    }, [menus]);

    return [menus, setMenus];
}

export default useMenus;