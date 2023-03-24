import React, { useState } from 'react';
import useMenus from '../../hooks/useMenus';
import DeleteMenuModal from './DeleteMenuModal';
import UpdateItem from './UpdateItem';
import UpdateMenuModal from './UpdateMenuModal';

const UpdateMenu = () => {
    const [menus] = useMenus();
    const [menuItem, setMenuItem] = useState(null);
    const [menuItemDelete, setMenuItemDelete] = useState(null);
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
                                setMenuItemDelete={setMenuItemDelete}
                            ></UpdateItem>)
                        }
                    </tbody>
                </table>
            </div>
            {
                menuItem && <UpdateMenuModal menuItem={menuItem} setMenuItem={setMenuItem}></UpdateMenuModal>
            }
            {
                menuItemDelete && <DeleteMenuModal menuItemDelete={menuItemDelete} setMenuItemDelete={setMenuItemDelete}></DeleteMenuModal>
            }
        </div>
    );
};

export default UpdateMenu;