import React from "react";
import { Link, Outlet } from "react-router-dom";

const IpadPage = () => {
  return (
    <div classNameName="container">
      <nav className="nav justify-content-center  ">
        <Link to={"addipad"} className="nav-link active">
          Add
        </Link>
        <Link to="/" className="nav-link ">
          Ipad list
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default IpadPage;
