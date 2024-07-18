import React from "react";
import { Link, Outlet } from "react-router-dom";

const TrackPage = () => {
  return (
    <div classNameName="container">
      <nav className="nav justify-content-center  ">
        <Link to={"addtrack"} className="nav-link active">
          Add
        </Link>
        <Link to="/" className="nav-link ">
          Lastbilar
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default TrackPage;
