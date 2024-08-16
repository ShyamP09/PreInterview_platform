import React from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold flex items-center">
          <FaBook className="mr-2" />
          Placement Prepare
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-white hover:text-purple-500 px-3 py-2 rounded transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-white hover:bg-white hover:text-purple-500 px-3 py-2 rounded transition duration-300"
          >
            Courses
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-white hover:text-purple-500 px-3 py-2 rounded transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:bg-white hover:text-purple-500 px-3 py-2 rounded transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
