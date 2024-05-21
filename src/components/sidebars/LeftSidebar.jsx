import React from "react";
import { containerStyle } from "../globalStyles/containerStyle";

function LeftSidebar() {
  return (
    <div
      className="col-3"
      style={{ backgroundColor: "#3399ff", color: "white" }}
    >
      <ul className="list-group " style={{ backgroundColor: "inherit" }}>
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
}

export default LeftSidebar;
