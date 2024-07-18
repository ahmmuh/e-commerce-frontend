import "./App.css";

import AppSearchBar from "./containers/appbar/Appbar";
import React from "react";
import Dashboard from "./containers/dashboard/Dashboard";
import AppRouter from "./containers/routes/AppRouter";
import {BrowserRouter, Outlet} from "react-router-dom";

const App = () => {
  return (
    <div>
        <AppSearchBar />
        <AppRouter>
            <Dashboard/>
            <Outlet/>
        </AppRouter>
    </div>
  );
};

export default App;
