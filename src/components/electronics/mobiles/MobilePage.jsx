import { Button } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function MobilePage() {
  return (
    <div classNameName="container">
      <nav className="nav justify-content-center  ">
        <Link to={"add"} className="nav-link active">
          Add
        </Link>
        <Link to={":id"} className="nav-link ">
          Update
        </Link>

        <Link to={":id"} className="nav-link ">
          Delete
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default MobilePage;
