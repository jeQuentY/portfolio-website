import React from "react";
import { Routes, Route } from "react-router-dom";
import Portraits from "./components/Portraits.js";
import Homepage from "./components/Homepage.js";
// default export here
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/portfolio/automotive" element={<Portraits />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
};

export default App;
