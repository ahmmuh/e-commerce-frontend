import React from "react";
import { Link, Outlet } from "react-router-dom";

const BookPage = () => {
  return (
    <div classNameName="container">
      <nav className="nav justify-content-center  ">
        <Link to={"addbook"} className="nav-link active">
          Add
        </Link>
        <Link to="/" className="nav-link ">
          Böcker
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default BookPage;
