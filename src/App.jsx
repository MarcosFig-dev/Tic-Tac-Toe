import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx"
import Multiplayer from './pages/Multiplayer.jsx';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Multiplayer" element={<Multiplayer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
