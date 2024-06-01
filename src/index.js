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
    path: "/electronics",
    element: <ElectronicList />,
    children: [
      {
        path: "mobiles",
        element: <MobilePage />,
        children: [{ path: "addmobile", element: <Add /> }],
      },
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
        path: "desktops",
        element: <DesktopPage />,
        children: [
          {
            path: "adddesktop",
            element: <AddDesktop />,
          },
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
        children: [{ path: "addtrack", element: <AddTrack /> }],
      },
      {
        path: "mopeds",
        element: <MopedPage />,
        children: [{ path: "addmoped", element: <AddMoped /> }],
      },
    ],
  },

  {
    path: "/clothes",
    element: <Clothes />,
    children: [
      {
        path: "adults",
        element: <Adults />,
        children: [
          { path: "men", element: <Men /> },
          { path: "women", element: <Women /> },
        ],
      },
      {
        path: "children",
        element: <ChildrenList />,
        children: [
          { path: "girls", element: <Girls /> },
          { path: "boys", element: <Boys /> },
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
