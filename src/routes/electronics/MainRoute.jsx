import React, { Children } from "react";
import { useRoutes } from "react-router-dom";
import ElectronicList from "../../components/electronics/ElectronicList";
import MobilePage from "../../components/electronics/mobiles/MobilePage";
import IpadPage from "../../components/electronics/ipads/IpadPage";
import LaptopPage from "../../components/electronics/laptops/LaptopPage";

function MainRoute() {
  const elementRoute = useRoutes([
    {
      path: "electronics",
      Children: [
        { index: true, element: <ElectronicList /> },
        { path: "mobiles", element: <MobilePage /> },
        { path: "ipads", element: <IpadPage /> },
        { path: "laptops", element: <LaptopPage /> },
      ],
    },
  ]);
  return elementRoute;
}

export default MainRoute;
