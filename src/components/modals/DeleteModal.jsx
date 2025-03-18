import React from 'react'

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-lg font-semibold">Confirm Deletion</h2>
                <p className="text-gray-600 mt-2">Are you sure you want to delete this department?</p>
                <div className="mt-4 flex justify-end gap-2">
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        onClick={onConfirm}
                    >
                        Delete
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;