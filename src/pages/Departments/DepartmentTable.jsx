import { Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import DeleteModal from "../../components/modals/DeleteModal";
import ViewModal from "../../components/modals/ViewModal";
import EditModal from "../../components/modals/EditModal";

const DepartmentTable = ({ departments }) => {

    const [activeView, setActiveView] = useState(null);
    const [activeEdit, setActiveEdit] = useState(null);
    const [activeDelete, setActiveDelete] = useState(null);
   

    return (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                        <th className="border border-gray-300 px-4 py-2">Sr. No.</th>
                        <th className="border border-gray-300 px-4 py-2">Department ID</th>
                        <th className="border border-gray-300 px-4 py-2">Department Name</th>
                        <th className="border border-gray-300 px-4 py-2">Created At</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((department) => (
                        <tr key={department.id} className="text-center hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2">{department.serial}</td>
                            <td className="border border-gray-300 px-4 py-2">{department.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{department.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{department.createdAt}</td>

                            {/* Actions Col */}
                            <td className="border border-gray-300 px-4 py-1">
                                <div className="flex justify-between w-full px-4">


                                    {/* View */}
                                    <Tooltip title="View">
                                        <div className="relative group">
                                            <Eye
                                                className="hover:text-green-500 cursor-pointer"
                                                onClick={() => setActiveView(department)}
                                            />

                                            {/* View Details Modal */}
                                            <ViewModal
                                                isOpen={activeView?.id === department.id}
                                                onClose={() => setActiveView(null)}
                                                department={department}
                                            />
                                        </div>
                                    </Tooltip>

                                    {/* Edit*/}
                                    <Tooltip title="Edit">
                                        <div className="relative group">
                                            <Pencil
                                                className="hover:text-blue-500 cursor-pointer"
                                                onClick={() => setActiveEdit(department)}
                                            />

                                            {/* Edit Details Modal */}
                                            <EditModal
                                                isOpen={activeEdit?.id === department.id}
                                                onClose={() => setActiveEdit(null)}
                                                department={department}
                                            />
                                        </div>
                                    </Tooltip>

                                    {/* Delete */}
                                    <Tooltip title="Delete">
                                        <div className="relative group">
                                            <Trash2
                                                className="hover:text-red-500 cursor-pointer"
                                                onClick={() => setActiveDelete(department)}
                                            />

                                            {/* Delete Confirmation Modal */}
                                            <DeleteModal
                                                isOpen={activeDelete?.id === department.id}
                                                onClose={() => setActiveDelete(null)}
                                                onConfirm={() => {
                                                    console.log("Item deleted!", department.id);
                                                    setActiveDelete(null);
                                                }}
                                            />
                                        </div>
                                    </Tooltip>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DepartmentTable;
