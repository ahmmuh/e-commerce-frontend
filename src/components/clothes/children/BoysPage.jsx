import React from "react";
import { Link, Outlet } from "react-router-dom";

const BoysPage = () => {
  return (
    <div classNameName="container">
      <nav className="nav justify-content-center  ">
        <Link to={"addboy"} className="nav-link active">
          Add
        </Link>
        <Link to="/" className="nav-link ">
          Pojkar
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default BoysPage;
