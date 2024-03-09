import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };
  const moves = history.map((move) => {
    let description;
    if (move > 0) {
      description = "Go to move*" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div style={{marginLeft: "20%"}}>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "80px 20px 0px 0px" }}>
          <h1>Number of moves:</h1>
          <ol>{moves}</ol>
        </div>
        <div>
          <Board
            numValue={xIsNext}
            value={currentSquares}
            onPlay={handlePlay}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
