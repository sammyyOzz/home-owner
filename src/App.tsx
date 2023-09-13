import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import ROUTES from "./routes";
import Navbar from "./components/navbar";
import AboutUs from "./pages/about-us";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={ROUTES.LANDING} element={<Landing />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
