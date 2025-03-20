import React, { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Plus } from "lucide-react";
import DepartmentTable from './DepartmentTable';
import AddDepartmentModal from '../../components/modals/AddDepartmentModal';
import SuccessToast from '../../components/toast/SuccessToast';

const Departments = () => {
  const [departments, setDepartments] = useLocalStorage('departments', []);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Toast State
  const [toastOpen, setToastOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddDepartment = (newDepartment) => {
    setDepartments([...departments, newDepartment]);
    showToast("Department Added Successfully!");
  };

  const handleUpdateDepartment = (updatedDepartment) => {
    setDepartments(prevDepartments =>
      prevDepartments.map(dept =>
        dept.id === updatedDepartment.id ? updatedDepartment : dept
      )
    );
    showToast("Department Updated Successfully!");
  };

  const showToast = (message) => {
    setSuccessMessage(message);
    setToastOpen(true);
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

  return (
    <>
      <main className="sm:ml-50 p-4">
        <div className="bg-gray-300 p-6 pt-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-xl flex-1 text-center">Department Details</h3>
            <button
              className="flex items-center gap-x-2 bg-black px-6 py-2 text-white rounded-lg hover:cursor-pointer"
              onClick={() => setIsAddModalOpen(true)}
            >
              Add <Plus className="h-5 w-5" />
            </button>
          </div>
          <div className="w-full">
            <DepartmentTable
              departments={departments}
              onUpdateDepartment={handleUpdateDepartment}
              showToast={showToast} // Pass the showToast function
            />
          </div>
        </div>
      </main>

      <AddDepartmentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddDepartment}
        departments={departments}
      />

      {/* Success Toast */}
      <SuccessToast
        message={successMessage}
        open={toastOpen}
        onClose={handleToastClose}
      />
    </>
  );
};

export default Departments;
