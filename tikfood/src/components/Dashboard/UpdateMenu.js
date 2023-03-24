import React, { useState } from 'react';
import useMenus from '../../hooks/useMenus';
import UpdateItem from './UpdateItem';
import UpdateMenuModal from './UpdateMenuModal';

const UpdateMenu = () => {
    const [menus] = useMenus();
    const [menuItem, setMenuItem] = useState(null);
    // console.log(menuItem);

    return (
        <div>
            <h2 className='text-2xl font-bold text-gray-500 mb-4 text-left'>Update a Menu</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Menu Items</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menus.map(menu => <UpdateItem
                                key={menu._id}
                                menu={menu}
                                setMenuItem={setMenuItem}
                            ></UpdateItem>)
                        }
                    </tbody>
                </table>
            </div>
            {
                menuItem && <UpdateMenuModal menuItem={menuItem} setMenuItem={setMenuItem}></UpdateMenuModal>
            }
        </div>
    );
};

export default UpdateMenu;