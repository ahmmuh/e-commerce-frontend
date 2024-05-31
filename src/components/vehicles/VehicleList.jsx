import React from "react";
import { Link, Outlet } from "react-router-dom";

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
            <Link to={"buses"}>Bussar</Link>
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
            <Link to={"tracks"}>Lastbilar</Link>
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
            <Link to={"cars"}>Personbilar</Link>
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
            <Link to={"mopeds"}>Mopeder</Link>
          </button>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default VehicleList;
