import MainInput from "../../reuseableComponents/forms/MainInput";
import { Link, Outlet } from "react-router-dom";
import DCard from "../../reuseableComponents/dashboardCars/DCard";
import React, { useState } from "react";

const Dashboard = () => {
  return (
    <section className="container-fluid p-4">
      <div className="row">
        <div className="col-4 sidebar">
          <h4>Category</h4>
          <div className="d-flex flex-column">
            <Link className="links" to={"/"}>
              Start
            </Link>
            <Link className="links" to={"/electronics"}>
              Electronics
            </Link>
            <Link className="links" to={"/vehicles"}>
              Fordon
            </Link>
            <Link className="links" to={"/clothes"}>
              Clothes
            </Link>
            <Link className="links" to={"/vehicles"}>
              Vehicles
            </Link>
            <Link className="links" to={"/electronics"}>
              Electronics
            </Link>
            <Link className="links" to={"/electronics"}>
              Electronics
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="d-flex">
            <DCard
              title={"Total sales"}
              total={12000}
              style={{
                backgroundColor: "#754f12",
                boxShadow: "1px 1px 1px 1px #d65",
                padding: "1rem",
              }}
            />

            <DCard
              title={"User"}
              total={43000}
              style={{
                backgroundColor: "#884f12",
                boxShadow: "1px 1px 1px 1px #e95833",
                padding: "1rem",
              }}
            />
            <DCard
              title={"User"}
              total={43000}
              style={{
                backgroundColor: "#ff4f12",
                boxShadow: "1px 1px 1px 1px #e95833",
                padding: "1rem",
              }}
            />

            <DCard
              title={"User"}
              total={43000}
              style={{
                backgroundColor: "#ff4f12",
                boxShadow: "1px 1px 1px 1px #e95833",
                padding: "1rem",
              }}
            />
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
