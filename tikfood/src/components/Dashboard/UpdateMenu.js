import React from 'react';
import useMenus from '../../hooks/useMenus';
import UpdateItem from './UpdateItem';

const UpdateMenu = () => {
    const [menus] = useMenus();

    return (
        <div>
            <h2 className='text-2xl font-bold text-gray-500 mb-4 text-left'>Update a Menu</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menus.map(menu => <UpdateItem
                                key={menu._id}
                                menu={menu}
                            ></UpdateItem>)
                        }                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpdateMenu;