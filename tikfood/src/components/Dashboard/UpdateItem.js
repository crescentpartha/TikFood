import React from 'react';

const UpdateItem = ({ menu, setMenuItem, setMenuItemDelete }) => {
    const { name, price, availability, img } = menu;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">${price}</div>
                        <div>
                            {
                                availability === "true"
                                    ? <div className="text-sm opacity-50">Available</div>
                                    : <div className="text-sm opacity-50 text-red-500">Not Available</div>
                            }
                        </div>
                    </div>
                </div>
            </td>
            {/* The button to open modal */}
            <td><label
                htmlFor="update-modal"
                className='text-blue-400 font-normal hover:cursor-pointer'
                onClick={() => setMenuItem(menu)}
            >Update</label></td>
            <td><label
                htmlFor="delete-modal"
                className='text-blue-400 font-normal hover:cursor-pointer'
                onClick={() => setMenuItemDelete(menu)}
            >Delete</label></td>
        </tr>
    );
};

export default UpdateItem;