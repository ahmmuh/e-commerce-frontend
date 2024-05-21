import React from "react";
import Searchbar from "./Searchbar";
import Profile from "./Profile";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light ">
      <a className="navbar-brand" href="#">
        E-commerce
      </a>
      <Searchbar />

      <div className="col-2">
        <Profile />
      </div>
    </nav>
  );
}

export default Navbar;
