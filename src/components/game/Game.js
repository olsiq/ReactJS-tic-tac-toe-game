import React, { useReducer } from 'react';

import { calculateTicTacToeWinner } from 'libraries/helpers/tictactoe';
import { oneReducer } from 'libraries/reducers';
import { Board } from 'components/board';

import './game.css';

export const Game = () => {
  //use reduce
  const initial = {
    player: true,
    step: 0,
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
  };

  const [obj, dispatchOneReducer] = useReducer(oneReducer, initial);

  //variables
  const current = obj.history[obj.step];
  // console.log(current);
  const winnersFunc = calculateTicTacToeWinner(current.squares);
  const winner = winnersFunc ? winnersFunc.slice(0, 1) : null;
  let winners;
  winnersFunc && (winners = winnersFunc.slice(1));
  //status
  let status;
  winner
    ? (status = `winner ${winner}`)
    : (status = `next player ${obj.player ? 'X' : 'O'}`);
  if (obj.step === 9 && !winner) {
    status = 'DRAW';
  }
  //click function
  const handleClick = (i) => {
    //if we click a btn in previous move history will update

    const funcHistory = obj.history.slice(0, obj.step + 1);

    const current = funcHistory[obj.step];

    //we copy the squares array from current object to squaresInFunc
    const squaresInFunc = current.squares.slice();

    // //one each click we check if we won or if btn has a value
    if (calculateTicTacToeWinner(squaresInFunc) || squaresInFunc[i]) {
      return;
    }
    squaresInFunc[i] = obj.player ? 'X' : 'O';
    const changeHistory = funcHistory.concat([{ squares: squaresInFunc }]);
    dispatchOneReducer({
      type: 'ON_CLICK',
      payload2: changeHistory,
      payload1: funcHistory.length,
    });
  };
  const jumpTo = (step) => {
    dispatchOneReducer({ type: 'JUMP_TO', payload: step });
    //if the step we move is even the next player is must be "x"
    step % 2 === 0
      ? dispatchOneReducer({ type: 'SET_PLAYER', payload: true })
      : dispatchOneReducer({ type: 'SET_PLAYER', payload: false });
  };
  //console.log(history);
  const moves = obj.history.map((step, move) => {
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
};
