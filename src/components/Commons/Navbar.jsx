import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      Navbar
      <Link to={"/courses"}>Courses</Link>
    </div>
  );
};

export default Navbar;
