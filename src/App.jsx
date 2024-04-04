import React from "react";
import "./App.css";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import { Route, Router, Routes } from "react-router-dom";
import AnimeId from "./components/AnimeId/AnimeId";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/id/*" element={<AnimeId />} />
      </Routes>
    </>
  );
}

export default App;
