import React, { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Plus } from "lucide-react";
import DepartmentTable from './DepartmentTable';
import AddDepartmentModal from '../../components/modals/AddDepartmentModal';

const Departments = () => {
  const [departments, setDepartments] =  useLocalStorage('departments', []);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  const handleAddDepartment = (newDepartment) => {
    // Update departments state with the new department
    setDepartments([...departments, newDepartment]);
  };

  const handleUpdateDepartment = (updatedDepartment) => {
    // Find and update the department in the departments array
    setDepartments(prevDepartments => 
      prevDepartments.map(dept => 
        dept.id === updatedDepartment.id ? updatedDepartment : dept
      )
    );
  };

  return (
    <>
      {/* Dashboard Content */}
      <main className="sm:ml-50 p-4">
        <div className="bg-gray-300 p-6 pt-4 rounded-lg">
          <div className="flex justify-end mb-4">
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
            />
          </div>
        </div>
      </main>
      
      {/* Add Department Modal */}
      <AddDepartmentModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddDepartment} // Pass the function as a prop
      />
    </>
  );
};

export default Departments;