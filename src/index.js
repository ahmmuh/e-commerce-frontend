import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MobilePage from "./components/electronics/mobiles/MobilePage";
import NotFound from "./components/error/NotFound";
import ElectronicList from "./components/electronics/ElectronicList";
// import IpadPage from "./components/electronics/ipads/IpadPage";
import Clothes from "./components/clothes/Clothes";
import LaptopPage from "./components/electronics/laptops/LaptopPage";
import Vehicles from "./components/vehicles/Vehicles";
import Cars from "./components/vehicles/Cars";
import Tracks from "./components/vehicles/Tracks";
import Mopeds from "./components/vehicles/Mopeds";
import Adults from "./components/clothes/adults/Adults";
import Women from "./components/clothes/adults/Women";
import ChildrenList from "./components/clothes/children/ChildrenList";
import Girls from "./components/clothes/children/Girls";
import Boys from "./components/clothes/children/Boys";
import Men from "./components/clothes/Men";
import Dashboard from "./components/dashboard/Dashboard";
import Add from "./components/electronics/mobiles/Add";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <NotFound />,
  },
  {
    path: "/electronics",
    element: <ElectronicList />,
    children: [
      {
        path: "mobiles",
        element: <MobilePage />,
        children: [{ path: "add", element: <Add /> }],
      },
      {
        path: "laptops",
        element: <LaptopPage />,
      },
      //   { path: "ipads",
      //   element: <IpadPage />
      //  },
    ],
  },

  {
    path: "/vehicles",
    element: <Vehicles />,
    children: [
      { path: "cars", element: <Cars /> },
      { path: "tracks", element: <Tracks /> },
      { path: "mopeds", element: <Mopeds /> },
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
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
