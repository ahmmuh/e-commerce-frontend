import React from "react";
import { Route, Routes } from "react-router-dom";
import ElectronicList from "../../../components/electronics/ElectronicList";
import MobilePage from "../../../components/electronics/mobiles/MobilePage";
import LaptopPage from "../../../components/electronics/laptops/LaptopPage";
import IpadPage from "../../../components/electronics/ipads/IpadPage";
import MobileRoute from "../mobiles/MobileRoute";
import LaptopRoute from "../laptops/LaptopRoute";
import IpadRoute from "../ipads/IpadRoute";

function ElectronicsRoute() {
  return (
    <Routes>
      <Route index element={<ElectronicList />} />
      <Route path="mobiles/*" element={<MobileRoute />} />
      <Route path="laptops/*" element={<LaptopRoute />} />
      <Route path="ipads/*" element={<IpadRoute />} />
    </Routes>
  );
}

export default ElectronicsRoute;
