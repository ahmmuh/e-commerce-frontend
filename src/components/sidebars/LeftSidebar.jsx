import React from "react";
import { containerStyle } from "../globalStyles/containerStyle";
import { Link } from "react-router-dom";

function LeftSidebar() {
  return (
    <div
      className="col-3"
      style={{ backgroundColor: "#3399ff", color: "white" }}
    >
      <ul className="list-group " style={{ backgroundColor: "inherit" }}>
        <Link to={"/"}>Dashboard</Link>
        <Link to={"/electronics"}>Electronics</Link>
        <Link to={"/hobies"}>Hobies</Link>
        <Link to={"/vehicles"}>Fordon</Link>
        <Link to={"/houses"}>Houses</Link>
        <Link to={"/furnitures"}>Furnitures</Link>
        <Link to={"/users"}>Clothes</Link>
      </ul>
    </div>
  );
}

export default LeftSidebar;
