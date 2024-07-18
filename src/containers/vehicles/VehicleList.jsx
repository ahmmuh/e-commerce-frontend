import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const VehicleList = () => {
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
              to={"buses"}
            >
              Bussar
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
              to={"tracks"}
            >
              Lastbilar
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
              to={"cars"}
            >
              Personbilar
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
              to={"motorcycles"}
            >
              MC
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
              to={"mopeds"}
            >
              Mopeder
            </NavLink>
          </button>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default VehicleList;
