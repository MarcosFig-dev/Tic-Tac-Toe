import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Multiplayer from "./pages/Multiplayer.jsx";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Multiplayer" element={<Multiplayer />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
