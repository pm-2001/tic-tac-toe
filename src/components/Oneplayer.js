import React, { useState, useEffect } from 'react';
import './Oneplayer.css';


const initialState = {
  squares: Array(9).fill(null),
  isPlayerTurn: true,
  winner: null
};

const App = () => {
  const [gameState, setGameState] = useState(initialState);

  useEffect(() => {
    if (!gameState.isPlayerTurn && !gameState.winner) {
      // AI's turn
      const squares = gameState.squares.slice();
      let aiMove;

      // Find an empty square randomly
      do {
        aiMove = Math.floor(Math.random() * 9);
      } while (squares[aiMove]);

      squares[aiMove] = 'O';

      const winner = checkWinner(squares);

      setGameState({
        squares,
        isPlayerTurn: true,
        winner
      });
    }
  }, [gameState]);

  const handleSquareClick = (index) => {
    if (gameState.squares[index] || gameState.winner) {
      return;
    }

    const squares = gameState.squares.slice();
    squares[index] = 'X';

    const winner = checkWinner(squares);

    setGameState({
      squares,
      isPlayerTurn: false,
      winner
    });
  };

  const renderSquare = (index) => (
    <button className="square1" onClick={() => handleSquareClick(index)}>
      {gameState.squares[index]}
    </button>
  );

  const resetGame = () => {
    setGameState(initialState);
  };

  return (
    <div className="App">
        {/* <div className="board"> */}
            <div className="status">
                {gameState.winner ? `Winner: ${gameState.winner}` : gameState.isPlayerTurn ? "Your Turn" : "AI's turn"}
            </div>
            <div className="row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            </div>
            <div className="row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            </div>
            <div className="row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
            </div>
        {/* </div> */}
        <div>
            {gameState.winner && (
                <button className="reset" onClick={resetGame}>
                Reset Game
                </button>
            )}
        </div>
    </div>
  );
};

export default App;

// Function to check for a winner
const checkWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};