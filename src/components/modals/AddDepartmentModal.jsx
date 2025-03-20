import { ChevronDown, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DepartmentValidation from "../../components/validations/DepartmentValidation";

const AddDepartmentModal = ({ isOpen, onClose, onSubmit, departments }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            accessLevel: "", // Ensure it starts as an empty value
        },
        resolver: yupResolver(DepartmentValidation),
    });

    const handleFormSubmit = (data) => {

        const newSerial =
        departments && departments.length > 0
            ? Math.max(...departments.map((dept) => dept.serial)) + 1
            : 1;

        const newDepartment = {
            ...data,
            serial: newSerial,
            createdAt: new Date().toLocaleDateString(),
            lastEdited: new Date().toLocaleDateString(),
            totalMembers: 0,
            permissions: ["create", "read", "update", "delete", "deploy"],
        };

        onSubmit(newDepartment);
        reset();
        onClose();
    };  

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                {/* Header */}
                <div className="flex justify-between items-center border-b p-4">
                    <h3 className="font-semibold text-lg">Add New Department</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(handleFormSubmit)} className="p-4">
                    {/* Department ID */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="id"
                        >
                            Department ID
                        </label>
                        <input
                            {...register("id")}
                            id="id"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter department ID"
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.id?.message}</p>
                    </div>

                    {/* Department Name */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="department-name"
                        >
                            Department Name
                        </label>
                        <input
                            {...register("name")}
                            id="department-name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter department name"
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
                    </div>

                    {/* Manager */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="manager"
                        >
                            Manager
                        </label>
                        <input
                            {...register("manager")}
                            id="manager"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter manager name"
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.manager?.message}</p>
                    </div>

                    {/* Access Level */}
                    <div className="mb-4 relative">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="accessLevel"
                        >
                            Access Level
                        </label>
                        <div className="relative">
                            <select
                                {...register("accessLevel")}
                                id="accessLevel"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                            >
                                <option value="" disabled>
                                    Select Access Level
                                </option>
                                <option value="Admin">Admin</option>
                                <option value="Manager">Manager</option>
                                <option value="Editor">Editor</option>
                                <option value="User">User</option>
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <ChevronDown className="w-5 h-5 text-gray-700" />
                            </div>
                        </div>
                        <p className="text-red-500 text-sm mt-1">{errors.accessLevel?.message}</p>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <textarea
                            {...register("description")}
                            id="description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="3"
                            placeholder="Enter department description"
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.description?.message}</p>
                    </div>

                    {/* Action Buttons */}
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
                            Save Department
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDepartmentModal;
