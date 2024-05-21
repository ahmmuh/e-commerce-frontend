import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./components/Start/StartPage";
import ElectronicsRoutes from "./routes/electronics/ElectronicsRoutes";

function App() {
  return (
    <div className="App">
      <StartPage />
      <Routes>
        <Route path="electronics" element={<ElectronicsRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
