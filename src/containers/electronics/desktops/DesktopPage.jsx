import React from "react";
import { Link, Outlet } from "react-router-dom";

const DesktopPage = () => {
  return (
    <div classNameName="container">
      <nav className="nav justify-content-center  ">
        <Link to={"adddesktop"} className="nav-link active">
          Add
        </Link>
        <Link to="/" className="nav-link ">
          Desktops
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default DesktopPage;
