import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MobilePage from "./components/electronics/mobiles/MobilePage";
import NotFound from "./components/error/NotFound";
import ElectronicList from "./components/electronics/ElectronicList";
import Clothes from "./components/clothes/Clothes";
import LaptopPage from "./components/electronics/laptops/LaptopPage";
import Adults from "./components/clothes/adults/Adults";
import Women from "./components/clothes/adults/Women";
import ChildrenList from "./components/clothes/children/ChildrenList";
import Girls from "./components/clothes/children/GirlsPage";
import Boys from "./components/clothes/children/BoysPage";
import Men from "./components/clothes/Men";
import Dashboard from "./components/dashboard/Dashboard";
import Add from "./components/electronics/mobiles/Add";
import IpadPage from "./components/electronics/ipads/IpadPage";
import AddIpad from "./components/electronics/ipads/AddIpad";
import AddLaptop from "./components/electronics/laptops/AddLaptop";
import DesktopPage from "./components/electronics/desktops/DesktopPage";
import AddDesktop from "./components/electronics/desktops/AddDesktop";
import AppSearchBar from "./components/appbar/Appbar";
import VehicleList from "./components/vehicles/VehicleList";
import AddTrack from "./components/vehicles/AddTrack";
import AddCar from "./components/vehicles/AddCar";
import CarPage from "./components/vehicles/CarPage";
import TrackPage from "./components/vehicles/TrackPage";
import MopedPage from "./components/vehicles/MopedPage";
import AddMoped from "./components/vehicles/AddMoped";
import BusPage from "./components/vehicles/BusPage";
import AddBus from "./components/vehicles/AddBus";
import AddMotorCycle from "./components/vehicles/AddMotorCycle";
import MotorCyclePage from "./components/vehicles/MotorCyclePage";
import HobbyList from "./components/hobies/HobbyList";
import BoatPage from "./components/hobies/boats/BoatPage";
import BookPage from "./components/hobies/books/BookPage";
import AddBook from "./components/hobies/books/AddBook";
import AddBoat from "./components/hobies/boats/AddBoat";
import HouseList from "./components/houses/HouseList";
import VillaPage from "./components/houses/sell/VillaSellPage";
import AllHouses from "./components/houses/AllHouses";
import AppartmentSellPage from "./components/houses/sell/AppartmentSellPage";
import AppartmentRentPage from "./components/houses/rent/AppartmentRentPage";
import HouseRentPage from "./components/houses/rent/HusRentPage";
import VilaRentPage from "./components/houses/rent/VilaRentPage";
import AddSellHouse from "./components/houses/sell/AddSellHouse";
import HouseSellPage from "./components/houses/sell/HusSellPage";
import VillaSellPage from "./components/houses/sell/VillaSellPage";
import AddRentHouse from "./components/houses/rent/AddRentHouse";
import HouseRentList from "./components/houses/rent/HouseRentList";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/start",
    element: <Dashboard />,
  },
  // ... andra rutter ...
  {
    path: "/houses",
    element: <AllHouses />,
    children: [
      {
        path: "rents",
        element: <HouseRentList />,
        children: [
          {
            path: "addrenthouse",
            element: <AddRentHouse />,
          },
          {
            path: "appartmentrent",
            element: <AppartmentRentPage />,
          },
          {
            path: "houserent",
            element: <HouseRentPage />,
          },
          {
            path: "villarent",
            element: <VilaRentPage />,
          },
        ],
      },
      {
        path: "sells",
        element: <AppartmentSellPage />,
        children: [
          {
            path: "add",
            element: <AddSellHouse />,
          },
          {
            path: "appartmentsell",
            element: <AppartmentSellPage />,
          },
          {
            path: "housesell",
            element: <HouseSellPage />,
          },
          {
            path: "villasell",
            element: <VillaSellPage />,
          },
        ],
      },
    ],
  },
  // ... andra rutter ...
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppSearchBar />
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
