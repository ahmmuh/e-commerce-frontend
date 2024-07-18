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
import MobilePage from "./containers/electronics/mobiles/MobilePage";
import NotFound from "./containers/error/NotFound";
import ElectronicList from "./containers/electronics/ElectronicList";
import Clothes from "./containers/clothes/Clothes";
import LaptopPage from "./containers/electronics/laptops/LaptopPage";
import Adults from "./containers/clothes/adults/Adults";
import Women from "./containers/clothes/adults/WomenPage";
import ChildrenList from "./containers/clothes/children/ChildrenList";
import Men from "./containers/clothes/adults/MenPage";
import Dashboard from "./containers/dashboard/Dashboard";
import IpadPage from "./containers/electronics/ipads/IpadPage";
import AddIpad from "./containers/electronics/ipads/AddIpad";
import AddLaptop from "./containers/electronics/laptops/AddLaptop";
import DesktopPage from "./containers/electronics/desktops/DesktopPage";
import AddDesktop from "./containers/electronics/desktops/AddDesktop";
import AppSearchBar from "./containers/appbar/Appbar";
import VehicleList from "./containers/vehicles/VehicleList";
import AddTrack from "./containers/vehicles/AddTrack";
import AddCar from "./containers/vehicles/AddCar";
import CarPage from "./containers/vehicles/CarPage";
import TrackPage from "./containers/vehicles/TrackPage";
import MopedPage from "./containers/vehicles/MopedPage";
import AddMoped from "./containers/vehicles/AddMoped";
import BusPage from "./containers/vehicles/BusPage";
import AddBus from "./containers/vehicles/AddBus";
import AddMotorCycle from "./containers/vehicles/AddMotorCycle";
import MotorCyclePage from "./containers/vehicles/MotorCyclePage";
import HobbyList from "./containers/hobbies/HobbyList";
import BoatPage from "./containers/hobbies/boats/BoatPage";
import BookPage from "./containers/hobbies/books/BookPage";
import AddBook from "./containers/hobbies/books/AddBook";
import AddBoat from "./containers/hobbies/boats/AddBoat";
import HouseList from "./containers/houses/HouseList";
import VillaPage from "./containers/houses/sell/VillaSellPage";
import AllHouses from "./containers/houses/AllHouses";
import AppartmentSellPage from "./containers/houses/sell/AppartmentSellPage";
import AppartmentRentPage from "./containers/houses/rent/AppartmentRentPage";
import HouseRentPage from "./containers/houses/rent/HusRentPage";
import VilaRentPage from "./containers/houses/rent/VilaRentPage";
import AddSellHouse from "./containers/houses/sell/AddSellHouse";
import HouseSellPage from "./containers/houses/sell/HusSellPage";
import VillaSellPage from "./containers/houses/sell/VillaSellPage";
import AddRentHouse from "./containers/houses/rent/AddRentHouse";
import HouseRentList from "./containers/houses/rent/HouseRentList";
import AddMobile from "./containers/electronics/mobiles/AddMobile";
import GirlsPage from "./containers/clothes/children/girls/GirlsPage";
import BoysPage from "./containers/clothes/children/boys/BoysPage";
import AddGirl from "./containers/clothes/children/girls/AddGirl";
import AddBoy from "./containers/clothes/children/boys/AddBoy";
import HouseSellList from "./containers/houses/sell/HouseSellList";
import MenPage from "./containers/clothes/adults/MenPage";
import WomenPage from "./containers/clothes/adults/WomenPage";
import AddMan from "./containers/clothes/adults/AddMan";
import AddWoman from "./containers/clothes/adults/AddWoman";
import MobileList from "./containers/electronics/mobiles/MobileList";
/*
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

  {
    path: "hobbies",
    element: <HobbyList />,
    children: [
      {
        path: "books",
        element: <BookPage />,
        children: [
          {
            path: "addbook",
            element: <AddBook />,
          },
        ],
      },
      {
        path: "boats",
        element: <BoatPage />,
        children: [
          {
            path: "addboat",
            element: <AddBoat />,
          },
        ],
      },
    ],
  },

  {
    path: "electronics",
    element: <ElectronicList />,
    children: [
      {
        path: "laptops",
        element: <LaptopPage />,
        children: [
          {
            path: "addlaptop",
            element: <AddLaptop />,
          },
        ],
      },
      {
        path: "mobiles",
        element: <MobilePage />,
        children: [
          {
            path: "addmobile",
            element: <AddMobile />,
          },
          {
            path: "mobileList",
            element: <MobileList />
          }
        ],
      },
      {
        path: "ipads",
        element: <IpadPage />,
        children: [
          {
            path: "addipad",
            element: <AddIpad />,
          },
        ],
      },
      {
        path: "desktops",
        element: <DesktopPage />,
        children: [
          {
            path: "adddesktop",
            element: <AddDesktop />,
          },
        ],
      },
    ],
  },
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
        element: <HouseSellList />,
        children: [
          {
            path: "addsellhouse",
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

  {
    path: "/vehicles",
    element: <VehicleList />,

    children: [
      {
        path: "cars",
        element: <CarPage />,
        children: [
          {
            path: "addcar",
            element: <AddCar />,
          },
        ],
      },

      {
        path: "buses",
        element: <BusPage />,
        children: [
          {
            path: "addbus",
            element: <AddBus />,
          },
        ],
      },
      {
        path: "tracks",
        element: <TrackPage />,
        children: [
          {
            path: "addtrack",
            element: <AddTrack />,
          },
        ],
      },
      {
        path: "mopeds",
        element: <MopedPage />,
        children: [
          {
            path: "addmoped",
            element: <AddMoped />,
          },
        ],
      },
      {
        path: "motorcycles",
        element: <MotorCyclePage />,
        children: [
          {
            path: "addmotorcycle",
            element: <AddMotorCycle />,
          },
        ],
      },
    ],
  },
  {
    path: "clothes",
    element: <Clothes />,
    children: [
      {
        path: "adults",
        element: <Adults />,
        children: [
          {
            path: "men",
            element: <MenPage />,
            children: [
              {
                path: "addman",
                element: <AddMan />,
              },
            ],
          },
          {
            path: "women",
            element: <WomenPage />,
            children: [
              {
                path: "addwoman",
                element: <AddWoman />,
              },
            ],
          },
        ],
      },

      {
        path: "children",
        element: <ChildrenList />,
        children: [
          {
            path: "boys",
            element: <BoysPage />,
            children: [
              {
                path: "addboy",
                element: <AddBoy />,
              },
            ],
          },
          {
            path: "girls",
            element: <GirlsPage />,
            children: [{ path: "addgirl", element: <AddGirl /> }],
          },
        ],
      },
    ],
  },
]);
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
