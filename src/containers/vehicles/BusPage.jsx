import React from "react";
import { Link, Outlet } from "react-router-dom";

const BusPage = () => {
  return (
    <div classNameName="container">
      <nav className="nav justify-content-center  ">
        <Link to={"addbus"} className="nav-link active">
          Add
        </Link>
        <Link to="/" className="nav-link ">
          Bussar
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default BusPage;
