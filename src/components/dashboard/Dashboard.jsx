import MainInput from "../../reuseableComponents/forms/MainInput";
import { Link, Outlet } from "react-router-dom";
import DCard from "../../reuseableComponents/dashboardCars/DCard";
import React, { useState } from "react";
import { Computer, Home, House } from "@mui/icons-material";
import LeftSidebar from "./LeftSidebar";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col sidebar-left">
          <LeftSidebar />
        </div>
        <div className="col-9">Content</div>
      </div>
    </section>
  );
};

export default Dashboard;
