import React from "react";
import { Link, Outlet } from "react-router-dom";

const MotorCyclePage = () => {
  return (
    <div classNameName="container">
      <nav className="nav justify-content-center  ">
        <Link to={"addmotorcycle"} className="nav-link active">
          Add
        </Link>
        <Link to="/" className="nav-link ">
          Motor cycle
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default MotorCyclePage;
