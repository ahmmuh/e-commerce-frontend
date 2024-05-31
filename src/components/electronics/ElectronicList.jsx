import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import MobilePage from "./mobiles/MobilePage";

const ElectronicList = () => {
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
              to={"mobiles"}
            >
              Mobiles
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
              to={"laptops"}
            >
              Laptops
            </NavLink>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="messages-tab"
            data-bs-toggle="tab"
            data-bs-target="#messages"
            type="button"
            role="tab"
            aria-controls="messages"
            aria-selected="false"
          >
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"ipads"}
            >
              Ipad
            </NavLink>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="messages-tab"
            data-bs-toggle="tab"
            data-bs-target="#messages"
            type="button"
            role="tab"
            aria-controls="messages"
            aria-selected="false"
          >
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"desktops"}
            >
              Desktops
            </NavLink>
          </button>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ElectronicList;
