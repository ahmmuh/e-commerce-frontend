import { Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./components/Start/StartPage";
import MobileRoute from "./routes/electronics/mobiles/MobileRoute";
import LaptopRoute from "./routes/electronics/laptops/LaptopRoute";
import IpadRoute from "./routes/electronics/ipads/IpadRoute";
import ElectronicsRoute from "./routes/electronics/electronicsroute/ElectronicsRoute";
import Content from "./components/dashboard/content/Content";
import SearchAppBar from "./components/menu/TopBar";

function App() {
  return (
    <div className="">
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/electronics/*" element={<ElectronicsRoute />} />
      </Routes>
    </div>
  );
}

export default App;
