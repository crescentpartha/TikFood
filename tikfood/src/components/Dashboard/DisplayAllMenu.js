import React from 'react';
import useMenus from '../../hooks/useMenus';
import DisplayItem from './DisplayItem';

const DisplayAllMenu = () => {
    const [menus] = useMenus();
    // console.log(menus);
    return (
        <div>
            <h2 className='text-2xl font-bold text-gray-500 mb-4 text-left'>Display all menu</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center'>
                {
                    menus.map(menu => <DisplayItem
                        key={menu._id}
                        menu={menu}
                    ></DisplayItem>)
                }
            </div>
        </div>
    );
};

export default DisplayAllMenu;