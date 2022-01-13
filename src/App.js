// https://www.better.dev/make-a-stellar-react-nasa-app-in-10-minutes

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<NasaPhoto />} path="/nasaphoto" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
