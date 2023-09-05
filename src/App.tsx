import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import ROUTES from "./routes";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={ROUTES.LANDING} element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
