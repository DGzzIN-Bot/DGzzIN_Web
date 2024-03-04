import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "pages/Home";
import Commands from "pages/Commands";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/commands" element={<Commands />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
