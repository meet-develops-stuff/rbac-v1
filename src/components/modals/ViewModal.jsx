import React from 'react'

const ViewModal = ({ department, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold">Department Details</h2>
            <div className="text-gray-600 mt-4 space-y-2">
                <p><strong>Serial:</strong> {department.serial}</p>
                <p><strong>ID:</strong> {department.id}</p>
                <p><strong>Name:</strong> {department.name}</p>
                <p><strong>Total Members:</strong> {department.totalMembers}</p>
                <p><strong>Created At:</strong> {department.createdAt}</p>
                <p><strong>Last Edited:</strong> {department.lastEdited}</p>
                <p><strong>Description:</strong> {department.description}</p>
                <p><strong>Manager:</strong> {department.manager}</p>
                <p><strong>Access Level:</strong> {department.accessLevel || null}</p>
                <p><strong>Permissions:</strong> {department.permissions.join(', ') || null }</p>
            </div>
            <div className="mt-6 flex justify-end gap-2">
                <button
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
    )
}

export default ViewModal