import React from "react";
import { Routes, Route } from "react-router-dom";
import Portraits from "./components/portfolio-pages/Portraits.js";
import Automotive from "./components/portfolio-pages/Automotive.js";
import Street from "./components/portfolio-pages/Street.js";
import Homepage from "./components/Homepage.js";
import InvalidPage from "./components/InvalidPage.js";
// default export here
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/portfolio/automotive" element={<Automotive />} />
        <Route path="/portfolio/portraits" element={<Portraits />} />
        <Route path="/portfolio/street" element={<Street />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<InvalidPage />} />
      </Routes>
    </>
  );
};

export default App;
