import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const onSubmit = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        navigate("/login"); // Redirects to login page
    };

    return (
        <header className="z-50 sticky top-0 bg-white w-full">
            <div className="w-full px-4 flex h-24 items-center bg-[#121619]">
                <div className="flex items-center gap-15">
                    {/* Brand Logo */}
                    <div className="relative inline-flex items-center text-3xl">
                        <a href="/">
                            <span className="font-medium text-gray-100">
                                Workers Dev
                            </span>
                        </a>
                        <button className="absolute top-0 right-[-3rem] bg-black text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                            FREE
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    {/* <nav className="hidden md:block">
                        <ul className="flex gap-4">
                            <Link to="/dashboard">
                                <li>
                                    <div className="text-sm font-medium text-gray-100 hover:opacity-75">
                                        Dashboard
                                    </div>
                                </li>
                            </Link>
                            <Link to="/members">
                                <li>
                                    <div className="text-sm font-medium text-gray-100 hover:opacity-75">
                                        Members
                                    </div>
                                </li>
                            </Link>
                            <Link to="/settings">
                                <li>
                                    <div className="text-sm font-medium text-gray-100 hover:opacity-75">
                                        Settings
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </nav> */}
                </div>

                {/* Right Section (Admin & Logout) */}
                <div className="flex items-center space-x-4 ml-auto">
                    <span className="hidden text-sm md:block text-gray-100 font-medium hover:opacity-75">
                        \Admin\
                    </span>

                    {/* Logout Button */}
                    <button
                        onClick={onSubmit}
                        className="hidden md:block bg-red-500 px-4 py-2 text-white rounded-lg hover:opacity-75"
                    >
                        Logout
                    </button>

                    {/* Mobile Menu Button */}
                    <div className="z-50 relative md:hidden">
                        <button
                            type="button"
                            className="text-gray-100"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Toggle menu</span>
                            <Menu className="w-6 h-6" />
                        </button>

                        {isOpen && (
                            <ul className="absolute right-0 mt-2 w-40 bg-gray-700 border border-gray-600 rounded-lg shadow-xl text-white">
                                {/* <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Admin</li> */}
                                {/* <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Dashboard</li> */}
                                {/* <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Users</li> */}
                                {/* <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Settings</li> */}
                                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer" onClick={onSubmit}>
                                    Logout
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Navbar;
