import React from "react";
import { Routes, Route } from "react-router-dom";
import Portraits from "./components/portfolio-pages/Portraits.js";
import Homepage from "./components/Homepage.js";
import InvalidPage from "./components/InvalidPage.js";
// default export here
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/portfolio/automotive" element={<Portraits />} />
        <Route path="/portfolio/portraits" element={<Portraits />} />
        <Route path="/portfolio/street" element={<Portraits />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<InvalidPage />} />
      </Routes>
    </>
  );
};

export default App;
