import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import ElectronicList from "./components/electronics/ElectronicList";
import MobilePage from "./components/electronics/mobiles/MobilePage";
import SearchAppBar from "./components/appbar/Appbar";
import AppSearchBar from "./components/appbar/Appbar";

const App = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default App;
