import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { Provider } from "react-redux";
import Home from "./app/pages/Home";
import "antd/dist/antd.css";
import "./App.css";
import Marketplace from "./app/pages/Marketplace";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <MoralisProvider
        appId="xIoa29tHgfWDmNnn5oysGSG7Q8ALFYYO6uvPuA5K"
        serverUrl="https://d5owrqlin45n.usemoralis.com:2053/server"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace/:id" element={<Marketplace />} />
            <Route path="/marketplace/" element={<Marketplace />} />
          </Routes>
        </BrowserRouter>
      </MoralisProvider>
    </Provider>
  );
}

export default App;
