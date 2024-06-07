import React from "react";
import { Link, Outlet } from "react-router-dom";

const WomenPage = () => {
  return (
    <div classNameName="container">
      <nav className="nav justify-content-center  ">
        <Link to={"addwoman"} className="nav-link active">
          Add
        </Link>
        <Link to="/" className="nav-link ">
          Women
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default WomenPage;
