// ElectronicsRoutes.js
import { Route } from "react-router-dom";
import MobilePage from "../../components/electronics/MobilePage";
import IpadPage from "../../components/electronics/IpadPage";
import LaptopPage from "../../components/electronics/LaptopPage";

export default function ElectronicsRoutes() {
  return (
    <>
      <Route path="/electronics/mobiles" element={<MobilePage />} />
      <Route path="/electronics/ipad" element={<IpadPage />} />
      <Route path="/electronics/laptop" element={<LaptopPage />} />
    </>
  );
}
