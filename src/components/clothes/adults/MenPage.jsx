import React from "react";
import { Link, Outlet } from "react-router-dom";

const MenPage = () => {
  return (
    <div classNameName="container">
      <nav className="nav justify-content-center  ">
        <Link to={"addman"} className="nav-link active">
          Add
        </Link>
        <Link to="/" className="nav-link ">
          Men
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MenPage;
