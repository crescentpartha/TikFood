import React from 'react';

const DeleteMenuModal = ({ menuItemDelete }) => {

    const handleDelete = (id) => {
        // delete a menu item in client-side and send to the server-side
        const url = `https://tikfood-server-crescentpartha.vercel.app/menu/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deleteCount > 0) {
                    console.log('Deleted');
                }
            });
    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* The button to close modal */}
                    <label
                        htmlFor="delete-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >✕</label>

                    <h3 className="font-bold text-lg mb-3 text-gray-500">Are you sure to delete?</h3>
                    {/* Delete Confirmation */}
                    <div className='grid grid-cols-2 gap-2 justify-items-center align-items-center mt-4'>
                        <div className="modal-action m-0">
                            <label
                                htmlFor="delete-modal"
                                className="btn btn-sm btn-outline btn-success"
                                onClick={() => handleDelete(menuItemDelete?._id)}
                            >Confirm</label>
                        </div>
                        <div className="modal-action m-0">
                            <label
                                htmlFor="delete-modal"
                                className="btn btn-sm btn-outline btn-success"
                            >Cancel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteMenuModal;