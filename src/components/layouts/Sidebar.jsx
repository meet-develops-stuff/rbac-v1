import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, SquareLibrary, Users, Settings, ChevronRight, ChevronLeft } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // NavLink style function
  const getLinkClass = ({ isActive }) => {
    const baseClass = "flex items-center justify-left px-4 py-2 mx-2 ps-3 rounded-lg group";
    return isActive
      ? `${baseClass} bg-gray-600 text-white`
      : `${baseClass} text-gray-900 hover:bg-gray-100`;
  };
  
  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-26 left-1 z-51  bg-gray-600 text-white rounded-full sm:hidden"
      >
        {isOpen ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
      </button>
      
      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`z-50 fixed top-24 left-0 w-50 h-screen bg-gray-400 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full">
          <ul className="space-y-2 font-medium pt-10">
            <li>
              <NavLink
                to="/dashboard"
                className={getLinkClass}
              >
                <LayoutDashboard className="w-5 h-5" />
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/departments"
                className={getLinkClass}
              >
                <SquareLibrary className="w-5 h-5" />
                <span className="ms-3">Departments</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/members"
                className={getLinkClass}
              >
                <Users className="w-5 h-5" />
                <span className="ms-3">Members</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={getLinkClass}
              >
                <Settings className="w-5 h-5" />
                <span className="ms-3">Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;