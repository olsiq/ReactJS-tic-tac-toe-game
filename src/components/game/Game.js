import React, { useState } from "react";

import { calculateTicTacToeWinner } from "libraries/tictactoe";
import { Board } from "components/board";

import "./game.css";

function Game() {
  //states
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsnext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  //variables
  const current = history[stepNumber];

  const winnersFunc = calculateTicTacToeWinner(current.squares);
  const winner = winnersFunc ? winnersFunc.slice(0, 1) : null;
  let winners;
  winnersFunc && (winners = winnersFunc.slice(1));
  //status
  let status;
  winner
    ? (status = `winner ${winner}`)
    : (status = `next player ${xIsNext ? "x" : "o"}`);

  //(true) && (code) ==> if left of AND operator is true continue else go to next line
  //if there are no winners status is draw
  stepNumber === 9 && (status = "DRAW");
  //click function
  const handleClick = (i) => {
    //if we clicka btn in previous move history will update
    const funcHistory = history.slice(0, stepNumber + 1);
    const current = funcHistory[stepNumber];
    //we copy the squares array from current object to squaresInFunc
    const squaresInFunc = current.squares.slice();
    //one each click we check if we won or if btn has a value
    if (calculateTicTacToeWinner(squaresInFunc) || squaresInFunc[i]) {
      return;
    }
    squaresInFunc[i] = xIsNext ? "x" : "o";
    setHistory(funcHistory.concat([{ squares: squaresInFunc }]));
    setStepNumber(funcHistory.length);
    setXIsnext(!xIsNext);
  };
  const jumpTo = (step) => {
    setStepNumber(step);
    //if the step we move is even the next player is must be "x"
    setXIsnext(step % 2 === 0);
  };
  const moves = history.map((step, move) => {
    const description = move ? `go to move ${move}` : `Start!`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export { Game };
