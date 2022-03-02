import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/pages/Home";
import "antd/dist/antd.css";
import "./App.css";
import Marketplace from "./app/pages/Marketplace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace/:id" element={<Marketplace />} />
        <Route path="/marketplace/" element={<Marketplace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
