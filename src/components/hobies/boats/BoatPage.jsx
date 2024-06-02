import React from "react";
import { Link, Outlet } from "react-router-dom";

const BoatPage = () => {
  return (
    <div classNameName="container">
      <nav className="nav justify-content-center  ">
        <Link to={"addboat"} className="nav-link active">
          Add
        </Link>
        <Link to="/" className="nav-link ">
          Båtar
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default BoatPage;
