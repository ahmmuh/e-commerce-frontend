import {RouterProvider, createBrowserRouter, BrowserRouter} from "react-router-dom";
import "./App.css";
import ElectronicList from "./containers/electronics/ElectronicList";
import MobilePage from "./containers/electronics/mobiles/MobilePage";
import SearchAppBar from "./containers/appbar/Appbar";
import AppSearchBar from "./containers/appbar/Appbar";
import React from "react";
import Dashboard from "./containers/dashboard/Dashboard";
import AppRouter from "./containers/routes/AppRouter";

const App = () => {
  return (
    <div>
        <AppSearchBar />
            <Dashboard />
        <AppRouter />
    </div>
  );
};

export default App;
