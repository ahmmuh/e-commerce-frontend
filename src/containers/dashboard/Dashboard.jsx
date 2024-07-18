import React from "react";
import LeftSidebar from "./LeftSidebar";
import AppRouter from "../routes/AppRouter";
import {BrowserRouter, Outlet} from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col sidebar-left">
         <LeftSidebar />
        </div>
        <div className="col-9 pt-3">
          <h4>Välkommen till Dashboard :)</h4>
            <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
