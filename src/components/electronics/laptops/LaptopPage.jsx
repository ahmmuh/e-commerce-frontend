import React from "react";
import { Link, Outlet } from "react-router-dom";

const LaptopPage = () => {
  return (
    <div classNameName="container">
      <nav className="nav justify-content-center ">
        <Link to={"addlaptop"} className="nav-link active">
          Add
        </Link>
        <Link to="/" className="nav-link ">
          Laptop list
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default LaptopPage;
