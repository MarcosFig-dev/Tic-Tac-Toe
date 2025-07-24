import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./components/Board.jsx";

function App() {
  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
