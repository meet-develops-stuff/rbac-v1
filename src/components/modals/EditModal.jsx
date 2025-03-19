import { X } from 'lucide-react';
import React, { useState, useEffect } from "react";

const EditModal = ({ department, isOpen, onClose, onSubmit }) => {

    const [departmentData, setDepartmentData] = useState({
        name: "",
        id: "",
        description: "",
        manager: "",
        accessLevel: "",
        permissions: []
    });

     // Initialize form data when department prop changes
     useEffect(() => {
        if (department) {
            setDepartmentData({
                name: department.name || "",
                id: department.id || "",
                description: department.description || "",
                manager: department.manager || "",
                accessLevel: department.accessLevel || "",
                permissions: department.permissions || []
            });
        }
    }, [department]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartmentData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create updated department object
        const updatedDepartment = {
            ...department,
            ...departmentData,
            lastEdited: new Date().toLocaleDateString() // Update the edit timestamp
        };

        onSubmit(updatedDepartment);
        onClose();
    };


    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                    <div className="flex justify-between items-center border-b p-4">
                        <h3 className="font-semibold text-lg">Edit Department</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <X />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-4">
                       

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department-name">
                                Department Name
                            </label>
                            <input
                                id="department-name"
                                name="name"
                                value={departmentData.name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="manager-name">
                                Manager
                            </label>
                            <input
                                id="manager-name"
                                name="manager"
                                value={departmentData.manager}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={departmentData.description}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                rows="3"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accessLevel">
                                Access Level
                            </label>
                            <input
                                id="accessLevel"
                                name="accessLevel"
                                value={departmentData.accessLevel}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={onClose}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditModal