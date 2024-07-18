import React, { useState } from "react";

import MainInput from "../../components/forms/MainInput";
import { Link, Outlet } from "react-router-dom";
import DCard from "../../components/dashboardCars/DCard";
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
        <div className="col-9 pt-3">
          <h4>Content kommer här...</h4>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;
