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
import Women from "./components/clothes/adults/WomenPage";
import ChildrenList from "./components/clothes/children/ChildrenList";
import Men from "./components/clothes/adults/MenPage";
import Dashboard from "./components/dashboard/Dashboard";
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
import HobbyList from "./components/hobbies/HobbyList";
import BoatPage from "./components/hobbies/boats/BoatPage";
import BookPage from "./components/hobbies/books/BookPage";
import AddBook from "./components/hobbies/books/AddBook";
import AddBoat from "./components/hobbies/boats/AddBoat";
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
import AddMobile from "./components/electronics/mobiles/AddMobile";
import GirlsPage from "./components/clothes/children/girls/GirlsPage";
import BoysPage from "./components/clothes/children/boys/BoysPage";
import AddGirl from "./components/clothes/children/girls/AddGirl";
import AddBoy from "./components/clothes/children/boys/AddBoy";
import HouseSellList from "./components/houses/sell/HouseSellList";
import MenPage from "./components/clothes/adults/MenPage";
import WomenPage from "./components/clothes/adults/WomenPage";
import AddMan from "./components/clothes/adults/AddMan";
import AddWoman from "./components/clothes/adults/AddWoman";
import MobileList from "./components/electronics/mobiles/MobileList";
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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppSearchBar />
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
