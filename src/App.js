import { Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./components/Start/StartPage";
import MobileRoute from "./routes/electronics/mobiles/MobileRoute";
import LaptopRoute from "./routes/electronics/laptops/LaptopRoute";
import IpadRoute from "./routes/electronics/ipads/IpadRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/mobiles/*" element={<MobileRoute />} />
        <Route path="/laptops/*" element={<LaptopRoute />} />
        <Route path="/ipads/*" element={<IpadRoute />} />
      </Routes>
    </div>
  );
}

export default App;
