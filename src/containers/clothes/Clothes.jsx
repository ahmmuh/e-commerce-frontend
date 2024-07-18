import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Clothes = () => {
  return (
    <div className="container">
      <ul className="nav nav-tabs " id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"adults"}
            >
              Vuxna
            </NavLink>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"children"}
            >
              Barn
            </NavLink>
          </button>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Clothes;
