import React from "react";
import { Link, Outlet } from "react-router-dom";

const MobilePage = () => {
  return (
    <div className="container">
      <nav className="nav justify-content-center  ">
        <Link to={"addmobile"} className="nav-link active">
          Add
        </Link>
        <Link to="/" className="nav-link ">
          Mobile list
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MobilePage;
