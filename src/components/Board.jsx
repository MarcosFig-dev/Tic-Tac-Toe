import React from "react";
import "./board.css";
import Square from "./Square.jsx";
import { useState } from "react";
import { useEffect } from "react";

function Board() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleSquareClick = (index) => {
    if (board[index] == null) {
      let newBoard = board.slice();
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    } else {
      alert("Invalid move");
    }
  };

  const resetBoard = () => {
    let newBoard = [null, null, null, null, null, null, null, null, null];
    setBoard(newBoard);
  };

  const checkWin = (board) => {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winCombos) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // X or O
      }
    }

    return null;
  };

  useEffect(() => {
    const winner = checkWin(board);
    if (winner) {
      alert(`Winner: ${winner}`);
    }
  }, [board]);

  return (
    <div>
      <div id="board">
        <Square
          index={0}
          value={board[0]}
          onClick={() => handleSquareClick(0)}
        />
        <Square
          index={1}
          value={board[1]}
          onClick={() => handleSquareClick(1)}
        />
        <Square
          index={2}
          value={board[2]}
          onClick={() => handleSquareClick(2)}
        />
        <Square
          index={3}
          value={board[3]}
          onClick={() => handleSquareClick(3)}
        />
        <Square
          index={4}
          value={board[4]}
          onClick={() => handleSquareClick(4)}
        />
        <Square
          index={5}
          value={board[5]}
          onClick={() => handleSquareClick(5)}
        />
        <Square
          index={6}
          value={board[6]}
          onClick={() => handleSquareClick(6)}
        />
        <Square
          index={7}
          value={board[7]}
          onClick={() => handleSquareClick(7)}
        />
        <Square
          index={8}
          value={board[8]}
          onClick={() => handleSquareClick(8)}
        />
      </div>
      <button onClick={() => resetBoard()}>New Game</button>
    </div>
  );
}

export default Board;
