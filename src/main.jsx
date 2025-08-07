import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.scss";
import "./style/utils.scss";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Homepage from "./pages/Homepage.jsx";
import CountriesPage from "./pages/CountriesPage.jsx";
import Notfound from "./components/NotFound.jsx";
import ContinentPage from "./pages/ContinentPage.jsx";
import NavBar from "./components/NavBar.jsx";
import CountryPage_Detail from "./pages/CountryPage_Detail.jsx";
import RegionsPage from "./pages/RegionsPage.jsx";
import RegionPage_Detail from "./pages/RegionsPage_Detail.jsx";
import { UserProvider } from "./components/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/continent" element={<ContinentPage />} />
          <Route path="/country/:name" element={<CountryPage_Detail />} />
          <Route path="/region/:name" element={<RegionPage_Detail />} />
          <Route path="/regions" element={<RegionsPage />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
