import { ChevronDown, X } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DepartmentValidation from "../../components/validations/DepartmentValidation";

const EditModal = ({ department, isOpen, onClose, onSubmit, showToast }) => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(DepartmentValidation),
    });

    const accessLevels = ["Admin", "Manager", "Editor", "User"];

    // Sync form with department data when modal opens
    useEffect(() => {
        if (department) {
            reset({
                name: department.name || "",
                id: department.id || "",
                description: department.description || "",
                manager: department.manager || "",
                accessLevel: department.accessLevel || "",
                permissions: department.permissions || [],
            });
        }
    }, [department, reset]);

    // Handle form submission
    const handleFormSubmit = (data) => {
        const updatedDepartment = {
            ...department,
            ...data,
            lastEdited: new Date().toLocaleDateString(),
        };

        onSubmit(updatedDepartment);
        showToast("Department Updated Successfully!");
        reset();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                <div className="flex justify-between items-center border-b p-4">
                    <h3 className="font-semibold text-lg">Edit Department</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X />
                    </button>
                </div>

                <form onSubmit={handleSubmit(handleFormSubmit)} className="p-4">
                    {/* Department Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department-name">
                            Department Name
                        </label>
                        <input
                            {...register("name")}
                            id="department-name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
                    </div>

                    {/* Manager */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="manager-name">
                            Manager
                        </label>
                        <input
                            {...register("manager")}
                            id="manager-name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.manager?.message}</p>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            {...register("description")}
                            id="description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                            rows="3"
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.description?.message}</p>
                    </div>

                    {/* Access Level */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accessLevel">
                            Access Level
                        </label>
                        <div className="relative">
                            <select
                                {...register("accessLevel")}
                                id="accessLevel"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline cursor-pointer"
                            >
                                <option value="" disabled>
                                    Select Access Level
                                </option>
                                {accessLevels.map((level) => (
                                    <option key={level} value={level}>
                                        {level}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                <ChevronDown className="w-5 h-5 text-gray-700" />
                            </div>
                            <p className="text-red-500 text-sm mt-1">{errors.accessLevel?.message}</p>
                        </div>
                    </div>

                    {/* Buttons */}
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
    );
};

export default EditModal;
