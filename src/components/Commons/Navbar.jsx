import React from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { UserButton, useAuth } from "@clerk/clerk-react"; // Import useAuth

const Navbar = () => {
  const { isSignedIn } = useAuth(); // Destructure isSignedIn from useAuth

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold flex items-center">
          <FaBook className="mr-2" />
          Prepero
        </div>
        <div className="space-x-4 flex items-center">
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
            to="/contact"
            className="text-white hover:bg-white hover:text-purple-500 px-3 py-2 rounded transition duration-300"
          >
            Contact
          </Link>
          {isSignedIn ? (
            <Link
              to="/resume/dashboard"
              className="bg-white text-purple-500 hover:bg-purple-600 hover:text-white px-3 py-2 rounded transition duration-300"
            >
              Build Resume
            </Link>
          ) : (
            <Link
              to="/signin"
              className="bg-white text-purple-500 hover:bg-purple-600 hover:text-white px-3 py-2 rounded transition duration-300"
            >
              Get Started
            </Link>
          )}
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
