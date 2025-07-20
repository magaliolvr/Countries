import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Homepage from "./components/Homepage.jsx";
import CountriesPage from "./components/CountriesPage.jsx";
import Notfound from "./components/NotFound.jsx";
import ContinentPage from "./components/ContinentPage.jsx";
import NavBar from "./components/NavBar.jsx";
import CountryPage_Detail from "./components/CountryPage_Detail.jsx";
import RegionsPage from "./components/RegionsPage.jsx";
import RegionPage_Detail from "./components/RegionsPage_Detail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </StrictMode>
);
