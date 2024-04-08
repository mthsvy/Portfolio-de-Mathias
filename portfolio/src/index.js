import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ComingSoon from "./pages/Comingsoon";

document.title = "Portfolio de Mathias Villy";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cs" element={<ComingSoon />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
