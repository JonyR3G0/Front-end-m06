import React from "react";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/aperture-store-cake" element={<Store />} />
      </Routes>
    </div>
  );
};
