import React from "react";
import Navbar from "../../menu/Navbar";
import {
  containerStyle,
  leftAndContentBAckgroundColor,
} from "../../globalStyles/containerStyle";
import ChartCard from "../../../reuseableComponents/ChartCard";
import { Outlet } from "react-router-dom";

function Content() {
  return (
    <div className="container " style={containerStyle}>
      <Navbar />
      <div className="row ">
        <div className="col">
          <ChartCard
            title="Total Orders"
            total={4400}
            icon={<i className="bi bi-cart-fill"></i>}
          />
        </div>
        <div className="col">
          <ChartCard
            title="Total Sales"
            total={5000}
            icon={<i className="bi bi-cart-fill"></i>}
          />
        </div>
        <div className="col">
          <ChartCard
            title="Total users"
            total={1200}
            icon={<i className="bi bi-cart-fill"></i>}
          />
        </div>
        <div className="col">
          <ChartCard
            title="Total Products"
            total={6033}
            icon={<i className="bi bi-cart-fill"></i>}
          />
        </div>
      </div>
      <div className="row">
        <Outlet />
      </div>
    </div>
  );
}

export default Content;
